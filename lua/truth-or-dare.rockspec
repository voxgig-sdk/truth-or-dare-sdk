package = "voxgig-sdk-truth-or-dare"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/truth-or-dare-sdk.git",
  tag = "lua/v0.0.1",
  dir = "truth-or-dare-sdk/lua"
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
