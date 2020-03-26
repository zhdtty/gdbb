import AntLog from '../../../AntFrame/Log/AntLog';
import { SdkUserInfo } from '../../../AntFrame/Platform/AntPlatformDefine';
import { AntPlatformWechatBase } from '../../../AntFrame/Platform/AntPlatformWechatBase';

class DefaultPlatformWechat extends AntPlatformWechatBase {
    constructor() {
        super();
        AntLog.Debug("DefaultPlatformWechat constructor");
    }

    public async AsyncDoSdkAuth(): Promise<SdkUserInfo> {
        AntLog.Debug("PlatformWechat do sdk auth");
        this.JiaZaiNode.active = false;
        let isAuthed: boolean = await this.AsyncRequestSdkIsAuthed();
        let info: any = null;
        if (!isAuthed) {
            info = await this.AsyncRequestSdkCreateUserInfoButton({});
        } else {
            info = await this.AsyncRequestSdkUserInfo();
        }
        this.SdkUserInfo.fromWechatQQUserInfo(info);
        return this.SdkUserInfo;
    }

    public VibrateShort() {
    }
}

window["DefaultPlatformWechat"] = DefaultPlatformWechat;
