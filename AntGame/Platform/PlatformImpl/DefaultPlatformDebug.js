import HttpMgr from '../../../AntFrame/Http/HTTP';
import AntLog from '../../../AntFrame/Log/AntLog';
import { AntPlatformDebugBase } from '../../../AntFrame/Platform/AntPlatformDebugBase';

class DefaultPlatformDebug extends AntPlatformDebugBase {
    constructor() {
        super();
        AntLog.Debug("DefaultPlatformDebug constructor");
    }

    public VibrateShort() {
    }

    public async AsyncAdvReview(params: any): Promise<any> {
        let that = this;
        return new Promise<any>(resolve => {
            HttpMgr.sendRequest({
                url: params.url,
                path: "/v1/adv_review",
                method: "GET",
                data: {
                    gameid: params.gameid || -1,
                },
                onSuccess: function (res) {
                    AntLog.Info("Send Request Callback: ", res);
                    res.code;
                    res.desc;
                    if (res.data && res.data.status) {
                        resolve(res.data);
                    } else {
                        resolve(0);
                    }
                }.bind(this),
                onFail: function (res) {
                    AntLog.Info("Send Request advReview Failed! res: ", res);
                    resolve(-1);
                }.bind(this),
                onError: function (res) {
                    AntLog.Info("Send Request advReview Error! res: ", res);
                    resolve(-1);
                }.bind(this),
            });
        });
    }
}

window["DefaultPlatformDebug"] = DefaultPlatformDebug;
