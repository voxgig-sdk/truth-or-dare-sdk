<?php
declare(strict_types=1);

// TruthOrDare SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TruthOrDareFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TruthOrDareBaseFeature();
            case "test":
                return new TruthOrDareTestFeature();
            default:
                return new TruthOrDareBaseFeature();
        }
    }
}
