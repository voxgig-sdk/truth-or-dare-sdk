<?php
declare(strict_types=1);

// TruthOrDare SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TruthOrDareUtility::setRegistrar(function (TruthOrDareUtility $u): void {
    $u->clean = [TruthOrDareClean::class, 'call'];
    $u->done = [TruthOrDareDone::class, 'call'];
    $u->make_error = [TruthOrDareMakeError::class, 'call'];
    $u->feature_add = [TruthOrDareFeatureAdd::class, 'call'];
    $u->feature_hook = [TruthOrDareFeatureHook::class, 'call'];
    $u->feature_init = [TruthOrDareFeatureInit::class, 'call'];
    $u->fetcher = [TruthOrDareFetcher::class, 'call'];
    $u->make_fetch_def = [TruthOrDareMakeFetchDef::class, 'call'];
    $u->make_context = [TruthOrDareMakeContext::class, 'call'];
    $u->make_options = [TruthOrDareMakeOptions::class, 'call'];
    $u->make_request = [TruthOrDareMakeRequest::class, 'call'];
    $u->make_response = [TruthOrDareMakeResponse::class, 'call'];
    $u->make_result = [TruthOrDareMakeResult::class, 'call'];
    $u->make_point = [TruthOrDareMakePoint::class, 'call'];
    $u->make_spec = [TruthOrDareMakeSpec::class, 'call'];
    $u->make_url = [TruthOrDareMakeUrl::class, 'call'];
    $u->param = [TruthOrDareParam::class, 'call'];
    $u->prepare_auth = [TruthOrDarePrepareAuth::class, 'call'];
    $u->prepare_body = [TruthOrDarePrepareBody::class, 'call'];
    $u->prepare_headers = [TruthOrDarePrepareHeaders::class, 'call'];
    $u->prepare_method = [TruthOrDarePrepareMethod::class, 'call'];
    $u->prepare_params = [TruthOrDarePrepareParams::class, 'call'];
    $u->prepare_path = [TruthOrDarePreparePath::class, 'call'];
    $u->prepare_query = [TruthOrDarePrepareQuery::class, 'call'];
    $u->result_basic = [TruthOrDareResultBasic::class, 'call'];
    $u->result_body = [TruthOrDareResultBody::class, 'call'];
    $u->result_headers = [TruthOrDareResultHeaders::class, 'call'];
    $u->transform_request = [TruthOrDareTransformRequest::class, 'call'];
    $u->transform_response = [TruthOrDareTransformResponse::class, 'call'];
});
