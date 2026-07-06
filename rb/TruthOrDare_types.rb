# frozen_string_literal: true

# Typed models for the TruthOrDare SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dare entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] rating
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Dare = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Request payload for Dare#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
DareLoadMatch = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Nhie entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] rating
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Nhie = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Request payload for Nhie#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
NhieLoadMatch = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Paranoia entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] rating
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Paranoia = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Request payload for Paranoia#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ParanoiaLoadMatch = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Truth entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] rating
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Truth = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Request payload for Truth#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TruthLoadMatch = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Wyr entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] rating
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Wyr = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

# Request payload for Wyr#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
WyrLoadMatch = Struct.new(
  :id,
  :question,
  :rating,
  :type,
  keyword_init: true
)

