// Typed models for the TruthOrDare SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Dare is the typed data model for the dare entity.
type Dare struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// DareLoadMatch mirrors the dare fields as an all-optional match
// filter (Go analog of Partial<Dare>).
type DareLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Nhie is the typed data model for the nhie entity.
type Nhie struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// NhieLoadMatch mirrors the nhie fields as an all-optional match
// filter (Go analog of Partial<Nhie>).
type NhieLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Paranoia is the typed data model for the paranoia entity.
type Paranoia struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// ParanoiaLoadMatch mirrors the paranoia fields as an all-optional match
// filter (Go analog of Partial<Paranoia>).
type ParanoiaLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Truth is the typed data model for the truth entity.
type Truth struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// TruthLoadMatch mirrors the truth fields as an all-optional match
// filter (Go analog of Partial<Truth>).
type TruthLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Wyr is the typed data model for the wyr entity.
type Wyr struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// WyrLoadMatch mirrors the wyr fields as an all-optional match
// filter (Go analog of Partial<Wyr>).
type WyrLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Question *string `json:"question,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
