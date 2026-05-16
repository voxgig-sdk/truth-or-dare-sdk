-- TruthOrDare SDK error

local TruthOrDareError = {}
TruthOrDareError.__index = TruthOrDareError


function TruthOrDareError.new(code, msg, ctx)
  local self = setmetatable({}, TruthOrDareError)
  self.is_sdk_error = true
  self.sdk = "TruthOrDare"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TruthOrDareError:error()
  return self.msg
end


function TruthOrDareError:__tostring()
  return self.msg
end


return TruthOrDareError
