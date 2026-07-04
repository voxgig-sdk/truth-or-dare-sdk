
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { TruthOrDareSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('ParanoiaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRUTHORDARE_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRUTHORDARE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TruthOrDareSDK.test()
    const ent = testsdk.Paranoia()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRUTH_OR_DARE_TEST_LIVE
    for (const op of ['load']) {
      if (maybeSkipControl(t, 'entityOp', 'paranoia.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set TRUTH_OR_DARE_TEST_PARANOIA_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paranoia_ref01_data = Object.values(setup.data.existing.paranoia)[0] as any

    // LOAD
    const paranoia_ref01_ent = client.Paranoia()
    const paranoia_ref01_match_dt0: any = {}
    paranoia_ref01_match_dt0.id = paranoia_ref01_data.id
    const paranoia_ref01_data_dt0 = await paranoia_ref01_ent.load(paranoia_ref01_match_dt0)
    assert(paranoia_ref01_data_dt0.id === paranoia_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/paranoia/ParanoiaTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TruthOrDareSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['paranoia01','paranoia02','paranoia03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'TRUTH_OR_DARE_TEST_PARANOIA_ENTID': idmap,
    'TRUTH_OR_DARE_TEST_LIVE': 'FALSE',
    'TRUTH_OR_DARE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID']

  const live = 'TRUE' === env.TRUTH_OR_DARE_TEST_LIVE

  if (live) {
    client = new TruthOrDareSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TRUTH_OR_DARE_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
