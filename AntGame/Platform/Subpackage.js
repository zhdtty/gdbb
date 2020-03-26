import AntLog from "../../AntFrame/Log/AntLog";
import { Platform } from "./GamePlatform";

export class Subpackage {
    private static _self: Subpackage;
    private _loadedMap: Map<string, boolean>;

    public static get inst(): Subpackage {
        if (!this._self) {
            this._self = new Subpackage();
            this._self.init();
        }
        return this._self;
    }

    public init() {
        this._loadedMap = new Map<string, boolean>();
    }

    public async load(params: any): Promise<boolean> {
        if (!Platform.sdk.AsyncLoadSubpackage || !params.packName) {
            return false;
        }
        if (this._loadedMap[params.packName]) {
            return true;
        }
        let ret = await Platform.sdk.AsyncLoadSubpackage({
            packName: params.packName,
            success: function (res) {
                AntLog.Info("Load subpackage success! name:", params.packName);
                params.success && params.success(res);
                this._loadedMap[params.packName] = true;
            }.bind(this),
            fail: function (res) {
                AntLog.Info("Load subpackage success! name:", params.packName);
                params.fail && params.fail(res);
            },
            progress: function (res) {
                AntLog.Info("Loading subpackage ...... ", params.packName);
                params.progress && params.progress(res);
            }
        });
        return ret;
    }
}