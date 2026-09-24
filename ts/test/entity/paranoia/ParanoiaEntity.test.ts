

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ParanoiaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRUTH_OR_DARE_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRUTH_OR_DARE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TruthOrDareSDK.test()
    const ent = testsdk.Paranoia()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRUTH_OR_DARE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paranoia.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the question","t":"`$STRING`","key$":"id","index$":0},"question":{"a":true,"h":"Question","n":"question","r":true,"sh":"The question text","t":"`$STRING`","key$":"question","index$":1},"rating":{"a":true,"h":"Rating","n":"rating","r":true,"sh":"The rating of the question","t":"`$STRING`","key$":"rating","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of question","t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"paranoia","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /paranoia","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"rating","or":"rating","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/paranoia","q":{"exist":["rating"]},"r":{},"s":[{"lit":"paranoia"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"paranoia","name__orig":"paranoia","Name":"Paranoia","name_":"paranoia","name-":"paranoia","NAME":"PARANOIA","index$":2}, {"active":true,"entity":"paranoia","key$":"BasicParanoiaFlow","kind":"basic","name":"BasicParanoiaFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"paranoia_ref01","srcdatavar":"paranoia_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paranoia_ref01"}}],"index$":0}]}, 'Paranoia', {"GET /paranoia":{"protocol":"http","operationId":"getParanoia","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"description":"Unique identifier for the question","key$":"id","type":"string"},"type":{"description":"The type of question","enum":["TRUTH","DARE","WYR","NHIE","PARANOIA"],"key$":"type","type":"string"},"rating":{"description":"The rating of the question","enum":["PG","PG13","R"],"key$":"rating","type":"string"},"question":{"description":"The question text","key$":"question","type":"string"}},"required":["id","type","rating","question"],"x-ref":"#/components/schemas/Question","index$":0},"example":{"id":"ku9abgpk00fs","type":"PARANOIA","rating":"PG13","question":"Who's most likely to move to stay with a partner?"}}}}},"parameters":[{"name":"rating","in":"query","description":"The rating of the question. Must be \"pg\", \"pg13\" or \"r\". You can use this query multiple times to get different ratings.","required":false,"schema":{"type":"string","enum":["pg","pg13","r"]},"index$":0}],"securitySource":"unspecified"}})
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
    const paranoia_ref01_data_dt0 = (await paranoia_ref01_ent.load(paranoia_ref01_match_dt0)).data()
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

  const env = envOverride({
    'TRUTH_OR_DARE_TEST_PARANOIA_ENTID': idmap,
    'TRUTH_OR_DARE_TEST_LIVE': 'FALSE',
    'TRUTH_OR_DARE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID']

  const live = 'TRUE' === env.TRUTH_OR_DARE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID']
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
  
