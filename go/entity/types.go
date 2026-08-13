// Typed models for the TruthOrDare SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/truth-or-dare-sdk/go/core"
)

// Dare is the typed data model for the dare entity.
type Dare struct {
	Id string `json:"id"`
	Question string `json:"question"`
	Rating string `json:"rating"`
	Type string `json:"type"`
}

// DareLoadMatch is the typed request payload for Dare.LoadTyped.
type DareLoadMatch struct {
	Id string `json:"id"`
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

// NhieLoadMatch is the typed request payload for Nhie.LoadTyped.
type NhieLoadMatch struct {
	Id string `json:"id"`
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

// ParanoiaLoadMatch is the typed request payload for Paranoia.LoadTyped.
type ParanoiaLoadMatch struct {
	Id string `json:"id"`
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

// TruthLoadMatch is the typed request payload for Truth.LoadTyped.
type TruthLoadMatch struct {
	Id string `json:"id"`
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

// WyrLoadMatch is the typed request payload for Wyr.LoadTyped.
type WyrLoadMatch struct {
	Id string `json:"id"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
