-- TruthOrDare SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TruthOrDare",
      slug = "truth-or-dare",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.truthordarebot.xyz/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dare"] = {},
        ["nhie"] = {},
        ["paranoia"] = {},
        ["truth"] = {},
        ["wyr"] = {},
      },
    },
    entity = {
      ["dare"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The question text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["req"] = true,
            ["short"] = "The rating of the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The type of question",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "dare",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/dare",
                ["segments"] = {
                  {
                    ["lit"] = "dare",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "dare",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["nhie"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The question text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["req"] = true,
            ["short"] = "The rating of the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The type of question",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "nhie",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/nhie",
                ["segments"] = {
                  {
                    ["lit"] = "nhie",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "nhie",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["paranoia"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The question text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["req"] = true,
            ["short"] = "The rating of the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The type of question",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "paranoia",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/paranoia",
                ["segments"] = {
                  {
                    ["lit"] = "paranoia",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "paranoia",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["truth"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The question text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["req"] = true,
            ["short"] = "The rating of the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The type of question",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "truth",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/truth",
                ["segments"] = {
                  {
                    ["lit"] = "truth",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "truth",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["wyr"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The question text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["req"] = true,
            ["short"] = "The rating of the question",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "The type of question",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "wyr",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/wyr",
                ["segments"] = {
                  {
                    ["lit"] = "wyr",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "wyr",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
