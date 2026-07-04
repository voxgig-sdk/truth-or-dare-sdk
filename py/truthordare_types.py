# Typed models for the TruthOrDare SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dare:
    id: str
    question: str
    rating: str
    type: str


@dataclass
class DareLoadMatch:
    id: Optional[str] = None
    question: Optional[str] = None
    rating: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Nhie:
    id: str
    question: str
    rating: str
    type: str


@dataclass
class NhieLoadMatch:
    id: Optional[str] = None
    question: Optional[str] = None
    rating: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Paranoia:
    id: str
    question: str
    rating: str
    type: str


@dataclass
class ParanoiaLoadMatch:
    id: Optional[str] = None
    question: Optional[str] = None
    rating: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Truth:
    id: str
    question: str
    rating: str
    type: str


@dataclass
class TruthLoadMatch:
    id: Optional[str] = None
    question: Optional[str] = None
    rating: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Wyr:
    id: str
    question: str
    rating: str
    type: str


@dataclass
class WyrLoadMatch:
    id: Optional[str] = None
    question: Optional[str] = None
    rating: Optional[str] = None
    type: Optional[str] = None

