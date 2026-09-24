
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


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the question"
        },
        {
          "name": "question",
          "title": "Question",
          "type": "`$STRING`",
          "req": true,
          "short": "The question text"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "req": true,
          "short": "The rating of the question"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of question"
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
              "kind": "http",
              "method": "GET",
              "orig": "/dare",
              "segments": [
                {
                  "lit": "dare"
                }
              ],
              "parts": [
                "dare"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "rating"
                ]
              }
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
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the question"
        },
        {
          "name": "question",
          "title": "Question",
          "type": "`$STRING`",
          "req": true,
          "short": "The question text"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "req": true,
          "short": "The rating of the question"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of question"
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
              "kind": "http",
              "method": "GET",
              "orig": "/nhie",
              "segments": [
                {
                  "lit": "nhie"
                }
              ],
              "parts": [
                "nhie"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "rating"
                ]
              }
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
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the question"
        },
        {
          "name": "question",
          "title": "Question",
          "type": "`$STRING`",
          "req": true,
          "short": "The question text"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "req": true,
          "short": "The rating of the question"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of question"
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
              "kind": "http",
              "method": "GET",
              "orig": "/paranoia",
              "segments": [
                {
                  "lit": "paranoia"
                }
              ],
              "parts": [
                "paranoia"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "rating"
                ]
              }
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
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the question"
        },
        {
          "name": "question",
          "title": "Question",
          "type": "`$STRING`",
          "req": true,
          "short": "The question text"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "req": true,
          "short": "The rating of the question"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of question"
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
              "kind": "http",
              "method": "GET",
              "orig": "/truth",
              "segments": [
                {
                  "lit": "truth"
                }
              ],
              "parts": [
                "truth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "rating"
                ]
              }
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
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the question"
        },
        {
          "name": "question",
          "title": "Question",
          "type": "`$STRING`",
          "req": true,
          "short": "The question text"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "req": true,
          "short": "The rating of the question"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of question"
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
              "kind": "http",
              "method": "GET",
              "orig": "/wyr",
              "segments": [
                {
                  "lit": "wyr"
                }
              ],
              "parts": [
                "wyr"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "rating"
                ]
              }
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

