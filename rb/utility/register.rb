# TruthOrDare SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TruthOrDareUtility.registrar = ->(u) {
  u.clean = TruthOrDareUtilities::Clean
  u.done = TruthOrDareUtilities::Done
  u.make_error = TruthOrDareUtilities::MakeError
  u.feature_add = TruthOrDareUtilities::FeatureAdd
  u.feature_hook = TruthOrDareUtilities::FeatureHook
  u.feature_init = TruthOrDareUtilities::FeatureInit
  u.fetcher = TruthOrDareUtilities::Fetcher
  u.make_fetch_def = TruthOrDareUtilities::MakeFetchDef
  u.make_context = TruthOrDareUtilities::MakeContext
  u.make_options = TruthOrDareUtilities::MakeOptions
  u.make_request = TruthOrDareUtilities::MakeRequest
  u.make_response = TruthOrDareUtilities::MakeResponse
  u.make_result = TruthOrDareUtilities::MakeResult
  u.make_point = TruthOrDareUtilities::MakePoint
  u.make_spec = TruthOrDareUtilities::MakeSpec
  u.make_url = TruthOrDareUtilities::MakeUrl
  u.param = TruthOrDareUtilities::Param
  u.prepare_auth = TruthOrDareUtilities::PrepareAuth
  u.prepare_body = TruthOrDareUtilities::PrepareBody
  u.prepare_headers = TruthOrDareUtilities::PrepareHeaders
  u.prepare_method = TruthOrDareUtilities::PrepareMethod
  u.prepare_params = TruthOrDareUtilities::PrepareParams
  u.prepare_path = TruthOrDareUtilities::PreparePath
  u.prepare_query = TruthOrDareUtilities::PrepareQuery
  u.result_basic = TruthOrDareUtilities::ResultBasic
  u.result_body = TruthOrDareUtilities::ResultBody
  u.result_headers = TruthOrDareUtilities::ResultHeaders
  u.transform_request = TruthOrDareUtilities::TransformRequest
  u.transform_response = TruthOrDareUtilities::TransformResponse
}
