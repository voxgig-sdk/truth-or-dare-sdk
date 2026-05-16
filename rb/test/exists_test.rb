# TruthOrDare SDK exists test

require "minitest/autorun"
require_relative "../TruthOrDare_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TruthOrDareSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
