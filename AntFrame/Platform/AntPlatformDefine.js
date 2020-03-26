import AntLog from '../Log/AntLog';
export enum eSex {
    None = 0,
    Man = 1,
    Woman = 2
}

export enum PlatformVersion {
    DEV = 1,    //开发版，体验版
    PUB = 2,    //正式版
}

export enum OpenDataMsgType {
    RemoveRankList = 0,            // 移除排行内的内容
    FetchFriendRankList = 1,       // 获取好友排行榜
    SubmitScore = 3,               // 提交分数
    GameOverRank = 4,              // 获取好友排行榜横向排列展示模式
    FetchGroupFriendRankList = 5,  // 获取群排行榜
    NotifyTime = 6,                // 通知子域当前服务器时间
    ShowSurpass = 7,               // 展示超越好友信息
    FetchNextPlayer = 8,           // 展示下一位超越对象
}

export let QQShareAppType = {
    qq: "",                             // 转发到手q通讯录
    qqFastShare: "qqFastShare",         // 快速转发至来源的聊天窗口
    qqFastShareList: "qqFastShareList", // 快速转发列表
    qzone: "qzone",                     // 转发到空间
    wechatFriends: "wechatFriends",     // 转发到微信好友
    wechatMoment: "wechatMoment",       // 转发到微信朋友圈
}

export class LaunchOptionsInfo {
    public path: string = "";
    public scene: number = 0;
    public shareTicket: string = "";
    public referrerInfo: ReferrerInfo;
    public query: Object;
}

export class ReferrerInfo {
    appId: string = "";
    extraData: any;
}

export class SystemInfo {
    /**手机型号 */
    model: string;
    /**设备像素比 */
    pixelRatio: number;
    /**屏幕宽度 */
    screenWidth: number;
    /**屏幕高度 */
    screenHeight: number;
    /**可使用窗口宽度 */
    windowWidth: number;
    /**可使用窗口高度 */
    windowHeight: number;
    /**微信版本号 */
    version: string;
    /**系统信息 */
    system: string;
    /**平台 */
    platform: string;
    /**性能等级 */
    benchmarkLevel: number;
    /**客户端基础库sdk版本信息 */
    SDKVersion: string;
    /**运行平台版本号 */
    platformVersionCode: number;
}

export class SdkUserInfo {
    public language: string = "";
    public nickName: string = "";       // 玩家昵称
    public avatarUrl: string = "";      // 玩家头像
    public gender: eSex = eSex.None;    // 玩家性别
    public country: string = "";        // 玩家国家
    public province: string = "";       // 玩家省份
    public city: string = "";           // 玩家城市

    public smallAvatar: string = "";
    public biggerAvatar: string = "";

    public unionId: string = "";
    public openId: string = "";
    public sessionId: string = "";
    public sign: string = "";

    public toString(): string {
        return `UserInfo::NickName:[${this.nickName}],`
            + `Gender:[${this.gender}],`
            + `AvatarUrl:[${this.avatarUrl}],`
            + `City:[${this.city}],`
            + `OpenID:[${this.openId}],`
            + `SessionID:[${this.sessionId}]`;
    }

    public fromWechatQQUserInfo(res: any) {
        this.language = res.userInfo.language;
        this.nickName = res.userInfo.nickName;
        this.avatarUrl = res.userInfo.avatarUrl;
        this.gender = res.userInfo.gender;
        this.country = res.userInfo.country;
        this.province = res.userInfo.province;
        this.city = res.userInfo.city;

        AntLog.Info("fromWechatQQUserInfo userInfo: " + res.userInfo);
        AntLog.Info("fromWechatQQUserInfo rawData: " + res.rawData);
        AntLog.Info("fromWechatQQUserInfo signature: " + res.signature);
        AntLog.Info("fromWechatQQUserInfo encryptedData: " + res.encryptedData);
        AntLog.Info("fromWechatQQUserInfo iv: " + res.iv);
        AntLog.Info("fromWechatQQUserInfo cloudID: " + res.cloudID);

        let name = this.nickName;
        if (name.length <= 5) {
            return;
        }
        let bytesCount = 0;
        for (let i = 0; i < name.length; i++) {
            let char = name.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(char)) //匹配双字节
            {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
            if (bytesCount >= 10) {
                this.nickName = this.nickName.substring(0, i);
                if (i + 1 < name.length) {
                    this.nickName += "...";
                }
                return;
            }
        }
    }

    public fromOVUserInfo(res: any) {
        this.nickName = res.data.nickName;
        this.smallAvatar = res.data.smallAvatar;
        this.biggerAvatar = res.data.biggerAvatar;
        this.gender = res.data.gender;

        AntLog.Info("fromOVUserInfo userInfo: " + res.data);

        let name = this.nickName;
        if (name.length <= 5) {
            return;
        }
        let bytesCount = 0;
        for (let i = 0; i < name.length; i++) {
            let char = name.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(char)) //匹配双字节
            {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
            if (bytesCount >= 10) {
                this.nickName = this.nickName.substring(0, i);
                if (i + 1 < name.length) {
                    this.nickName += "...";
                }
                return;
            }
        }
    }
}

export class SdkLoginInfo {
    public code: string = "InvalidCode";

    public toString(): string {
        return `SdkLoginInfo::code:[${this.code}]`;
    }
}

export class SdkShareInfo {
    public id: number = 0;
    public type: number = 0;
    public qqShareAppType: string = "";
    public gameScene: string = "";
    public title: string = "";
    public content: string = "";
    public imageUrl: string = "";
    private mapQuery: Map<string, string>;

    constructor()
    {
        this.gameScene = "";
        this.title = "AntFrame";
        this.imageUrl = "";
        this.content = "";
        this.mapQuery = new Map<string,string>();
    }

    public get Query(): string {
        let query: string = "";
        let start: boolean = true;
        this.mapQuery.forEach((value, key) => {
            if (!start) {
                query += "&";
            }
            query += key + "=" + value;
            start = false;
        });
        return query;
    }

    public Clear(): void {
        this.mapQuery.clear();
    }

    public AddQuery(type: string, value: number | string): void {
        this.mapQuery.set(type, `${value}`);
    }
}
