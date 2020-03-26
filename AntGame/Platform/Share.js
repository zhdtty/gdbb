import AntLog from '../../AntFrame/Log/AntLog';
import { SdkShareInfo } from "../../AntFrame/Platform/AntPlatformDefine";
import Util from "../../AntFrame/Util/util";
import { Config } from './Config';
import { Platform } from "./GamePlatform";

export class Share {
    private static _self: Share;

    public static get inst(): Share {
        if (!this._self) {
            this._self = new Share();
        }
        return this._self;
    }

    //分享
    /**
     * id: 分享处标识
     * title: 标题
     * query: 透传参数 key:value
     * successCb: 成功回调
     * failCb: 失败回调
     */
    toFriend(params: any = null): void {
        AntLog.Info("Config.ctx:", Config.ctx);
        if (!Config.ctx.share || !Config.ctx.share.content) {
            return;
        }
        let id = params ? (params.id ? params.id : 1) : 1;
        let tip = Config.ctx.share.content[id];
        if (!tip) {
            return;
        }
        let title = params ? (params.title ? params.title : tip["title"]) : tip["title"];

        let info: SdkShareInfo = new SdkShareInfo();
        info.id = Number(id);
        info.type = 0;
        info.title = title;
        info.content = "";
        let imageArr = tip["images"];
        let randIndex = Util.randInt(0, imageArr.length - 1);

        info.imageUrl = `${Config.ctx.share.remoteServerRoot}/${tip["images"][randIndex]}.png`;
        info.gameScene = "";
        if (params && params.query) {
            for (let key in params.query) {
                info.AddQuery(key, params.query[key]);
            }
        }
        if (params && params.successCb && Platform.sdk.setShareSuccessCb) {
            Platform.sdk.setShareSuccessCb(params.successCb);
        }
        if (params && params.failCb && Platform.sdk.setShareFailedCb) {
            Platform.sdk.setShareFailedCb(params.failCb);
        }
        Platform.sdk.Share(info);
    }


    //分享朋友圈
    toCircle() {
    }
}
