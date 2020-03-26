import AntLogConfig from "../AntFrame/AntLogConfig";
import AntLog from "../AntFrame/Log/AntLog";
import { GlobalGameConfig } from './ConfigBase';
import { Config } from './Platform/Config';
import { Platform } from './Platform/GamePlatform';
import { ShareMgr } from "./Sdk/Share/ShareMgr";
import { ShareQueryHandler } from "./Sdk/Share/ShareQueryHandler";
const { ccclass } = cc._decorator;

@ccclass
export default class AntGame extends cc.Component {
    static readonly GameName: string = "cute" ; // ANTFRAME GAMEID REPLACE STUB
    static readonly GamePlatform: string = "wechat"; // ANTFRAME GAME PLATFORM REPLACE STUB
    static readonly GameVersion: string = "1.0.3"; // ANTFRAME GAME VERSION REPLACE STUB
    static readonly GameLogFlag: boolean = false;// ANTFRAME GAME LOG FLAG REPLACE STUB
    static ShareMgrInst: ShareMgr = null;
    static ShareQueryHandlerInst: ShareQueryHandler = null;
    async onLoad() {
        AntLogConfig.OPEN_ALL = AntGame.GameLogFlag;
        AntGame.InitConfigAndPlatformInfo();
        let ins: any = new window[`GameEntry_${AntGame.GameName}`];
        ins.Enter();
    }

    start() {
    }

    public static InitConfigAndPlatformInfo() {
        AntGame.ProductLogConfig();
        AntGame.ShareMgrInst = new ShareMgr();
        AntGame.ShareQueryHandlerInst = new ShareQueryHandler();
        Config.init();
        Platform.init();
        AntLog.Info("######################################");
        let id = AntGame.UtilGetGameId(AntGame.GameName);
        AntLog.Info(`####AntFrame IMPORTANT game:[${AntGame.GameName}] id:[${id}]`);
        AntLog.Info(`####AntFrame IMPORTANT is browser:[${cc.sys.isBrowser}]`);
        AntLog.Info(`####AntFrame IMPORTANT platform class: ${Platform.ClassName}`);
        AntLog.Info(`####AntFrame IMPORTANT config class: ${Config.ClassName}`);
        AntLog.Info("######################################");
    }

    update(dt) {
    }

    public static ProductLogConfig() {
        if (this.isPlatformDouyin) {
            cc.log = function() {}
        }

        if (cc.sys.isBrowser || AntGame.GameLogFlag) {
            return;
        }

        AntLogConfig.OPEN_ALL = false;
        cc.log = function () { }
        cc.warn = function () { }
        console.warn = function () { }
        console.log = function () { }
        AntLog.Info = function () { }
        AntLog.Debug = function () { }
        AntLog.Warn = function () { }
        AntLog.Error = function () { }
    }

    public static UtilGetGameId(name: string): number {
        return GlobalGameConfig[name].id;
    }

    public static UtilIsTestMode(): boolean {
        return (AntGame.GameName === "test");
    }

    public static UtilGetPlatform(): string {
        let platform = AntGame.GamePlatform;
        if (cc.sys.isBrowser) {
            platform = 'debug';
        }
        if (platform === 'qq' || platform === 'douyin' || cc.sys.isBrowser)
            return platform;

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            platform = 'wechat';
        } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
            platform = 'qq';
        } else if (cc.sys.platform === cc.sys.VIVO_GAME) {
            platform = 'vivo';
        } else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            platform = 'oppo';
        } else if (cc.sys.platform === cc.sys.BAIDU_GAME) {
            platform = 'baidu';
        } else if (cc.sys.platform === cc.sys.HUAWEI_GAME) {
            platform = 'huawei';
        } else if (cc.sys.platform === cc.sys.XIAOMI_GAME) {
            platform = 'xiaomi';
        } else if (cc.sys.platform === cc.sys.QTT_GAME) {
            platform = 'qtt';
        }
        return platform;
    }

    public static get isPlatformWechat(): boolean {
        return AntGame.UtilGetPlatform() === 'wechat'
    }

    public static get isPlatformQQ(): boolean {
        return AntGame.UtilGetPlatform() === 'qq';
    }

    public static get isPlatformDouyin(): boolean {
        return AntGame.UtilGetPlatform() === 'douyin';
    }

    public static get isPlatformOppo(): boolean {
        return AntGame.UtilGetPlatform() === 'oppo';
    }

    public static get isPlatformVivo(): boolean {
        return AntGame.UtilGetPlatform() === 'vivo';
    }

    public static get isPlatformBaidu(): boolean {
        return AntGame.UtilGetPlatform() === 'baidu';
    }

    public static get isPlatformHuawei(): boolean {
        return AntGame.UtilGetPlatform() === 'huawei';
    }

    public static get isPlatformXiaomi(): boolean {
        return AntGame.UtilGetPlatform() === 'xiaomi';
    }

    public static get isPlatformQtt(): boolean {
        return AntGame.UtilGetPlatform() === 'qtt';
    }
}
