import { TruthOrDareEntityBase } from '../TruthOrDareEntityBase';
import type { TruthOrDareSDK } from '../TruthOrDareSDK';
import type { Control } from '../types';
import type { Nhie, NhieLoadMatch } from '../TruthOrDareTypes';
declare class NhieEntity extends TruthOrDareEntityBase<Nhie> {
    constructor(client: TruthOrDareSDK, entopts: any);
    make(this: NhieEntity): NhieEntity;
    load(this: any, reqmatch?: NhieLoadMatch, ctrl?: Control): Promise<NhieEntity>;
}
export { NhieEntity };
