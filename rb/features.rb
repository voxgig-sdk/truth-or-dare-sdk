# TruthOrDare SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TruthOrDareFeatures
  def self.make_feature(name)
    case name
    when "base"
      TruthOrDareBaseFeature.new
    when "test"
      TruthOrDareTestFeature.new
    else
      TruthOrDareBaseFeature.new
    end
  end
end
