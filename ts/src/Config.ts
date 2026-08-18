
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'TruthOrDare',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "dare"
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "nhie"
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "paranoia"
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "truth"
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "question",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "wyr"
              ],
              "select": {
                "exist": [
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

