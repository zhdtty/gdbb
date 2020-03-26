export const GlobalGameConfig = {
/*GAMENAME STUB */"test" :     {id:1001, dir:"test",     prefix:"Test",     skin:'',     name:"测试游戏"},
/*GAMENAME STUB */"bean" :     {id:1002, dir:"bean",     prefix:"Bean",     skin:'',     name:"果冻宝宝",},
/*GAMENAME STUB */"oneline" :  {id:1003, dir:"oneline",  prefix:"OneLine",  skin:'',     name:"一口不留",},
/*GAMENAME STUB */"sudoku" :   {id:1004, dir:"sudoku",   prefix:"Sudoku",   skin:'',     name:"开心数独",},
/*GAMENAME STUB */"brick" :    {id:1005, dir:"brick",    prefix:"Brick",    skin:'',     name:"消灭砖块",},
/*GAMENAME STUB */"balloons" : {id:1006, dir:"balloons", prefix:"Balloons", skin:'',     name:"Balloons",},
/*GAMENAME STUB */"cute" :     {id:1007, dir:"cute",     prefix:"Cute",     skin:'',     name:"萌萌果冻", },
/*GAMENAME STUB */"dream" :    {id:1008, dir:"bean",     prefix:"Bean",     skin:'leyou',name:"果冻换皮", },
};

export const GlobalPlatformConfig = {
    "debug" :    {id:50001, prefix:"Debug"},
    "wechat" :   {id:50002, prefix:"Wechat"},
    "qq" :       {id:50003, prefix:"QQ"},
    "douyin" :   {id:50004, prefix:"Douyin"},
    "huawei" :   {id:50005, prefix:"Huawei"},
    "baidu" :    {id:50006, prefix:"Sudoku"},
    "xiaomi" :   {id:50007, prefix:"Xiaomi"},
    "vivo" :     {id:50008, prefix:"Vivo"},
    "oppo" :     {id:50009, prefix:"Oppo"},
    "qtt" :      {id:50010, prefix:"QTT"},
}

export const GlobalThirdSdkConfig = {
    /*THIRDSDK NAME STUB */"quyou":        { id: 60001, suffix: "QY" }, // Wechat QuYou
    /*THIRDSDK NAME STUB */"quanmin":      { id: 60002, suffix: "QM" }, // Douyin QuanMin
    /*THIRDSDK NAME STUB */"lequ":         { id: 60003, suffix: "LQ" }, // QQ DongKang
    /*THIRDSDK NAME STUB */"huaxia":       { id: 60004, suffix: "HX" }, // Wechat HuaXia
}

export enum PlatformType {
    Debug = 0,
    Wechat = 1,
    QQ = 2,
    Douyin = 3,
    Huawei = 4,
    Oppo = 5,
    Vivo = 6,
    Xiaomi = 7,
    Baidu = 8,
}

export enum ShareType {
    HALL = 1,         //大厅
    GAME_OVER = 2,    //游戏结束
    GIFT = 3,         //开宝箱
    GAME_ITEM = 4,    //游戏内道具
    GAME_SOS = 5,    //求救
}

export class ConfigBaseApp {
    public httpUrl: string = "";
    public address: string = "";
    public gameId: number = 0;
    public gameTag: string = "";
    public platform: string = "";
    public platformId: number = 0;
    public channel: string = "";
    public shareMenuTitle : string = "";
    public shareMenuImage : string = "";
    public mingameAppIds: any = [];
}

export class ConfigBaseChannel {
    public appId: string = "";
    public appSecret: string = "";
}

export class ConfigBaseAd {
    public videoId: string = "";
    public bannerId: string = "";
    public interstId: string = "";
}

export class ConfigShare {
    public remoteServerRoot: string = "";
    public content: any;
}

export class ConfigBase {
    public app: ConfigBaseApp = null;
    public channel: ConfigBaseChannel = null;
    public ad: ConfigBaseAd = null;
    public share: ConfigShare = null;

    constructor() {
        this.init();
    }

    init() {
        this.app = new ConfigBaseApp();
        this.channel = new ConfigBaseChannel();
        this.ad = new ConfigBaseAd();
        this.share = new ConfigShare();
    }
}