import AntFrame from "../AntFrame";
import { LogLevel } from "./Log";
import AntLogConfig from "../AntLogConfig";

export enum AntLogLevel
{
    Debug = 0,
    Info = 1,
    Warn = 2,
    Error = 3,
}

export enum AntLogLevelStr
{
    Debug  = "Debug",
    Info = "Info",
    Warn = "Warn",
    Error = "Error",
}

export default class AntLog {
    private static logger = console.log;
    private static logLevel:AntLogLevel = AntLogLevel.Debug;

    public static DEBUG_COLOR: cc.Color = cc.color(187, 187, 187);
    public static DEBUG_COLOR_CSS: string = AntLog.DEBUG_COLOR.toCSS("#rrggbb");
    public static INFO_COLOR: cc.Color = cc.color(0, 0, 205);
    public static INFO_COLOR_CSS: string = AntLog.INFO_COLOR.toCSS("#rrggbb");
    public static WARN_COLOR: cc.Color = cc.color(187, 187, 35);
    public static WARN_COLOR_CSS: string = AntLog.WARN_COLOR.toCSS("#rrggbb");
    public static ERROR_COLOR: cc.Color = cc.color(255, 0, 6);
    public static ERROR_COLOR_CSS: string = AntLog.ERROR_COLOR.toCSS("#rrggbb");

    public static getCallFileInfo(): string {
        function getException() {
            try {
                throw Error('');
            } catch (err) {
                return err;
            }
        }
        const err = getException();
        const stack = err.stack;
        const stackArr = stack.split('\n');
        if (stackArr.length < 5) {
            return '-'
        }
        var infoArr = stackArr[4].split('/');
        if (infoArr.length <= 0) {
            return '-'
        }
        var parts = infoArr[infoArr.length - 1].split(':');
        if (parts.length < 2) {
            return '-'
        }
        return parts[0] + ":" + parts[1];
    }

    public static getPrefix(flag: string, fileInfo: string): string {
        var ts = new Date().getTime() / 1000;
        var prefix = ts.toString() + " [" + flag + "] [" + fileInfo + "] ";
        return prefix;
    }

    public static Debug(...ags){
        if(AntLog.logLevel > AntLogLevel.Debug){
            return;
        }
        let fileInfo = AntLog.getCallFileInfo();
        if (!AntLogConfig.isShow(fileInfo)) {
            return;
        }
        let prefix = AntLog.getPrefix(AntLogLevelStr.Debug, fileInfo);
        let tmp = "";
        ags.forEach(ele => { tmp += " " + ele; });
        tmp = prefix + " " + tmp;

        ags.unshift(`color: ${AntLog.DEBUG_COLOR_CSS};`);
        ags.unshift("%c" + prefix);

        AntLog.logger.apply(this, ags);
        AntFrame.LogInst.Log(tmp, LogLevel.Debug);
    }

    public static Info(...ags){
        if(AntLog.logLevel > AntLogLevel.Info){
            return;
        }
        let fileInfo = AntLog.getCallFileInfo();
        if (!AntLogConfig.isShow(fileInfo)) {
            return;
        }

        let prefix = AntLog.getPrefix(AntLogLevelStr.Info, fileInfo);
        let tmp = "";
        ags.forEach(ele => { tmp += " " + ele; });
        tmp = prefix + " " + tmp;

        ags.unshift(`color: ${AntLog.INFO_COLOR_CSS};`);
        ags.unshift("%c" + prefix);

        AntLog.logger.apply(this, ags);
        AntFrame.LogInst.Log(tmp, LogLevel.Info);
    }

    public static Warn(...ags){
        if(AntLog.logLevel > AntLogLevel.Warn){
            return;
        }
        let fileInfo = AntLog.getCallFileInfo();
        if (!AntLogConfig.isShow(fileInfo)) {
            return;
        }
        let prefix = AntLog.getPrefix(AntLogLevelStr.Warn, fileInfo);
        let tmp = "";
        ags.forEach(ele => { tmp += " " + ele; });
        tmp = prefix + " " + tmp;

        ags.unshift(`color: ${AntLog.WARN_COLOR_CSS};`);
        ags.unshift("%c" + prefix);

        AntLog.logger.apply(this, ags);
        AntFrame.LogInst.Log(tmp, LogLevel.Warning);
    }

    public static Error(...ags){
        let fileInfo = AntLog.getCallFileInfo();
        if (!AntLogConfig.isShow(fileInfo)) {
            return;
        }
        let prefix = AntLog.getPrefix(AntLogLevelStr.Error, fileInfo);
        let tmp = "";
        ags.forEach(ele => { tmp += " " + ele; });
        tmp = prefix + " " + tmp;

        ags.unshift(`color: ${AntLog.ERROR_COLOR_CSS};`);
        ags.unshift("%c" + prefix);

        AntLog.logger.apply(this, ags);
        AntFrame.LogInst.Log(tmp, LogLevel.Error);
    }

    public static SetLogLevel(level:AntLogLevel){
        AntLog.logLevel = level;
    }

    public static GetLogLevel():AntLogLevel{
        return AntLog.logLevel;
    }

}