

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TruthOrDareSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TruthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRUTH_OR_DARE_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRUTH_OR_DARE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TruthOrDareSDK.test()
    const ent = testsdk.Truth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRUTH_OR_DARE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'truth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"Unique identifier for the question","type":"`$STRING`","index$":0},{"active":true,"name":"question","req":true,"short":"The question text","type":"`$STRING`","index$":1},{"active":true,"name":"rating","req":true,"short":"The rating of the question","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":true,"short":"The type of question","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"truth","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"rating","orig":"rating","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /truth","json":"{\"operationId\":\"getTruth\",\"parameters\":[{\"description\":\"The rating of the question. Must be \\\"pg\\\", \\\"pg13\\\" or \\\"r\\\". You can use this query multiple times to get different ratings.\",\"in\":\"query\",\"name\":\"rating\",\"required\":false,\"schema\":{\"enum\":[\"pg\",\"pg13\",\"r\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"id\":\"ku9abgpj6u59\",\"question\":\"Would you break up with someone over text?\",\"rating\":\"PG13\",\"type\":\"TRUTH\"},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the question\",\"type\":\"string\"},\"question\":{\"description\":\"The question text\",\"type\":\"string\"},\"rating\":{\"description\":\"The rating of the question\",\"enum\":[\"PG\",\"PG13\",\"R\"],\"type\":\"string\"},\"type\":{\"description\":\"The type of question\",\"enum\":[\"TRUTH\",\"DARE\",\"WYR\",\"NHIE\",\"PARANOIA\"],\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"rating\",\"question\"],\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/truth","segments":[{"lit":"truth"}],"select":{"exist":["rating"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"truth","name__orig":"truth","Name":"Truth","name_":"truth","name-":"truth","NAME":"TRUTH","index$":3}, {"active":true,"entity":"truth","key$":"BasicTruthFlow","kind":"basic","name":"BasicTruthFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"truth_ref01","srcdatavar":"truth_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-truth_ref01"}}],"index$":0}]}, 'Truth')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let truth_ref01_data = Object.values(setup.data.existing.truth)[0] as any

    // LOAD
    const truth_ref01_ent = client.Truth()
    const truth_ref01_match_dt0: any = {}
    truth_ref01_match_dt0.id = truth_ref01_data.id
    const truth_ref01_data_dt0 = (await truth_ref01_ent.load(truth_ref01_match_dt0)).data()
    assert(truth_ref01_data_dt0.id === truth_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/truth/TruthTestData.json')

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
    ['truth01','truth02','truth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRUTH_OR_DARE_TEST_TRUTH_ENTID': idmap,
    'TRUTH_OR_DARE_TEST_LIVE': 'FALSE',
    'TRUTH_OR_DARE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRUTH_OR_DARE_TEST_TRUTH_ENTID']

  const live = 'TRUE' === env.TRUTH_OR_DARE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRUTH_OR_DARE_TEST_TRUTH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TruthOrDareSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
