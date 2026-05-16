<?php
declare(strict_types=1);

// TruthOrDare SDK utility: feature_add

class TruthOrDareFeatureAdd
{
    public static function call(TruthOrDareContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
