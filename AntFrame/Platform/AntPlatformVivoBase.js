import AntFrame from "../AntFrame";
import AntFrameConfig from "../AntFrameConfig";
import HttpMgr from "../Http/HTTP";
import AntLog from "../Log/AntLog";
import { LaunchOptionsInfo, OpenDataMsgType, PlatformVersion, SdkLoginInfo, SdkShareInfo, SdkUserInfo, SystemInfo } from './AntPlatformDefine';
import AntPlatformImpl from './AntPlatformImpl';

declare var qg;
declare var sharedCanvas;

export class AntPlatformVivoBase extends AntPlatformImpl {
    public m_fnErrorCallback: any;
    protected m_bannerAd: any = null;
    private m_videoAd: any = null;
    private m_interstitialAd: any = null;
    protected m_hideTs: number = 0;
    protected m_shareSuccessCb: any = null;
    protected m_shareFailedCb: any = null;
    private m_videoFinishCb: any = null;
    private m_videoExitCb: any = null;
    private m_videoErrorCb: any = null;
    private m_interstFinishCb: any = null;
    private m_interstErrorCb: any = null;

    constructor() {
        super();
    }

    public async Init(params: any) {
        await this.InitSystemInfo();

        this.InitLaunchOptions();

        this.SdkInitShareMenu(params);

        qg.setKeepScreenOn && qg.setKeepScreenOn({
            keepScreenOn: true,
            success: function () {
                console.log("常亮设置成功！");
            }
        });
    }

    private async InitSystemInfo(): Promise<SystemInfo> {
        AntLog.Info("QGAPI Call InitSystemInfo");

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return null;
        }

        let info = await qg.getSystemInfoSync();
        this.m_stSystemInfo.model = info.model;
        // this.m_stSystemInfo.pixelRatio = info.pixelRatio;
        this.m_stSystemInfo.platform = info.platform;
        this.m_stSystemInfo.screenHeight = info.screenHeight;
        this.m_stSystemInfo.screenWidth = info.screenWidth;
        // this.m_stSystemInfo.system = info.system;
        // this.m_stSystemInfo.version = info.version;
        this.m_stSystemInfo.windowHeight = info.windowHeight;
        this.m_stSystemInfo.windowWidth = info.windowWidth;
        this.m_stSystemInfo.platformVersionCode = info.platformVersionCode;
        // this.m_stSystemInfo.SDKVersion = info.SDKVersion;
        // this.m_stSystemInfo.benchmarkLevel = info.benchmarkLevel;

        AntLog.Info('设备品牌: ', info.brand);
        AntLog.Info('设备型号: ', info.model);
        AntLog.Info('设备像素比: ', info.pixelRatio);
        AntLog.Info('设备宽度: ', info.windowWidth);
        AntLog.Info('设备高度: ', info.windowHeight);
        AntLog.Info('状态栏的高度: ', info.statusBarHeight);
        AntLog.Info('微信设置的语言: ', info.language);
        AntLog.Info('微信版本号: ', info.version);
        AntLog.Info('操作系统及版本: ', info.system);
        AntLog.Info('客户端平台: ', info.platform);
        AntLog.Info('用户字体大小: ', info.fontSizeSetting);
        AntLog.Info('客户端基础版本: ', info.SDKVersion);
        AntLog.Info('设备性能等级: ', info.benchmarkLevel);

