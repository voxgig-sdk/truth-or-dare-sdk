import { TruthOrDareEntityBase } from '../TruthOrDareEntityBase';
import type { TruthOrDareSDK } from '../TruthOrDareSDK';
import type { Control } from '../types';
import type { Paranoia, ParanoiaLoadMatch } from '../TruthOrDareTypes';
declare class ParanoiaEntity extends TruthOrDareEntityBase<Paranoia> {
    constructor(client: TruthOrDareSDK, entopts: any);
    make(this: ParanoiaEntity): ParanoiaEntity;
    load(this: any, reqmatch?: ParanoiaLoadMatch, ctrl?: Control): Promise<ParanoiaEntity>;
}
export { ParanoiaEntity };
