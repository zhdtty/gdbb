import AntFrame from '../AntFrame';
import AntPlatformImpl from './AntPlatformImpl';

export class AntPlatformDebugBase extends AntPlatformImpl {
    public m_fnErrorCallback: any;

    constructor() {
        super();
    }

    public async AsyncHttpRequestCode2Session(params:any) : Promise<boolean> {
        let that = this;
        return new Promise<boolean>(resolve => {
            that.SdkUserInfo.openId = `debug_openid_${Date.now()}`;
            that.SdkUserInfo.sessionId = `debug_sessionid_${Date.now()}`;
            that.SdkUserInfo.unionId = `debug_unionid_${Date.now()}`;
            resolve(true)
        });
    }

    public async AsyncLoadSubpackage(params: any): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            let packName = params.packName ? params.packName : 'root';
            cc.loader.downloader.loadSubpackage(packName, function (err) {
                if (err) {
                    params.fail && params.fail({err: err});
                    resolve(false);
                    return;
                }
                params.success && params.success({});
                resolve(true);
            });
        });
    }

    public async Share(info: any): Promise<boolean> {
        AntFrame.UIMgr.ShowToast("网页端不支持分享接口");
        return null;
    }

    public ReportSendEvent(params: any) { }

    public ReportStageOnStart(params: any) { }

    public ReportStageOnRunning(params: any) { }

    public ReportStageOnEnd(params: any) { }
}
