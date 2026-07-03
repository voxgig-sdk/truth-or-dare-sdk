# Nhie entity test

require "minitest/autorun"
require "json"
require_relative "../TruthOrDare_sdk"
require_relative "runner"

class NhieEntityTest < Minitest::Test
  def test_create_instance
    testsdk = TruthOrDareSDK.test(nil, nil)
    ent = testsdk.Nhie(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = nhie_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "nhie." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set TRUTHORDARE_TEST_NHIE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    nhie_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.nhie")))
    nhie_ref01_data = nil
    if nhie_ref01_data_raw.length > 0
      nhie_ref01_data = Helpers.to_map(nhie_ref01_data_raw[0][1])
    end

    # LOAD
    nhie_ref01_ent = client.Nhie(nil)
    nhie_ref01_match_dt0 = {
      "id" => nhie_ref01_data["id"],
    }
    nhie_ref01_data_dt0_loaded, err = nhie_ref01_ent.load(nhie_ref01_match_dt0, nil)
    assert_nil err
    nhie_ref01_data_dt0_load_result = Helpers.to_map(nhie_ref01_data_dt0_loaded)
    assert !nhie_ref01_data_dt0_load_result.nil?
    assert_equal nhie_ref01_data_dt0_load_result["id"], nhie_ref01_data["id"]

  end
end

def nhie_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "nhie", "NhieTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TruthOrDareSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["nhie01", "nhie02", "nhie03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["TRUTHORDARE_TEST_NHIE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "TRUTHORDARE_TEST_NHIE_ENTID" => idmap,
    "TRUTHORDARE_TEST_LIVE" => "FALSE",
    "TRUTHORDARE_TEST_EXPLAIN" => "FALSE",
    "TRUTHORDARE_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["TRUTHORDARE_TEST_NHIE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["TRUTHORDARE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["TRUTHORDARE_APIKEY"],
      },
      extra || {},
    ])
    client = TruthOrDareSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["TRUTHORDARE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["TRUTHORDARE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
