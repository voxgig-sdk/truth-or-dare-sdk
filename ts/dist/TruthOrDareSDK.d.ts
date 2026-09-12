import { DareEntity } from './entity/DareEntity';
import { NhieEntity } from './entity/NhieEntity';
import { ParanoiaEntity } from './entity/ParanoiaEntity';
import { TruthEntity } from './entity/TruthEntity';
import { WyrEntity } from './entity/WyrEntity';
export type * from './TruthOrDareTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TruthOrDareEntityBase } from './TruthOrDareEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TruthOrDareSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Dare(entopts?: Record<string, any>): DareEntity;
    Nhie(entopts?: Record<string, any>): NhieEntity;
    Paranoia(entopts?: Record<string, any>): ParanoiaEntity;
    Truth(entopts?: Record<string, any>): TruthEntity;
    Wyr(entopts?: Record<string, any>): WyrEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TruthOrDareSDK;
    tester(testopts?: any, sdkopts?: any): TruthOrDareSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TruthOrDareSDK;
export { stdutil, config, BaseFeature, TruthOrDareEntityBase, TruthOrDareSDK, SDK, };
