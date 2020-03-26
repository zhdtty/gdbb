import AntLog from "./Log/AntLog";

declare var net;
declare var wx;

export default class AntFrameConfig {
    public static FIRST_SCENE: string = "UqeePortraitScene"; //第一个场景
    // public static FIRST_SCENE: string = "UqeeLandscapeScene"; //第一个场景

    // Game
    public static GAME_WIDTH: number = 720;     // 客户端宽度
    public static GAME_HEIGHT: number = 1280;   // 客户端高度
    public static GROUP_ID: number = 0;

    // WX SDK
    public static WX_AppID: string = ""; //微信的小程序ID
    public static WX_AppSecret: string = ""; //微信的小程序Secret

    public static PHP_KEY = "jsl3JKL380934LO)21mhjs#@!JU";
    public static PHP_URL: string = 'https://h5test1.cocos.com/';
    public static GO_URL: string = "https://h5test2.cocos.com";

    public static showCastColor: cc.Color = cc.Color.WHITE;
    public static showCastBegin: cc.Vec2 = cc.Vec2.ZERO;
    public static showCastEnd: cc.Vec2 = new cc.Vec2(0, 300);

    public static get json(): any {
        return this._netConfig;
    }

    private static _netConfig: any;
    public static async GetNetConfig(): Promise<any> {
        if (AntFrameConfig._netConfig) {
            return new Promise<any>(resolve => {
                resolve(AntFrameConfig._netConfig);
            });
        }
        return new Promise<any>(resolve => {
            net.auth.config((e, j) => {
                AntFrameConfig._netConfig = j;
                resolve(AntFrameConfig._netConfig);
            })
        });
    }

    public static async GetErrorStr(code: number | string): Promise<string> {
        if (AntFrameConfig._netConfig) {
            return new Promise<string>(resolve => {
                resolve(AntFrameConfig._netConfig.errstr[code.toString()]);
            });
        }

        await AntFrameConfig.GetNetConfig();
        return new Promise<string>(resolve => {
            resolve(AntFrameConfig._netConfig.errstr[code.toString()]);
        });
    }

    public static LogConfig() {
        cc.log = AntLog.Debug;
        cc.warn = AntLog.Warn;
        console.log = AntLog.Debug;
        console.warn = AntLog.Warn;
    }

    public static WHITE_COLOR: cc.Color = cc.color(255,255,255);
    public static BLUE_COLOR: cc.Color = cc.color(0,0,255);
    public static GREEN_COLOR: cc.Color = cc.color(0,255,0);
    public static RED_COLOR: cc.Color = cc.color(255,0,0);
    public static YELLOW_COLOR: cc.Color = cc.color(255,255,0);
    public static GREY_COLOR: cc.Color = cc.color(128,128,128);
    public static GGREY_COLOR: cc.Color = cc.color(96,96,96);
}