        return this.m_stSystemInfo;
    }

    public InitLaunchOptions() {
        // try {
        //     let info = qg.getLaunchOptionsSync();
        //     this.m_stLaunchOptionsInfo.path = info.path;
        //     this.m_stLaunchOptionsInfo.scene = info.scene;
        //     this.m_stLaunchOptionsInfo.query = info.query;
        //     this.m_stLaunchOptionsInfo.shareTicket = info.shareTicket;
        //     this.m_stLaunchOptionsInfo.referrerInfo = new ReferrerInfo();
        //     if (info.referrerInfo != undefined) {
        //         this.m_stLaunchOptionsInfo.referrerInfo.appId = info.referrerInfo.appId;
        //         this.m_stLaunchOptionsInfo.referrerInfo.extraData = info.referrerInfo.extraData;
        //     } else {
        //         AntLog.Warn(`getLaunchOptionsSync: info.referrerInfo is undefined`);
        //     }

        // } catch (msg) {
        //     AntLog.Error(`getLaunchOptionsSync: ${msg}`);
        // }

        qg.onShow && qg.onShow(this.OnShowHandler.bind(this));
        qg.onHide && qg.onHide(this.OnHideHandler.bind(this));
        qg.onError && qg.onError(this.OnErrorHandler.bind(this));
        qg.onAudioInterruptionEnd && qg.onAudioInterruptionEnd(this.OnAudioInterruptionEnd);
        qg.onAudioInterruptionBegin && qg.onAudioInterruptionBegin(this.OnAudioInterruptionBegin);
    }

    public GetLaunchOptions(): LaunchOptionsInfo {
        // if (!this.m_stLaunchOptionsInfo) {
        //     this.InitLaunchOptions();
        // }
        // return this.m_stLaunchOptionsInfo;
        return null;
    }

    public SdkInitShareMenu(params: any): void {
        // params = params || { title: "test", imageUrl: "test" };
        // AntLog.Debug("AntPlatform QG init share menu");
        // qg.showShareMenu({ withShareTicket: true });
        // qg.updateShareMenu({ withShareTicket: true });
        // let shareAppMessage = qg.onShareAppMessage;
        // if (qg.aldOnShareAppMessage) {
        //     shareAppMessage = qg.aldOnShareAppMessage;
        // }
        // shareAppMessage(function () {
        //     return {
        //         title: params.title,
        //         imageUrl: params.imageUrl,
        //     };
        // });
    }

    public RequestSdkCheckUpdate() {
        qg.onUpdateReady(function (res) {
            qg.showModal({
                message: "isUpdate---" + res
            })
            if (res == 1) {
                qg.applyUpdate();
            }
        })
    }

    public async AsyncRequestSdkCheckVersion(): Promise<number> {
        AntLog.Debug("qg check version");
        return new Promise<any>(resolve => {
            qg.request({
                url: 'https://g.api.uqee.com/rest/index/check_version',
                // url: 'https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/wechatauth/checkversion',
                data: {
                },
                success: res => {
                    AntLog.Debug("checkVersion success! res:", res);
                    var ver = PlatformVersion.PUB;
                    if (res.data && res.data.data && res.data.data.length >= 3) {
                        var verVal = res.data.data[2];
                        if (verVal == "0" || verVal == 0 || verVal == "devtools") {
                            ver = PlatformVersion.DEV;
                        }
                    }
                    resolve(ver);
                },
                fail: res => {
                    AntLog.Error("checkVersion failed! res:", res);
                    resolve(PlatformVersion.PUB);
                }
            });
        });
    }

    public async AsyncRequestSdkIsAuthed(): Promise<boolean> {
        AntLog.Info("QGAPI Call AsyncRequestSdkIsAuthed");

        return new Promise<boolean>(resolve => {
            qg.getSetting({
                success: function (res) {
                    let authered: any = res.authSetting['scope.userInfo'];
                    AntLog.Debug("qg.getSetting success! isAuth: " + authered);
                    let ret = (authered != undefined);
                    resolve(ret);
                },
                fail: function () {
                    AntLog.Error("qg.getSetting failed!");
                    resolve(false);
                },
            })
        });
    }

    public async AsyncRequestSdkUserInfo(): Promise<SdkUserInfo> {
        AntLog.Info("QGAPI Call AsyncRequestSdkUserInfo");
        let that = this;
        return new Promise<any>(resolve => {
            if (that.m_stSystemInfo.platformVersionCode >= 1053) {
                qg.getUserInfo().then((res) => {
                    if (res.data) {
                        console.log('当前用户信息: ' + JSON.stringify(res.data));
                        that.SdkUserInfo.fromOVUserInfo(res);
                        resolve(that.SdkUserInfo)
                    }
                }, (err) => {
                    console.log('获取用户信息失败' + JSON.stringify(err));
                    resolve(null);
                });
            }
        });
    }

    public async AsyncRequestSdkLogin(): Promise<SdkLoginInfo> {
        AntLog.Info("QGAPI Call AsyncRequestSdkLogin");
        let that = this;
        return new Promise<SdkLoginInfo>(resolve => {
            if (that.m_stSystemInfo.platformVersionCode >= 1053) {
                qg.login().then((res) => {
                    AntLog.Debug("AsyncRequestSdkLogin qg.login success! code:", JSON.stringify(res));
                    if (res.data.token) {
                        // 使用token进行服务端对接
                        that.m_stSdkLoginInfo.code = res.data.token;
                        resolve(that.m_stSdkLoginInfo);
                    }
                }, (err) => {
                    AntLog.Error("AsyncRequestSdkLogin qg.login failed! err:", JSON.stringify(err));
                });
            }
        });
    }

    public async AsyncRequestSdkCreateUserInfoButton(params: any): Promise<any> {
        AntLog.Info("QGAPI Call AsyncRequestSdkCreateUserInfoButton");
        let that = this;
        let pixelRatioX: number = AntFrameConfig.GAME_WIDTH / that.GetSystemInfo().screenWidth;
        let pixelRatioY: number = 0;
        pixelRatioY = AntFrameConfig.GAME_HEIGHT / (that.GetSystemInfo().screenWidth *
            AntFrameConfig.GAME_HEIGHT / AntFrameConfig.GAME_WIDTH);
        let screenHeight: number = that.GetSystemInfo().screenHeight;
        let authBtn: cc.Node = this.AuthSpriteNode;
        let pos: cc.Vec2 = cc.find("Canvas").convertToWorldSpaceAR(cc.v2(authBtn.x, authBtn.y));

        let button = qg.createUserInfoButton({
            type: params.type || 'text',
            lang: params.lang || "zh_CN",
            text: params.text || '获取用户信息',
            style: params.style || {
                left: pos.x / pixelRatioX - authBtn.width / pixelRatioX / 2,
                top: screenHeight - pos.y / pixelRatioY - authBtn.height / pixelRatioY / 2,
                width: authBtn.width / pixelRatioX,
                height: authBtn.height / pixelRatioY,
                lineHeight: authBtn.height / pixelRatioY,
                textAlign: 'center',
                fontSize: 12,
                borderRadius: 4,

                backgroundColor: '#ff0000',
                color: '#ffffff',
            }
        });

        return new Promise<any>(resolve => {
            button.onTap(function (res) {
                if (res.userInfo) {
                    button.hide();
                    that.SdkUserInfo.fromOVUserInfo(res);
                    resolve(that.SdkUserInfo);
                } else {
                    AntLog.Error("获取用户信息失败");
                    if (!params.force) {
                        resolve(null);
                    }
                }
            });
        });
    }

    public async AsyncHttpRequestCode2Session(params: any): Promise<boolean> {
        let that = this;
        return new Promise<boolean>(resolve => {
            HttpMgr.sendRequest({
                url: params.url,
                path: "/v1/wechatauth",
                method: "GET",
                data: {
                    gameid: params.gameid || -1,
                    code: params.code || that.SdkLoginInfo.code,
                },
                onSuccess: function (res) {
                    AntLog.Info("Send Request Callback: ", res);
                    res.code;
                    res.desc;
                    res.data.errcode;
                    res.data.errmsg;
                    that.SdkUserInfo.openId = res.data.openid;
                    that.SdkUserInfo.sessionId = res.data.session_key;
                    that.SdkUserInfo.unionId = res.data.unionid;
                    resolve(true);
                }.bind(this),
                onFail: function (res) {
                    AntLog.Info("Send Request Failed! res: ", res);
                    resolve(false);
                }.bind(this),
                onError: function (res) {
                    AntLog.Info("Send Request Error! res: ", res);
                    resolve(false);
                }.bind(this),
            });
        });
    }

    public async AsyncLoadSubpackage(params: any): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            let packName = params.packName ? params.packName : 'root';
            var loadTask = qg.loadSubpackage({
                name: packName,
                success: function (res) {
                    params.success && params.success(res);
                    resolve(true);
                },
                fail: function (res) {
                    params.fail && params.fail(res);
                    resolve(false);
                }
            })
            loadTask.onProgressUpdate(res => {
                params.progress && params.progress(res);
            })
        });
    }

    public async Share(info: SdkShareInfo): Promise<boolean> {
        AntLog.Debug("AntPlatform QG share! info:", info)
        if (info && ((info.imageUrl === "") || (info.title === ""))) {
            AntLog.Error("AntPlatform QG share parameter error");
        }
        return new Promise<boolean>(resolve => {
            qg.share({
                success: function () {
                    AntLog.Debug("AntPlatform QG Share callback: success!");
                    this.m_shareSuccessCb && this.m_shareSuccessCb();
                    resolve(true);
                }.bind(this),
                fail: function () {
                    AntLog.Error("AntPlatform QG Share callback: fail!");
                    this.m_shareFailedCb && this.m_shareFailedCb();
                    resolve(false);
                }.bind(this),
                cancel: function () {
                    AntLog.Error("AntPlatform QG Share callback: fail!");
                    this.m_shareFailedCb && this.m_shareFailedCb();
                    resolve(false);
                }.bind(this),
                complete: function () {
                    AntLog.Debug("AntPlatform QG Share callback: complete");
                }.bind(this)
            });
        });
    }

    public ReportSendEvent(params: any) {
    }

    public ReportStageOnStart(params: any) {
    }

    public ReportStageOnRunning(params: any) {
    }

    public ReportStageOnEnd(params: any) {
    }

    public SetClipboardData(value: string): void {
        qg.setClipboardData && qg.setClipboardData({
            text: value,
            success: function () {
                console.log("ANT QG 复制成功！");
            },
            fail: function () {
                console.log("ANT QG 复制失败！");
            },
            complete: function () {
            }
        });
    }

    public ResetGame(): void {
        qg.exitMiniProgram({
            fail: function () {
                console.log("ANT QG 退出游戏失败");
            }
        });
    }

    public setShareSuccessCb(cb) {
        this.m_shareSuccessCb = cb;
    }

    public setShareFailedCb(cb) {
        this.m_shareFailedCb = cb;
    }

    public resetShareCb() {
        this.m_shareSuccessCb = null;
        this.m_shareFailedCb = null;
    }

    private OnShowHandler(res: any): void {
        AntLog.Info("QG OnShowHandler callback");
    }

    private OnErrorHandler(res: any): void {
        AntLog.Info("QG OnErrorHandler callback");
    }

    private OnHideHandler(res: any): void {
        AntLog.Info("QG OnHideHandler callback");
        this.m_hideTs = new Date().getTime();
    }

    private OnAudioInterruptionEnd(): void {

    }

    private OnAudioInterruptionBegin(): void {

    }

    /**
     * 微信小游戏API
     * 游戏圈
     */
    public async AsyncCreateGameClub() {
        AntLog.Info("QGAPI Call AsyncCreateGameClub");

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        if (typeof qg.createGameClubButton === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏圈功能");
            return;
        }

        let btn = await qg.createGameClubButton({
            type: 'image', // 'image' or 'text'
            icon: 'green',
            style: {
                left: 10,
                top: 200,
                width: 40,
                height: 40,
            }
        });
        btn.onTap((res) => {
            AntLog.Debug("Create GameClubButon callback: " + res);
        });
        await btn.show();
    }

    /**
     * 微信小游戏API
     * 小程序跳转
     */
    public async AsyncNavigateToMiniProgram(params) {
        AntLog.Info("QGAPI Call AsyncNavigateToMiniProgram: " + params.appId);

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        if (typeof qg.navigateToMiniProgram === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏跳转功能");
            return;
        }

        await qg.navigateToMiniProgram({
            appId: params.appId,
            path: 'page/index/index?id=123',
            extraData: {
                foo: 'bar'
            },
            envVersion: 'develop',
            success(res) {
                AntLog.Debug("NavigateToMiniProgram Success");
            },
            fail(res) {
                AntLog.Error("NavigateToMiniProgram Fail: " + res);
            }
        })
    }

    public async ShowInterstitialAd(params: any) {
        AntLog.Info("QGAPI Call ShowInterstitialAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_interstFinishCb = finishCb;
        this.m_interstErrorCb = errorCb;

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        if (typeof qg.createInterstitialAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持插屏功能");
            return;
        }

        let that = this;
        if (this.m_interstitialAd == undefined) {
            this.m_interstitialAd = await qg.createInterstitialAd({
                posId: params.adUnitId || "invalid_ad_id"
            });

            that.m_interstitialAd.onLoad(() => {
                AntLog.Debug('插屏广告加载成功')
            });

            that.m_interstitialAd.onError(res => {
                // AntFrame.UIMgr.ShowToast(`${res.errMsg}`);
                AntLog.Error("ShowInterstitialAd callback onError 1 " + res.errMsg);
                this.m_interstErrorCb && this.m_interstErrorCb();
            });

            that.m_interstitialAd.onClose(res => {
                AntLog.Info("ShowInterstitialAd callback onClose 1");
                that.m_interstFinishCb && that.m_interstFinishCb();
            });
        }

        var adshow = that.m_interstitialAd.show();
        adshow && adshow.then(() => {
            AntLog.Debug('插屏广告展示成功');
        }).catch(err => {
            switch (err.code) {
                case 30003:
                    AntLog.Error("新用户1天内不能曝光Banner，请将手机时间调整为1天后，退出游戏重新进入")
                    break;
                case 30009:
                    AntLog.Error("10秒内调用广告次数超过1次，10秒后再调用")
                    break;
                case 30002:
                    AntLog.Error("load广告失败，重新加载广告") 
                    break;
                default:
                    // 参考 https://minigame.vivo.com.cn/documents/#/lesson/open-ability/ad?id=广告错误码信息 对错误码做分类处理
                    AntLog.Error("插屏广告展示失败")
                    AntLog.Error(JSON.stringify(err))
                    break;
            }  
        });
    }
    /**
     * 微信小游戏API
     * 播放激励视频
     * { adUnitId: 'xxxx' ,finishCb:cb, exitCb:cb}
     */
    public async ShowRewardVideoAd(params: any) {
        AntLog.Info("QGAPI Call ShowRewardVideoAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let exitCb = params.exitCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_videoFinishCb = finishCb;
        this.m_videoExitCb = exitCb;
        this.m_videoErrorCb = errorCb;

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        if (typeof qg.createRewardedVideoAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持激励视频功能");
            return;
        }

        let that = this;
        if (that.m_videoAd == undefined) {
            that.m_videoAd = await qg.createRewardedVideoAd({
                posId: params.adUnitId || "invalid_ad_id"
            });

            that.m_videoAd.onLoad(() => {
                AntLog.Debug('激励视频 广告加载成功')
            });

            that.m_videoAd.onError(res => {
                AntFrame.UIMgr.ShowToast(`${res.errMsg}`);
                AntLog.Error("ShowRewardVideoAd callback onError 1 " + res.errMsg);
                this.m_videoErrorCb && this.m_videoErrorCb();
            });

            that.m_videoAd.onClose(res => {
                // 用户点击了【关闭广告】按钮
                // 小于 2.1.0 的基础库版本，res 是一个 undefined
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    AntLog.Info("ShowRewardVideoAd callback onClose 1");
                    that.m_videoFinishCb && that.m_videoFinishCb();
                }
                else {
                    // 播放中途退出，不下发游戏奖励
                    AntLog.Info("ShowRewardVideoAd callback onClose 2");
                    this.m_videoExitCb && this.m_videoExitCb();
                }
            });
        }

        var adshow = that.m_videoAd.show();
        adshow && adshow.then(() => {
            AntLog.Debug("激励视频广告显示成功");
        }).catch(err => {
            AntLog.Debug("激励视频广告显示失败", err);
        });
    }

    public async ShowBannerAd(params: any) {
        AntLog.Info("QGAPI Call ShowBannerAd: " + params.adUnitId);
        let that = this;

        if (that.m_bannerAd == undefined) {
            that.m_bannerAd = qg.createBannerAd({
                posId: params.adUnitId || "invalid_ad_id",
                style: params.style || {
                    left: 20,
                    top: this.SystemInfo.screenHeight - 110,
                    width: this.SystemInfo.screenWidth - 40,
                    height: this.SystemInfo.screenHeight / 5,
                }
            })

            that.m_bannerAd.onError(err => {
                AntLog.Error('ShowBannerAd callback onError 1' + err.errMsg)
            });

            that.m_bannerAd.onLoad(() => {
                AntLog.Debug('ShowBannerAd callback banner 广告加载成功')
            });

            that.m_bannerAd.onResize(res => {
                if (that.m_bannerAd && that.m_bannerAd.style) {
                    let h = that.m_bannerAd.style.realHeight;
                    if (h == undefined) h = 100;
                    that.m_bannerAd.style.top = that.SystemInfo.windowHeight - h;
                    that.m_bannerAd.style.left = 20;
                    AntLog.Debug(`ShowBannerAd callback onResize ${res.width}, ${res.height}`);
                    AntLog.Debug(`ShowBannerAd callback onResize ${that.m_bannerAd.style.realWidth}, ${h}`);
                }
            });
        }

        var adshow = that.m_bannerAd.show();
        adshow && adshow.then(() => {
            AntLog.Debug('Banner广告显示');
        }).catch(err => {
            AntLog.Error("Banner广告展示失败", err);
        });
    }


    public HideBannerAd() {
        if (this.m_bannerAd != undefined) {
            this.m_bannerAd.hide()
            this.m_bannerAd.destroy();
            this.m_bannerAd = null;
        }
    }

    public async PostMessageToOpenData(params: any): Promise<void> {
        params = params || {};
        params.messageType = params.messageType || OpenDataMsgType.FetchFriendRankList;
        params.nowTime = params.nowTime || 0;
        params.shareTicket = params.shareTicket || "";

        // 下面的大小是根据小游戏的canvas大小来决定的
        // sharedCanvas.width = AntFrameConfig.GAME_WIDTH;
        // sharedCanvas.height = AntFrameConfig.GAME_HEIGHT;
        // 发消息给子域
        qg.postMessage(params);
    }

    public async GetOpenDataCanvas(tex: cc.Texture2D): Promise<void> {
        tex.initWithElement(sharedCanvas);
    }

    public showModal(params: any) {
        let title: string = params.title ? params.title : "提示";
        let content: string = params.content ? params.content : "";
        let showCancel: boolean = params.showCancel == null ? true : params.showCancel;
        let cancelText: string = params.cancelText ? params.cancelText : "取消";
        let cancelColor: string = params.cancelColor ? params.cancelColor : "#000000";
        let confirmText: string = params.confirmText ? params.confirmText : "确定";
        let confirmColor: string = params.confirmColor ? params.confirmColor : "#576B95";
        let success: any = params.success ? params.success : null;
        let fail: any = params.fail ? params.fail : null;;
        let complete: any = params.complete ? params.complete : null;;

        qg.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            cancelText: cancelText,
            cancelColor: cancelColor,
            confirmText: confirmText,
            confirmColor: confirmColor,
            success: success,
            fail: fail,
            complete: complete,
        });
    }

    /**
    * vibrate 15ms
    */
    public VibrateShort() {
        AntLog.Info("QGAPI Call VibrateShort");

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        qg.vibrateShort(
            {
                success: function (res) {
                    AntLog.Debug("qg api callback vibrateShort success");
                },
                fail: function (res) {
                    AntLog.Warn("qg api callback vibrateShort fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("qg api callback vibrateShort complete");
                }
            });
    }

    /**
    * vibrate 400ms
    */
    public VibrateLong() {
        AntLog.Info("QGAPI Call VibrateLong");

        if (typeof qg === 'undefined') {
            AntLog.Warn("qg is undefined");
            return;
        }

        qg.vibrateLong(
            {
                success: function (res) {
                    AntLog.Debug("qg api callback vibrateLong success");
                },
                fail: function (res) {
                    AntLog.Warn("qg api callback vibrateLong fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("qg api callback vibrateLong complete");
                }
            });
    }
}
