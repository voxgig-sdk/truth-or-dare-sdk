package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/truth-or-dare-sdk/go"
	"github.com/voxgig-sdk/truth-or-dare-sdk/go/core"

	vs "github.com/voxgig-sdk/truth-or-dare-sdk/go/utility/struct"
)

func TestNhieEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Nhie(nil)
		if ent == nil {
			t.Fatal("expected non-nil NhieEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := nhieBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "nhie." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set TRUTHORDARE_TEST_NHIE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		nhieRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.nhie", setup.data)))
		var nhieRef01Data map[string]any
		if len(nhieRef01DataRaw) > 0 {
			nhieRef01Data = core.ToMapAny(nhieRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = nhieRef01Data

		// LOAD
		nhieRef01Ent := client.Nhie(nil)
		nhieRef01MatchDt0 := map[string]any{
			"id": nhieRef01Data["id"],
		}
		nhieRef01DataDt0Loaded, err := nhieRef01Ent.Load(nhieRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		nhieRef01DataDt0LoadResult := core.ToMapAny(nhieRef01DataDt0Loaded)
		if nhieRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if nhieRef01DataDt0LoadResult["id"] != nhieRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func nhieBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "nhie", "NhieTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read nhie test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse nhie test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"nhie01", "nhie02", "nhie03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("TRUTHORDARE_TEST_NHIE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRUTHORDARE_TEST_NHIE_ENTID": idmap,
		"TRUTHORDARE_TEST_LIVE":      "FALSE",
		"TRUTHORDARE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TRUTHORDARE_TEST_NHIE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TRUTHORDARE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewTruthOrDareSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TRUTHORDARE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TRUTHORDARE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
