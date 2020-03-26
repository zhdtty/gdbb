import AntLog from '../../../AntFrame/Log/AntLog';
import { AntPlatformWechatBase } from '../../../AntFrame/Platform/AntPlatformWechatBase';

class DefaultPlatformDouyin extends AntPlatformWechatBase {
    constructor() {
        super();
        AntLog.Debug("DefaultPlatformDouyin constructor");
    }
}

window["DefaultPlatformDouyin"] = DefaultPlatformDouyin;
