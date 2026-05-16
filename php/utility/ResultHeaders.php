<?php
declare(strict_types=1);

// TruthOrDare SDK utility: result_headers

class TruthOrDareResultHeaders
{
    public static function call(TruthOrDareContext $ctx): ?TruthOrDareResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
