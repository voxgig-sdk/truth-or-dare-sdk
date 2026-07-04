<?php
declare(strict_types=1);

// Typed models for the TruthOrDare SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Dare entity data model. */
class Dare
{
    public string $id;
    public string $question;
    public string $rating;
    public string $type;
}

/** Match filter for Dare#load (any subset of Dare fields). */
class DareLoadMatch
{
    public ?string $id = null;
    public ?string $question = null;
    public ?string $rating = null;
    public ?string $type = null;
}

/** Nhie entity data model. */
class Nhie
{
    public string $id;
    public string $question;
    public string $rating;
    public string $type;
}

/** Match filter for Nhie#load (any subset of Nhie fields). */
class NhieLoadMatch
{
    public ?string $id = null;
    public ?string $question = null;
    public ?string $rating = null;
    public ?string $type = null;
}

/** Paranoia entity data model. */
class Paranoia
{
    public string $id;
    public string $question;
    public string $rating;
    public string $type;
}

/** Match filter for Paranoia#load (any subset of Paranoia fields). */
class ParanoiaLoadMatch
{
    public ?string $id = null;
    public ?string $question = null;
    public ?string $rating = null;
    public ?string $type = null;
}

/** Truth entity data model. */
class Truth
{
    public string $id;
    public string $question;
    public string $rating;
    public string $type;
}

/** Match filter for Truth#load (any subset of Truth fields). */
class TruthLoadMatch
{
    public ?string $id = null;
    public ?string $question = null;
    public ?string $rating = null;
    public ?string $type = null;
}

/** Wyr entity data model. */
class Wyr
{
    public string $id;
    public string $question;
    public string $rating;
    public string $type;
}

/** Match filter for Wyr#load (any subset of Wyr fields). */
class WyrLoadMatch
{
    public ?string $id = null;
    public ?string $question = null;
    public ?string $rating = null;
    public ?string $type = null;
}

