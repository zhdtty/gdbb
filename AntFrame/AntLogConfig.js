export default class AntLogConfig {
    public static OPEN_ALL: boolean = true;

    public static LOG_INCLUDE_FILES: Array<string> = [
        "LogicBrickGame",
        // "BrickGenerator",
        // "LogicBrickItemBrick",
        // "Share",
        // "AntPlatformWechatBase",
    ];

    public static LOG_EXCLUDE_FILES: Array<string> = [
        "GamePool",
        "LogicLayerController",
    ];

    public static isShow(fileName: string): boolean {
        if (!AntLogConfig.OPEN_ALL) {
            return false;
        }

        let parts = fileName.split(".");
        if (parts.length <= 0) {
            console.log("parts fail:" ,parts)
            return false;
        }

        for (let i = 0; i < AntLogConfig.LOG_EXCLUDE_FILES.length; i++) {
            let elem = AntLogConfig.LOG_EXCLUDE_FILES[i];
            if (elem == parts[0]) {
                return false;
            }
        }

        if (AntLogConfig.OPEN_ALL) {
            return true;
        }

        for (let i = 0; i < AntLogConfig.LOG_INCLUDE_FILES.length; i++) {
            let elem = AntLogConfig.LOG_INCLUDE_FILES[i];
            if (elem == parts[0]) {
                return true;
            }
        }
        return false;
    }
}
