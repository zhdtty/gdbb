import { ConfigBase, ShareType } from '../../ConfigBase';

declare var wxDownloader;

class DefaultConfigWechat extends ConfigBase {
    constructor() {
        super();
        this.config();
    }

    config() {
        this.app.httpUrl = "https://s1000.ddz.uqeetest.uqeegame.cn:9000";
        this.app.address = "49.235.74.21:8115";
        this.app.gameId = 101;
        this.app.gameTag = "";
        this.app.platform = "";
        this.app.platformId = 5151;
        this.app.channel = "wechat";
        this.app.shareMenuTitle = "我的游戏好好玩呀~";
        this.app.shareMenuImage = `${wxDownloader.REMOTE_SERVER_ROOT}/share2.png`;

        this.channel.appId = "";
        this.channel.appSecret = "";

        this.ad.videoId = "";
        this.ad.bannerId = "";

        this.share.remoteServerRoot = wxDownloader.REMOTE_SERVER_ROOT;
        this.share.content = {
            [ShareType.HALL]: { "title": "砖头好硬呀，快来帮我一起打~", "paramNum": 0, "images": ["share1", "share2", "share3"] },
            [ShareType.GAME_OVER]: { "title": "来比谁打分多！", "paramNum": 0, "images": ["share1", "share2", "share3"] },
            [ShareType.GIFT]: { "title": "一起来挑战急速爆破！", "paramNum": 0, "images": ["share1", "share2", "share3"] },
        };
    }
}

window["DefaultConfigWechat"] = DefaultConfigWechat;
