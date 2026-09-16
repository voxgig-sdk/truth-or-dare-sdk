# TruthOrDare SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TruthOrDareFeatures
  def self.make_feature(name)
    case name
    when "base"
      TruthOrDareBaseFeature.new
    when "ratelimit"
      TruthOrDareRatelimitFeature.new
    when "retry"
      TruthOrDareRetryFeature.new
    when "test"
      TruthOrDareTestFeature.new
    when "timeout"
      TruthOrDareTimeoutFeature.new
    else
      TruthOrDareBaseFeature.new
    end
  end
end
