-- TruthOrDare SDK exists test

local sdk = require("truth-or-dare_sdk")

describe("TruthOrDareSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
