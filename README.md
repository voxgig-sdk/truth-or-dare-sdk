# TruthOrDare SDK

Pull truth, dare, would-you-rather, never-have-I-ever, and paranoia prompts for party games and chat bots

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Truth or Dare API

The [Truth or Dare API](https://docs.truthordarebot.xyz/api-docs) serves party-game prompts across five classic categories: truth questions, dares, would-you-rather choices, never-have-I-ever statements, and paranoia questions. It backs the Truth or Dare Discord bot and is exposed publicly for anyone building chat bots, games, or party apps.

What you get from the API:

- A random prompt per request, returned as JSON with `id`, `type`, `rating`, and `question` fields.
- Five prompt categories: `TRUTH`, `DARE`, `WYR`, `NHIE`, and `PARANOIA`.
- A `rating` query parameter accepting `pg`, `pg13`, or `r` to control content level; the `r` rating is excluded by default unless explicitly requested.

The API is open and requires no authentication. A global rate limit of 5 requests per 5 seconds applies across all endpoints, and CORS is enabled so browser clients can call it directly.

## Try it

**TypeScript**
```bash
npm install truth-or-dare
```

**Python**
```bash
pip install truth-or-dare-sdk
```

**PHP**
```bash
composer require voxgig/truth-or-dare-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/truth-or-dare-sdk/go
```

**Ruby**
```bash
gem install truth-or-dare-sdk
```

**Lua**
```bash
luarocks install truth-or-dare-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TruthOrDareSDK } from 'truth-or-dare'

const client = new TruthOrDareSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o truth-or-dare-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "truth-or-dare": {
      "command": "/abs/path/to/truth-or-dare-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Dare** | A dare challenge prompt; fetched via `GET /api/dare`. | `/dare` |
| **Nhie** | A never-have-I-ever statement; fetched via `GET /api/nhie`. | `/nhie` |
| **Paranoia** | A paranoia-style question intended to be whispered to one player; fetched via `GET /api/paranoia`. | `/paranoia` |
| **Truth** | A truth question prompt; fetched via `GET /v1/truth`. | `/truth` |
| **Wyr** | A would-you-rather scenario with two choices; fetched via `GET /api/wyr`. | `/wyr` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from truthordare_sdk import TruthOrDareSDK

client = TruthOrDareSDK({})


# Load a specific dare
dare, err = client.Dare(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'truthordare_sdk.php';

$client = new TruthOrDareSDK([]);


// Load a specific dare
[$dare, $err] = $client->Dare(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/truth-or-dare-sdk/go"

client := sdk.NewTruthOrDareSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TruthOrDare_sdk"

client = TruthOrDareSDK.new({})


# Load a specific dare
dare, err = client.Dare(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("truth-or-dare_sdk")

local client = sdk.new({})


-- Load a specific dare
local dare, err = client:Dare(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TruthOrDareSDK.test()
const result = await client.Dare().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TruthOrDareSDK.test(None, None)
result, err = client.Dare(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TruthOrDareSDK::test(null, null);
[$result, $err] = $client->Dare(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Dare(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TruthOrDareSDK.test(nil, nil)
result, err = client.Dare(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Dare(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Truth or Dare API

- Upstream: [https://docs.truthordarebot.xyz/api-docs](https://docs.truthordarebot.xyz/api-docs)

---

Generated from the Truth or Dare API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
