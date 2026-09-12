import { TruthOrDareEntityBase } from '../TruthOrDareEntityBase';
import type { TruthOrDareSDK } from '../TruthOrDareSDK';
import type { Control } from '../types';
import type { Wyr, WyrLoadMatch } from '../TruthOrDareTypes';
declare class WyrEntity extends TruthOrDareEntityBase<Wyr> {
    constructor(client: TruthOrDareSDK, entopts: any);
    make(this: WyrEntity): WyrEntity;
    load(this: any, reqmatch?: WyrLoadMatch, ctrl?: Control): Promise<WyrEntity>;
}
export { WyrEntity };
