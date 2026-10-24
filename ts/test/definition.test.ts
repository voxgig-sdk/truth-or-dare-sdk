import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "dare",
    "accessor": "Dare",
    "op": "load",
    "method": "GET",
    "path": "/dare",
    "args": [],
    "select": {
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rating"
    ],
    "queryArgs": [
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "ku9abgpjs933",
      "type": "DARE",
      "rating": "PG13",
      "question": "Rate everyone here 1-10 in terms of looks."
    },
    "idField": "id"
  },
  {
    "entity": "nhie",
    "accessor": "Nhie",
    "op": "load",
    "method": "GET",
    "path": "/nhie",
    "args": [],
    "select": {
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rating"
    ],
    "queryArgs": [
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "ku9abgpk74r5",
      "type": "NHIE",
      "rating": "PG13",
      "question": "Never have I ever dated someone in this server."
    },
    "idField": "id"
  },
  {
    "entity": "paranoia",
    "accessor": "Paranoia",
    "op": "load",
    "method": "GET",
    "path": "/paranoia",
    "args": [],
    "select": {
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rating"
    ],
    "queryArgs": [
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "ku9abgpk00fs",
      "type": "PARANOIA",
      "rating": "PG13",
      "question": "Who's most likely to move to stay with a partner?"
    },
    "idField": "id"
  },
  {
    "entity": "truth",
    "accessor": "Truth",
    "op": "load",
    "method": "GET",
    "path": "/truth",
    "args": [],
    "select": {
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rating"
    ],
    "queryArgs": [
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "ku9abgpj6u59",
      "type": "TRUTH",
      "rating": "PG13",
      "question": "Would you break up with someone over text?"
    },
    "idField": "id"
  },
  {
    "entity": "wyr",
    "accessor": "Wyr",
    "op": "load",
    "method": "GET",
    "path": "/wyr",
    "args": [],
    "select": {
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "rating"
    ],
    "queryArgs": [
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "ku9abgpkd2mo",
      "type": "WYR",
      "rating": "PG13",
      "question": "Would you rather be unhappily single OR unhappily married?"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
