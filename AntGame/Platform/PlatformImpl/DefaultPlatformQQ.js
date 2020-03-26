import AntLog from '../../../AntFrame/Log/AntLog';
import { SdkUserInfo } from '../../../AntFrame/Platform/AntPlatformDefine';
import { AntPlatformQQBase } from '../../../AntFrame/Platform/AntPlatformQQBase';

class DefaultPlatformQQ extends AntPlatformQQBase {
    constructor() {
        super();
        AntLog.Debug("DefaultPlatformQQ constructor");
    }

    public async AsyncDoSdkAuth(): Promise<SdkUserInfo> {
        AntLog.Debug("DefaultPlatformQQ do sdk auth");
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

window["DefaultPlatformQQ"] = DefaultPlatformQQ;
