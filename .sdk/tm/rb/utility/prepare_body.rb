# TruthOrDare SDK utility: prepare_body
require_relative 'media'
module TruthOrDareUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TruthOrDareUtilities.raw_body(ctx.reqdata) if TruthOrDareUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
