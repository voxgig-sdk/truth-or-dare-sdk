// Typed models for the TruthOrDare SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dare {
  id: string
  question: string
  rating: string
  type: string
}

export interface DareLoadMatch {
  rating?: string
}

export interface Nhie {
  id: string
  question: string
  rating: string
  type: string
}

export interface NhieLoadMatch {
  rating?: string
}

export interface Paranoia {
  id: string
  question: string
  rating: string
  type: string
}

export interface ParanoiaLoadMatch {
  rating?: string
}

export interface Truth {
  id: string
  question: string
  rating: string
  type: string
}

export interface TruthLoadMatch {
  rating?: string
}

export interface Wyr {
  id: string
  question: string
  rating: string
  type: string
}

export interface WyrLoadMatch {
  rating?: string
}

