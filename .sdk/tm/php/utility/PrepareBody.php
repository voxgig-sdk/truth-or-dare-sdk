<?php
declare(strict_types=1);

// TruthOrDare SDK utility: prepare_body

class TruthOrDarePrepareBody
{
    public static function call(TruthOrDareContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
