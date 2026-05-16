<?php
declare(strict_types=1);

// TruthOrDare SDK exists test

require_once __DIR__ . '/../truthordare_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TruthOrDareSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
