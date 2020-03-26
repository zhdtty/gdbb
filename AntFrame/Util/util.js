export default class Util {
    //本地数据存储
    public static STORAGE_KEY = {
        BEST_STOREY : "bestStorey", //最高层                        (string)
        STAR_NUM : "starNum",       //拥有的星星数                  (string)
        CLOTH_IDS : "clothId",      //衣服ids                       (JSON)
        SOUND_STATUS : "soundStatus",      //声音开关               (string)
        CUR_CLOTH_ID : "curClothId",//当前选择的衣服id              (JSON)
        MAX_SCORE : "maxScore",     //最高分                        (string)
        GIFT_STEP : "giftStep",    //奖励领取阶段                   (JSON) 
        FIRST_PLAY_GIFT : "beanFirstPlay",  //果冻首次游玩礼包        (string)
        JELLY_IDS : "jellyId",      //果冻id                        (JSON)
        CUR_BEAN_ID : "curBeanId",//当前选择的果冻id                  (JSON)
        JELLY_REWARD : "jellyReward", //果冻奖励                     (JSON)
        JELLY_DRESS_REABAG : "jellyDressRedbag", //装扮礼包          (JSON)
        JELLY_SHARE_DAILY : "jellyShareDaily",  //每日分享           (JSON)

        ONELINE_CUSTOM : "onelineCustom",      //一笔画完关卡id
        ONELINE_GOLD : "onelineGold",      //一笔画完金币
        ONELINE_DOG_LOCK : "onelineDogLock",
    }

    public static getStorage = function (key:string) {
        return cc.sys.localStorage.getItem(key);
    };
    
    public static setStorage = function (key:string, value:any) {
        return cc.sys.localStorage.setItem(key, value);
    };

    public static getNumberFieldFromStorge(fieldName: string): number {
        let val = Util.getStorage(fieldName);
        if (!val) {
            return 0;
        }
        return Number(val);
    }

    public static getStringFieldFromStorge(fieldName: string): string {
        let val = Util.getStorage(fieldName);
        if (!val) {
            return "";
        }
        return val;
    }

    public static randInt(start, end): number {
        var delta = end - start + 1;
        return Math.floor(Math.random() * delta + start)
    }

    public static getJsonLen(json) : number {
        let val = 0;
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                val++;
            }
        }
        return val;
    }

    //客户端当前时间戳(秒)
    public static getCurSecond() {
        return Math.floor(new Date().getTime() / 1000);
    }

    //客户端当前时间戳(毫秒)
    public static getNowTime() {
        return (new Date()).valueOf();
    }

    public static getWeekdayNum() {
        var date = new Date();
        return date.getDay();
    }

    //显示时间 17:04
    public static getPhoneTime() {
        var date = new Date();
        var h = date.getHours();
        var m = (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes());
        return h + ":" + m;
    }

    //某个时间点时间戳
    public static getTimeSecond(ts: number, hour: number, minute: number, second: number, deltaDay: number) {
        var t = new Date(ts * 1000);
        t.setHours(hour);
        t.setMinutes(minute);
        t.setSeconds(second);
        var ts = Math.floor(t.getTime() / 1000);
        return ts + deltaDay * 3600 * 24;
    }

    //两个时间戳相差天数
    public static getTimeDifferDay(time1: number, time2: number) {
        var defTime = Math.abs(time1 - time2);
        var dateObj1 = Util.cdTransferDateTime(defTime);
        var day = dateObj1.day + 1;
        return day;
    }

    // //格式化：2020/02/02
    // public static tsFormatToDate(time: number) {
    //     var date = new Date(time * 1000);
    //     var datetime = '{0}/{1}/{2}';
    //     var year = date.getFullYear();
    //     var month = date.getMonth() + 1;
    //     month = month >= 10 ? month : ('0' + month);
    //     var day = date.getDate();
    //     day = day >= 10 ? day : ('0' + day);
    //     datetime = datetime.format(year, month, day);
    //     return datetime;
    // }

    // //格式化：2020年02月02日
    // public static tsFormatToDateH(time: number) {
    //     var date = new Date(time * 1000);
    //     var datetime = '{0}年{1}月{2}日';
    //     var year = date.getFullYear();
    //     var month = date.getMonth() + 1;
    //     month = month >= 10 ? month : ('0' + month);
    //     var day = date.getDate();
    //     day = day >= 10 ? day : ('0' + day);
    //     datetime = datetime.format(year, strMonth, day);
    //     return datetime;
    // }

    // //格式化：2020/02/02 02:02:02
    // public static tsFormatToDateTime(time: number) {
    //     var date = new Date(time * 1000);
    //     var datetime = '{0}/{1}/{2} {3}:{4}:{5}';
    //     var year = date.getFullYear();
    //     var month = date.getMonth() + 1;
    //     month = month >= 10 ? month : ('0' + month);
    //     var day = date.getDate();
    //     day = day >= 10 ? day : ('0' + day);
    //     var hour = date.getHours();
    //     hour = hour >= 10 ? hour : ("0" + hour);
    //     var min = date.getMinutes();
    //     min = min >= 10 ? min : ("0" + min);
    //     var second = date.getSeconds();
    //     second = second >= 10 ? second : ("0" + second);
    //     datetime = datetime.format(year, month, day, hour, min, second);
    //     return datetime;
    // }

    // //格式化：2020年02月02日02:02:02
    // public static tsFormatToDateTimeH(time: number) {
    //     var date = new Date(time * 1000);
    //     var datetime = '{0}年{1}月{2}日{3}:{4}:{5}';
    //     var year = date.getFullYear();
    //     var month = date.getMonth() + 1;
    //     month = month >= 10 ? month : ('0' + month);
    //     var day = date.getDate();
    //     day = day >= 10 ? day : ('0' + day);
    //     var hour = date.getHours();
    //     hour = hour >= 10 ? hour : ("0" + hour);
    //     var min = date.getMinutes();
    //     min = min >= 10 ? min : ("0" + min);
    //     var second = date.getSeconds();
    //     second = second >= 10 ? second : ("0" + second);
    //     datetime = datetime.format(year, month, day, hour, min, second);
    //     return datetime;
    // }

    // //剩余时间戳转换成剩余时间
    // public static cdTransferDateTime(cd: number) {
    //     console.log("cdTransferDateTime:", cd)
    //     var ms = 1;
    //     var s = ms * 1000;
    //     var minute = s * 60;
    //     var hour = minute * 60;
    //     var day = hour * 24;

    //     var leftDays = Math.floor(cd / day);
    //     var leftHours = Math.floor((cd - leftDays * day) / hour);
    //     var leftMinute = Math.floor((cd - leftDays * day - leftHours * hour) / minute);
    //     var leftS = Math.floor((cd - leftDays * day - leftHours * hour - leftMinute * minute) / s);
    //     var leftMs = cd - leftDays * day - leftHours * hour - leftMinute * minute - leftS * s;

    //     var ret = { day: leftDays, hour: leftHours, minute: leftMinute, s: leftS, ms: leftMs };
    //     return ret;
    // }
}