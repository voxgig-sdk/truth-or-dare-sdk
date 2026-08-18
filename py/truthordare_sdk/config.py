# TruthOrDare SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "TruthOrDare",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.truthordarebot.xyz/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dare": {},
                "nhie": {},
                "paranoia": {},
                "truth": {},
                "wyr": {},
            },
        },
        "entity": {
      "dare": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/dare",
                "parts": [
                  "dare",
                ],
                "select": {
                  "exist": [
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "nhie": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/nhie",
                "parts": [
                  "nhie",
                ],
                "select": {
                  "exist": [
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "paranoia": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/paranoia",
                "parts": [
                  "paranoia",
                ],
                "select": {
                  "exist": [
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "truth": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/truth",
                "parts": [
                  "truth",
                ],
                "select": {
                  "exist": [
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "wyr": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "question",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/wyr",
                "parts": [
                  "wyr",
                ],
                "select": {
                  "exist": [
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
