import { Context } from './Context';
declare class TruthOrDareError extends Error {
    isTruthOrDareError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TruthOrDareError };
