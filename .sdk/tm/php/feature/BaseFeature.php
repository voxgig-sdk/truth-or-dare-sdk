<?php
declare(strict_types=1);

// TruthOrDare SDK base feature

class TruthOrDareBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TruthOrDareContext $ctx, array $options): void {}
    public function PostConstruct(TruthOrDareContext $ctx): void {}
    public function PostConstructEntity(TruthOrDareContext $ctx): void {}
    public function SetData(TruthOrDareContext $ctx): void {}
    public function GetData(TruthOrDareContext $ctx): void {}
    public function GetMatch(TruthOrDareContext $ctx): void {}
    public function SetMatch(TruthOrDareContext $ctx): void {}
    public function PrePoint(TruthOrDareContext $ctx): void {}
    public function PreSpec(TruthOrDareContext $ctx): void {}
    public function PreRequest(TruthOrDareContext $ctx): void {}
    public function PreResponse(TruthOrDareContext $ctx): void {}
    public function PreResult(TruthOrDareContext $ctx): void {}
    public function PreDone(TruthOrDareContext $ctx): void {}
    public function PreUnexpected(TruthOrDareContext $ctx): void {}
}
