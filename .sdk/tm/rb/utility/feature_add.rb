# TruthOrDare SDK utility: feature_add
module TruthOrDareUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
