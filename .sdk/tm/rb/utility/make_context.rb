# TruthOrDare SDK utility: make_context
require_relative '../core/context'
module TruthOrDareUtilities
  MakeContext = ->(ctxmap, basectx) {
    TruthOrDareContext.new(ctxmap, basectx)
  }
end
