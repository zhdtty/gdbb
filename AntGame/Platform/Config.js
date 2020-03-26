import AntGame from '../AntGame';
import { GlobalGameConfig, GlobalPlatformConfig, PlatformType } from '../ConfigBase';

declare var wx;

export class Config {
    public static ClassName: string = '';
    public static pfType: number = PlatformType.Debug; //平台
    private static _obj: any;

    public static get ctx(): any {
        return this._obj;
    }

    public static init( ) {
        let platform = AntGame.UtilGetPlatform();
        let p = GlobalPlatformConfig[platform];

        let prefix = GlobalGameConfig[AntGame.GameName].prefix;

        if (window[`${prefix}Config${p.prefix}`] != undefined) {
            Config.ClassName = `${prefix}Config${p.prefix}`;
        }

        if(Config.ClassName == '' && window[`DefaultConfig${p.prefix}`] != undefined) {
            Config.ClassName = `DefaultConfig${p.prefix}`;
        }

        if(Config.ClassName == '')
        {
            Config.ClassName = 'DefaultConfigDebug';
        }

        Config._obj = new window[Config.ClassName];
    }
}
