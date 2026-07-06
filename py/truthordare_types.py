# Typed models for the TruthOrDare SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Dare(TypedDict):
    id: str
    question: str
    rating: str
    type: str


class DareLoadMatchRequired(TypedDict):
    id: str


class DareLoadMatch(DareLoadMatchRequired, total=False):
    question: str
    rating: str
    type: str


class Nhie(TypedDict):
    id: str
    question: str
    rating: str
    type: str


class NhieLoadMatchRequired(TypedDict):
    id: str


class NhieLoadMatch(NhieLoadMatchRequired, total=False):
    question: str
    rating: str
    type: str


class Paranoia(TypedDict):
    id: str
    question: str
    rating: str
    type: str


class ParanoiaLoadMatchRequired(TypedDict):
    id: str


class ParanoiaLoadMatch(ParanoiaLoadMatchRequired, total=False):
    question: str
    rating: str
    type: str


class Truth(TypedDict):
    id: str
    question: str
    rating: str
    type: str


class TruthLoadMatchRequired(TypedDict):
    id: str


class TruthLoadMatch(TruthLoadMatchRequired, total=False):
    question: str
    rating: str
    type: str


class Wyr(TypedDict):
    id: str
    question: str
    rating: str
    type: str


class WyrLoadMatchRequired(TypedDict):
    id: str


class WyrLoadMatch(WyrLoadMatchRequired, total=False):
    question: str
    rating: str
    type: str
