"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthOrDareError = void 0;
class TruthOrDareError extends Error {
    isTruthOrDareError = true;
    sdk = 'TruthOrDare';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TruthOrDareError = TruthOrDareError;
//# sourceMappingURL=TruthOrDareError.js.map