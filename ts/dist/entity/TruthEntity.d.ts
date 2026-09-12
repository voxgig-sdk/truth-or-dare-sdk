import { TruthOrDareEntityBase } from '../TruthOrDareEntityBase';
import type { TruthOrDareSDK } from '../TruthOrDareSDK';
import type { Control } from '../types';
import type { Truth, TruthLoadMatch } from '../TruthOrDareTypes';
declare class TruthEntity extends TruthOrDareEntityBase<Truth> {
    constructor(client: TruthOrDareSDK, entopts: any);
    make(this: TruthEntity): TruthEntity;
    load(this: any, reqmatch?: TruthLoadMatch, ctrl?: Control): Promise<TruthEntity>;
}
export { TruthEntity };
