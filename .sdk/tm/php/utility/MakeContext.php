<?php
declare(strict_types=1);

// TruthOrDare SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TruthOrDareMakeContext
{
    public static function call(array $ctxmap, ?TruthOrDareContext $basectx): TruthOrDareContext
    {
        return new TruthOrDareContext($ctxmap, $basectx);
    }
}
