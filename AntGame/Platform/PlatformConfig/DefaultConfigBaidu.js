import { ConfigBase } from '../../ConfigBase';

class DefaultConfigBaidu extends ConfigBase {
    constructor() {
        super();
        this.config();
    }

    config() {
        this.app.httpUrl = "https://s1000.ddz.uqeetest.uqeegame.cn:9000";
        this.app.address = "";
        this.app.gameId = 101;
        this.app.gameTag = "";
        this.app.platform = "";
        this.app.platformId = 5151;
        this.app.channel = "baidu";

        this.channel.appId = "";
        this.channel.appSecret = "";

        this.ad.videoId = "";
        this.ad.bannerId = "";
    }
}

window["DefaultConfigBaidu"] = DefaultConfigBaidu;
