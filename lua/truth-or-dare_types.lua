-- Typed models for the TruthOrDare SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dare
---@field id string
---@field question string
---@field rating string
---@field type string

---@class DareLoadMatch

---@class Nhie
---@field id string
---@field question string
---@field rating string
---@field type string

---@class NhieLoadMatch

---@class Paranoia
---@field id string
---@field question string
---@field rating string
---@field type string

---@class ParanoiaLoadMatch

---@class Truth
---@field id string
---@field question string
---@field rating string
---@field type string

---@class TruthLoadMatch

---@class Wyr
---@field id string
---@field question string
---@field rating string
---@field type string

---@class WyrLoadMatch

local M = {}

return M
