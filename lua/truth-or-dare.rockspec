package = "voxgig-sdk-truth-or-dare"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/truth-or-dare-sdk.git"
}
description = {
  summary = "TruthOrDare SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["truth-or-dare_sdk"] = "truth-or-dare_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
