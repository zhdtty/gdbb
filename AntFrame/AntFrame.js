import AntFrameConfig from "./AntFrameConfig";
import AntEvent from './Event/AntEvent';
import AntLog from "./Log/AntLog";
import Log from "./Log/Log";
import AntAdaptorMgr, { SceneOrientation } from "./UI/AntAdaptorMgr";
import LogicLayerController from "./UI/LogicLayerController";

const { ccclass, property } = cc._decorator;
declare var myhelp;
declare var MySys;
declare var MyWinSize;
@ccclass
export default class AntFrame extends cc.Component {
    public static FsmExternalEventInGame: AntEvent = null;
    public static GameStartEvent: AntEvent = null;
    public static Adaptor: AntAdaptorMgr = null;
    public static UIMgr: LogicLayerController = null;
    public static LogInst: Log = null;
    public static SceneName: string = "Enter";

    async onLoad() {
        AntFrameConfig.LogConfig();

        let root = cc.find("LayerController");
        AntFrame.UIMgr = root.getComponent(LogicLayerController);

        AntFrame.FsmExternalEventInGame = new AntEvent();
        AntFrame.Adaptor = new AntAdaptorMgr();
        AntFrame.GameStartEvent = new AntEvent();

        AntFrame.LogInst = new Log();
        AntFrame.LogInst.InitWithView();
        MySys.dump();
        MyWinSize.dump();

        AntFrame.Adaptor.ChangeOrientation(SceneOrientation.Portrait);
        AntFrame.Adaptor.dump();
        AntFrame.Adaptor.Adapt(cc.size(720, 1280));
        this.loadScene(AntFrameConfig.FIRST_SCENE);

        window["AntFrame"] = AntFrame;
    }

    async ShowError(err) {
        let config = await AntFrameConfig.GetNetConfig();
        AntFrame.UIMgr.ShowToast(config.errstr[err]);
    }

    async loadScene(sceneName: string) {
        let splash = cc.find("Canvas").getChildByName("w_layerSplash");
        cc.director.preloadScene(sceneName, null, function(error: Error, asset: cc.SceneAsset){
            AntFrame.SceneName = sceneName;
            splash.removeFromParent();
            cc.director.loadScene(sceneName, function() {
                cc.find("Canvas").addChild(splash);
                setTimeout(function(){
                    if(cc.isValid(splash)) splash.removeFromParent(true);
                }, 60000);
            });
        })
    }

    private static _lastGetTimestamp = 0;
    private static _lastTimestamp = 0;
    private static _firstTimestamp = 0;
    private static _serverTime = 0;
    public static get timestamp(): number {
        // if (cc.director.getTotalFrames() == AntFrame._lastGetTimestamp) {
        //     return AntFrame._lastTimestamp - AntFrame._firstTimestamp + net.time.timestamp;
        // }
        // AntFrame._lastGetTimestamp = cc.director.getTotalFrames();
        // let date = new Date();
        // AntFrame._lastTimestamp = Date.parse(date.toString()) / 1000;
        // if (AntFrame._firstTimestamp == 0 || net.time.timestamp != AntFrame._serverTime) {
        //     AntFrame._serverTime = net.time.timestamp;
        //     AntFrame._firstTimestamp = AntFrame._lastTimestamp;
        // }
        // return AntFrame._lastTimestamp - AntFrame._firstTimestamp + net.time.timestamp;
        return 0;
    }

    public static GetTimeString(second: number): string {
        let min = Math.floor(second / 60);
        let sec = second % 60;
        let secStr = sec > 9 ? sec.toString() : "0" + sec.toString();
        let minStr = min > 9 ? min.toString() : "0" + min.toString();
        return minStr + ":" + secStr;
    }

    public static OnClick(node: cc.Node, callback: Function, target?: any) {
        node.on(cc.Node.EventType.TOUCH_END, (e: cc.Event.EventTouch) => {
            if (e.getTouches().length > 1) {
                return;
            }
            callback.call(target, e);
        }, target);
    }

    public static LocationUrlParam(name: string): string {
        if (!cc.sys.isBrowser) {
            cc.log("微信版", cc.sys.platform);
            return null;
        }


        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    public static OffClick(node: cc.Node, callback: Function, target?: any) {
        if (callback) {
            node.off(cc.Node.EventType.TOUCH_END, callback, target);
        } else {
            node.targetOff(target);
        }
    }

    public static GetField(obj: any, name: string): any {
        return myhelp.getField(obj, name);
    }

    public static Clone(dst: any, src: any): any {
        return myhelp.clone(dst, src);
    }

    public static async WaitForSecond(second: number): Promise<number> {
        AntLog.Warn(`WaitForSecond ${second} seconds`);
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(second);
            }, second * 1000);
        });
    }

    public static RandName(min, max, randomFlag: boolean = true) {
        let str = "";
        let range = min;
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            let pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }
}
