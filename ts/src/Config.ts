
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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

