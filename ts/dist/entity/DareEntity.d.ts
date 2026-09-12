import { TruthOrDareEntityBase } from '../TruthOrDareEntityBase';
import type { TruthOrDareSDK } from '../TruthOrDareSDK';
import type { Control } from '../types';
import type { Dare, DareLoadMatch } from '../TruthOrDareTypes';
declare class DareEntity extends TruthOrDareEntityBase<Dare> {
    constructor(client: TruthOrDareSDK, entopts: any);
    make(this: DareEntity): DareEntity;
    load(this: any, reqmatch?: DareLoadMatch, ctrl?: Control): Promise<DareEntity>;
}
export { DareEntity };
