# TruthOrDare Lua SDK Reference

Complete API reference for the TruthOrDare Lua SDK.


## TruthOrDareSDK

### Constructor

```lua
local sdk = require("truth-or-dare_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Dare(data)`

Create a new `Dare` entity instance. Pass `nil` for no initial data.

#### `Nhie(data)`

Create a new `Nhie` entity instance. Pass `nil` for no initial data.

#### `Paranoia(data)`

Create a new `Paranoia` entity instance. Pass `nil` for no initial data.

#### `Truth(data)`

Create a new `Truth` entity instance. Pass `nil` for no initial data.

#### `Wyr(data)`

Create a new `Wyr` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## DareEntity

```lua
local dare = client:Dare(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dare():load({ id = "dare_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DareEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NhieEntity

```lua
local nhie = client:Nhie(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Nhie():load({ id = "nhie_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NhieEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ParanoiaEntity

```lua
local paranoia = client:Paranoia(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Paranoia():load({ id = "paranoia_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParanoiaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TruthEntity

```lua
local truth = client:Truth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Truth():load({ id = "truth_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TruthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WyrEntity

```lua
local wyr = client:Wyr(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | Yes |  |
| `question` | ``$STRING`` | Yes |  |
| `rating` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Wyr():load({ id = "wyr_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WyrEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

