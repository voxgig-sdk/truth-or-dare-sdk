"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ParanoiaEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRUTH_OR_DARE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRUTH_OR_DARE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TruthOrDareSDK.test();
        const ent = testsdk.Paranoia();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRUTH_OR_DARE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paranoia.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the question", "t": "`$STRING`", "key$": "id", "index$": 0 }, "question": { "a": true, "h": "Question", "n": "question", "r": true, "sh": "The question text", "t": "`$STRING`", "key$": "question", "index$": 1 }, "rating": { "a": true, "h": "Rating", "n": "rating", "r": true, "sh": "The rating of the question", "t": "`$STRING`", "key$": "rating", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of question", "t": "`$STRING`", "key$": "type", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "paranoia", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /paranoia", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "rating", "or": "rating", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/paranoia", "q": { "exist": ["rating"] }, "r": {}, "s": [{ "lit": "paranoia" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "paranoia", "name__orig": "paranoia", "Name": "Paranoia", "name_": "paranoia", "name-": "paranoia", "NAME": "PARANOIA", "index$": 2 }, { "active": true, "entity": "paranoia", "key$": "BasicParanoiaFlow", "kind": "basic", "name": "BasicParanoiaFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "paranoia_ref01", "srcdatavar": "paranoia_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-paranoia_ref01" } }], "index$": 0 }] }, 'Paranoia', { "GET /paranoia": { "protocol": "http", "operationId": "getParanoia", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Unique identifier for the question", "key$": "id", "type": "string" }, "type": { "description": "The type of question", "enum": ["TRUTH", "DARE", "WYR", "NHIE", "PARANOIA"], "key$": "type", "type": "string" }, "rating": { "description": "The rating of the question", "enum": ["PG", "PG13", "R"], "key$": "rating", "type": "string" }, "question": { "description": "The question text", "key$": "question", "type": "string" } }, "required": ["id", "type", "rating", "question"], "x-ref": "#/components/schemas/Question", "index$": 0 }, "example": { "id": "ku9abgpk00fs", "type": "PARANOIA", "rating": "PG13", "question": "Who's most likely to move to stay with a partner?" } } } } }, "parameters": [{ "name": "rating", "in": "query", "description": "The rating of the question. Must be \"pg\", \"pg13\" or \"r\". You can use this query multiple times to get different ratings.", "required": false, "schema": { "type": "string", "enum": ["pg", "pg13", "r"] }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paranoia_ref01_data = Object.values(setup.data.existing.paranoia)[0];
        // LOAD
        const paranoia_ref01_ent = client.Paranoia();
        const paranoia_ref01_match_dt0 = {};
        paranoia_ref01_match_dt0.id = paranoia_ref01_data.id;
        const paranoia_ref01_data_dt0 = (await paranoia_ref01_ent.load(paranoia_ref01_match_dt0)).data();
        (0, node_assert_1.default)(paranoia_ref01_data_dt0.id === paranoia_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paranoia/ParanoiaTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TruthOrDareSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paranoia01', 'paranoia02', 'paranoia03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRUTH_OR_DARE_TEST_PARANOIA_ENTID': idmap,
        'TRUTH_OR_DARE_TEST_LIVE': 'FALSE',
        'TRUTH_OR_DARE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID'];
    const live = 'TRUE' === env.TRUTH_OR_DARE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRUTH_OR_DARE_TEST_PARANOIA_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TruthOrDareSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.TRUTH_OR_DARE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ParanoiaEntity.test.js.map