<?php
declare(strict_types=1);

// TruthOrDare SDK utility: result_body

class TruthOrDareResultBody
{
    public static function call(TruthOrDareContext $ctx): ?TruthOrDareResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
