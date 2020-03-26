import AntLog from "../../AntFrame/Log/AntLog";

export class AntRegistry {
    private static _inst: AntRegistry = null;
    private _data: Map<string, any> = null;
    public static get inst(): AntRegistry {
        if (AntRegistry._inst == undefined) {
            AntRegistry._inst = new AntRegistry;
        }
        return AntRegistry._inst;
    }

    constructor() {
        this._data = new Map<string, any>();
    }

    set(key:string, value:any): void {
        this._data.set(key, value);
    }

    get(key: string): any {
        return this._data.get(key);
    }

    delete(key: string): void {
        this._data.delete(key);
    }

    dump() {
        AntLog.Info(`================================`);
        AntLog.Info(`AntRegistry dump tools:`);
        this._data.forEach((v, k) => {
            AntLog.Info(`AntRegistry key: ${k}, value:${v}`);
        });
        AntLog.Info(`================================`);
    }
}
