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

export type DareLoadMatch = Partial<Dare>

export interface Nhie {
  id: string
  question: string
  rating: string
  type: string
}

export type NhieLoadMatch = Partial<Nhie>

export interface Paranoia {
  id: string
  question: string
  rating: string
  type: string
}

export type ParanoiaLoadMatch = Partial<Paranoia>

export interface Truth {
  id: string
  question: string
  rating: string
  type: string
}

export type TruthLoadMatch = Partial<Truth>

export interface Wyr {
  id: string
  question: string
  rating: string
  type: string
}

export type WyrLoadMatch = Partial<Wyr>

