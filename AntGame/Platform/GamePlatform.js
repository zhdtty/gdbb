import AntLog from '../../AntFrame/Log/AntLog';
import AntGame from '../AntGame';
import { GlobalGameConfig, GlobalPlatformConfig } from '../ConfigBase';
import { Config } from './Config';

declare var wx;

export class Platform {
    public static ClassName: string = '';
    private static _obj: any;

    public static get sdk(): any {
        return this._obj;
    }

    public static async init() {
        let prefix = GlobalGameConfig[AntGame.GameName].prefix;
        let platform = AntGame.UtilGetPlatform();
        let p = GlobalPlatformConfig[platform];

        AntLog.Info(`GamePlatform information: game prefix: ${prefix}, platform prefix:${p.prefix}`);

        if (window[`${prefix}Platform${p.prefix}`] != undefined) {
            Platform.ClassName = `${prefix}Platform${p.prefix}`;
        }

        if(Platform.ClassName == '' && window[`DefaultPlatform${p.prefix}`] != undefined) {
            Platform.ClassName = `DefaultPlatform${p.prefix}`;
        }

        if(Platform.ClassName == '')
        {
            Platform.ClassName = 'DefaultPlatformDebug';
        }

        Platform._obj = new window[Platform.ClassName];
        await Platform._obj.Init({title:Config.ctx.app.shareMenuTitle, imageUrl:Config.ctx.app.shareMenuImage});
    }
}
