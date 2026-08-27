# TruthOrDare SDK configuration

module TruthOrDareConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "TruthOrDare",
        "slug" => "truth-or-dare",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.truthordarebot.xyz/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "dare" => {},
          "nhie" => {},
          "paranoia" => {},
          "truth" => {},
          "wyr" => {},
        },
      },
      "entity" => {
        "dare" => {
          "fields" => [
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "question",
              "req" => true,
              "short" => "The question text",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "req" => true,
              "short" => "The rating of the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "short" => "The type of question",
              "type" => "`$STRING`",
            },
          ],
          "name" => "dare",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/dare",
                  "parts" => [
                    "dare",
                  ],
                  "select" => {
                    "exist" => [
                      "rating",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "nhie" => {
          "fields" => [
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "question",
              "req" => true,
              "short" => "The question text",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "req" => true,
              "short" => "The rating of the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "short" => "The type of question",
              "type" => "`$STRING`",
            },
          ],
          "name" => "nhie",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/nhie",
                  "parts" => [
                    "nhie",
                  ],
                  "select" => {
                    "exist" => [
                      "rating",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "paranoia" => {
          "fields" => [
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "question",
              "req" => true,
              "short" => "The question text",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "req" => true,
              "short" => "The rating of the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "short" => "The type of question",
              "type" => "`$STRING`",
            },
          ],
          "name" => "paranoia",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/paranoia",
                  "parts" => [
                    "paranoia",
                  ],
                  "select" => {
                    "exist" => [
                      "rating",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "truth" => {
          "fields" => [
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "question",
              "req" => true,
              "short" => "The question text",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "req" => true,
              "short" => "The rating of the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "short" => "The type of question",
              "type" => "`$STRING`",
            },
          ],
          "name" => "truth",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/truth",
                  "parts" => [
                    "truth",
                  ],
                  "select" => {
                    "exist" => [
                      "rating",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "wyr" => {
          "fields" => [
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "question",
              "req" => true,
              "short" => "The question text",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "req" => true,
              "short" => "The rating of the question",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "req" => true,
              "short" => "The type of question",
              "type" => "`$STRING`",
            },
          ],
          "name" => "wyr",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/wyr",
                  "parts" => [
                    "wyr",
                  ],
                  "select" => {
                    "exist" => [
                      "rating",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TruthOrDareFeatures.make_feature(name)
  end
end
