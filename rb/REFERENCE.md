# TruthOrDare Ruby SDK Reference

Complete API reference for the TruthOrDare Ruby SDK.


## TruthOrDareSDK

### Constructor

```ruby
require_relative 'truth-or-dare_sdk'

client = TruthOrDareSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TruthOrDareSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TruthOrDareSDK.test
```


### Instance Methods

#### `Dare(data = nil)`

Create a new `Dare` entity instance. Pass `nil` for no initial data.

#### `Nhie(data = nil)`

Create a new `Nhie` entity instance. Pass `nil` for no initial data.

#### `Paranoia(data = nil)`

Create a new `Paranoia` entity instance. Pass `nil` for no initial data.

#### `Truth(data = nil)`

Create a new `Truth` entity instance. Pass `nil` for no initial data.

#### `Wyr(data = nil)`

Create a new `Wyr` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DareEntity

```ruby
dare = client.Dare
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Dare.load({ "id" => "dare_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DareEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NhieEntity

```ruby
nhie = client.Nhie
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Nhie.load({ "id" => "nhie_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NhieEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ParanoiaEntity

```ruby
paranoia = client.Paranoia
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Paranoia.load({ "id" => "paranoia_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ParanoiaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TruthEntity

```ruby
truth = client.Truth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Truth.load({ "id" => "truth_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TruthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WyrEntity

```ruby
wyr = client.Wyr
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Wyr.load({ "id" => "wyr_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WyrEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = TruthOrDareSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

