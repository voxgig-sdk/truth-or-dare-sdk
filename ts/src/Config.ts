
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TruthOrDare',
        slug: "truth-or-dare",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.truthordarebot.xyz/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      dare: {
      },

      nhie: {
      },

      paranoia: {
      },

      truth: {
      },

      wyr: {
      },

    }
  }


  entity = {
    "dare": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the question",
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "short": "The question text",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "short": "The rating of the question",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of question",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "dare",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/dare",
              "segments": [
                {
                  "lit": "dare"
                }
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dare"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "nhie": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the question",
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "short": "The question text",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "short": "The rating of the question",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of question",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "nhie",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/nhie",
              "segments": [
                {
                  "lit": "nhie"
                }
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "nhie"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "paranoia": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the question",
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "short": "The question text",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "short": "The rating of the question",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of question",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "paranoia",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/paranoia",
              "segments": [
                {
                  "lit": "paranoia"
                }
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "paranoia"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "truth": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the question",
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "short": "The question text",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "short": "The rating of the question",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of question",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "truth",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/truth",
              "segments": [
                {
                  "lit": "truth"
                }
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "truth"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "wyr": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the question",
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "short": "The question text",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "short": "The rating of the question",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of question",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "wyr",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/wyr",
              "segments": [
                {
                  "lit": "wyr"
                }
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "wyr"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

