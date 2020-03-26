import AntFrame from "../AntFrame";
import AntFrameConfig from "../AntFrameConfig";
import HttpMgr from "../Http/HTTP";
import AntLog from "../Log/AntLog";
import { LaunchOptionsInfo, OpenDataMsgType, PlatformVersion, ReferrerInfo, SdkLoginInfo, SdkShareInfo, SdkUserInfo, SystemInfo } from './AntPlatformDefine';
import AntPlatformImpl from './AntPlatformImpl';

declare var qq;
declare var sharedCanvas;

export class AntPlatformQQBase extends AntPlatformImpl {
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

        qq.setKeepScreenOn && qq.setKeepScreenOn({
            keepScreenOn: true,
            success: function () {
                console.log("常亮设置成功！");
            }
        });
    }

    private async InitSystemInfo(): Promise<SystemInfo> {
        AntLog.Info("QQAPI Call InitSystemInfo");

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return null;
        }

        let info = await qq.getSystemInfoSync();
        this.m_stSystemInfo.model = info.model;
        this.m_stSystemInfo.pixelRatio = info.pixelRatio;
        this.m_stSystemInfo.platform = info.platform;
        this.m_stSystemInfo.screenHeight = info.screenHeight;
        this.m_stSystemInfo.screenWidth = info.screenWidth;
        this.m_stSystemInfo.system = info.system;
        this.m_stSystemInfo.version = info.version;
        this.m_stSystemInfo.windowHeight = info.windowHeight;
        this.m_stSystemInfo.windowWidth = info.windowWidth;
        this.m_stSystemInfo.SDKVersion = info.SDKVersion;
        this.m_stSystemInfo.benchmarkLevel = info.benchmarkLevel;

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
        try {
            let info = qq.getLaunchOptionsSync();
            this.m_stLaunchOptionsInfo.path = info.path;
            this.m_stLaunchOptionsInfo.scene = info.scene;
            this.m_stLaunchOptionsInfo.query = info.query;
            this.m_stLaunchOptionsInfo.shareTicket = info.shareTicket;
            this.m_stLaunchOptionsInfo.referrerInfo = new ReferrerInfo();
            if (info.referrerInfo != undefined) {
                this.m_stLaunchOptionsInfo.referrerInfo.appId = info.referrerInfo.appId;
                this.m_stLaunchOptionsInfo.referrerInfo.extraData = info.referrerInfo.extraData;
            } else {
                AntLog.Warn(`getLaunchOptionsSync: info.referrerInfo is undefined`);
            }

        } catch (msg) {
            AntLog.Error(`getLaunchOptionsSync: ${msg}`);
        }

        this.m_fnErrorCallback = this.OnErrorHandler.bind(this);
        qq.onShow && qq.onShow(this.OnShowHandler.bind(this));
        qq.onHide && qq.onHide(this.OnHideHandler.bind(this));
        qq.onError && qq.onError(this.m_fnErrorCallback);
        qq.onAudioInterruptionEnd && qq.onAudioInterruptionEnd(this.OnAudioInterruptionEnd);
        qq.onAudioInterruptionBegin && qq.onAudioInterruptionBegin(this.OnAudioInterruptionBegin);
    }

    public GetLaunchOptions(): LaunchOptionsInfo {
        if (!this.m_stLaunchOptionsInfo) {
            this.InitLaunchOptions();
        }
        return this.m_stLaunchOptionsInfo;
    }

    public SdkInitShareMenu(params: any): void {
        params = params || { title: "test", imageUrl: "test" };
        AntLog.Debug("AntPlatform QQ init share menu");
        qq.showShareMenu({ withShareTicket: true });
        qq.updateShareMenu({ withShareTicket: true });
        let shareAppMessage = qq.onShareAppMessage;
        if (qq.aldOnShareAppMessage) {
            shareAppMessage = qq.aldOnShareAppMessage;
        }
        shareAppMessage(function () {
            return {
                title: params.title,
                imageUrl: params.imageUrl,
            };
        });
    }

    public RequestSdkCheckUpdate() {
        var updateManager = qq.getUpdateManager();
        if (updateManager) {
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                AntLog.Debug("qq update ok! res:", res);
            })
            updateManager.onUpdateReady(function () {
                qq.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success: res => {
                        AntLog.Debug("qq update! showModal ok, res:", res)
                        if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate()
                        }
                    }
                })
            })
            updateManager.onUpdateFailed(function () {
                // 新版本下载失败
            })
        }
    }

    public async AsyncRequestSdkCheckVersion(): Promise<number> {
        AntLog.Debug("qq check version");
        return new Promise<any>(resolve => {
            qq.request({
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
        AntLog.Info("QQAPI Call AsyncRequestSdkIsAuthed");

        return new Promise<boolean>(resolve => {
            qq.getSetting({
                success: function (res) {
                    let authered: any = res.authSetting['scope.userInfo'];
                    AntLog.Debug("qq.getSetting success! isAuth: " + authered);
                    let ret = (authered != undefined);
                    resolve(ret);
                },
                fail: function () {
                    AntLog.Error("qq.getSetting failed!");
                    resolve(false);
                },
            })
        });
    }

    public async AsyncRequestSdkUserInfo(): Promise<SdkUserInfo> {
        AntLog.Info("QQAPI Call AsyncRequestSdkUserInfo");
        let that = this;
        return new Promise<any>(resolve => {
            qq.getUserInfo({
                withCredentials: true,
                success: res => {
                    that.SdkUserInfo.fromWechatQQUserInfo(res);
                    resolve(that.SdkUserInfo);
                },
                fail: res => {
                    AntLog.Error("qq.getUserInfo failed! err:", res.errMsg);
                    resolve(null);
                }
            });
        });
    }

    public async AsyncRequestSdkLogin(): Promise<SdkLoginInfo> {
        AntLog.Info("QQAPI Call AsyncRequestSdkLogin");

        return new Promise<SdkLoginInfo>(resolve => {
            qq.login({
                success: res => {
                    AntLog.Debug("AsyncRequestSdkLogin qq.login success! code:", res.code);
                    this.m_stSdkLoginInfo.code = res.code;
                    resolve(this.m_stSdkLoginInfo);
                },
                fail: res => {
                    AntLog.Error("AsyncRequestSdkLogin qq.login failed! err:", res.errMsg);
                    resolve(null);
                },
            });
        });
    }

    public async AsyncRequestSdkCreateUserInfoButton(params: any): Promise<any> {
        AntLog.Info("QQAPI Call AsyncRequestSdkCreateUserInfoButton");
        let that = this;
        let pixelRatioX: number = AntFrameConfig.GAME_WIDTH / that.GetSystemInfo().screenWidth;
        let pixelRatioY: number = 0;
        pixelRatioY = AntFrameConfig.GAME_HEIGHT / (that.GetSystemInfo().screenWidth *
            AntFrameConfig.GAME_HEIGHT / AntFrameConfig.GAME_WIDTH);
        let screenHeight: number = that.GetSystemInfo().screenHeight;
        let authBtn: cc.Node = this.AuthSpriteNode;
        let pos: cc.Vec2 = cc.find("Canvas").convertToWorldSpaceAR(cc.v2(authBtn.x, authBtn.y));

        let button = qq.createUserInfoButton({
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
                    that.SdkUserInfo.fromWechatQQUserInfo(res);
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
            var loadTask = qq.loadSubpackage({
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
        AntLog.Debug("AntPlatform QQ share! info:", info)
        if (info && ((info.imageUrl === "") || (info.title === ""))) {
            AntLog.Error("AntPlatform QQ share parameter error");
        }
        return new Promise<boolean>(resolve => {
            let qqShareFunc = qq.shareAppMessage;
            if (qq.aldShareAppMessage) {
                qqShareFunc = qq.aldShareAppMessage;
            }
            qqShareFunc({
                title: info.title,
                imageUrl: info.imageUrl,
                content: info.content,
                query: info.Query,
                success: function () {
                    AntLog.Debug("AntPlatform QQ Share callback: success!");
                    this.m_shareSuccessCb && this.m_shareSuccessCb();
                    resolve(true);
                }.bind(this),
                fail: function () {
                    AntLog.Error("AntPlatform QQ Share callback: fail!");
                    this.m_shareFailedCb && this.m_shareFailedCb();
                    resolve(false);
                }.bind(this),
                complete: function () {
                    AntLog.Debug("AntPlatform QQ Share callback: complete");
                }.bind(this)
            });
        });
    }

    //自定义事件上报
    public ReportSendEvent(params: any) {
        if (!qq.aldSendEvent || !params.eventName) {
            return;
        }
        if (params.data) {
            qq.aldSendEvent(params.eventName, params.data);
        } else {
            qq.aldSendEvent(params.eventName);
        }
    }

    //关卡上报(开始)
    //stageId: 关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
    //stageName: //关卡名称，该字段必传
    //userId: //用户ID，可选
    public ReportStageOnStart(params: any) {
        if (!qq.aldStage || !params.stageId || !params.stageName) {
            return;
        }
        qq.aldStage.onStart({
            stageId: params.stageId,
            stageName: params.stageName,
            userId: params.userId ? params.useId : null,
        })
    }

    //关卡上报(进行中)：捕捉用户在关卡中的一些行为和操作
    //stageId: 关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
    //stageName: 关卡名称，该字段必传，string
    //userId: 用户ID，可选，string
    //event: 事件类型，必传，string
    // payStart: 发起支付
    // paySuccess: 支付成功
    // payFail: 支付失败
    // tools: 使用道具
    // revive: 复活
    // award: 奖励
    //params: 参数
    //params.itemName：商品/道具名称，必传，string
    //params.itemId: 商品 / 道具ID，可选，string
    //params.itemCount：商品 / 道具数量，可选，number
    //params.desc：描述，可选，string
    //params.itemMoney：商品 / 道具价格，number
    public ReportStageOnRunning(params: any) {
        if (!qq.aldStage) {
            return;
        }
        if (!params.stageId ||
            !params.stageName ||
            !params.event ||
            !params.params ||
            !params.params.itemName) {
            return;
        }
        qq.aldStage.onRunning({
            stageId: params.stageId,
            stageName: params.stageName,
            userId: params.userId ? params.useId : null,
            event: params.event,
            params: params.params
        })
    }

    //关卡上报(结束)：捕捉用户在关卡中的一些操作
    //stageId: 关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
    //stageName: 关卡名称，该字段必传，string
    //userId: 用户ID，可选，string
    //event: 事件类型，必传，string
    //complete: 关卡完成
    //fail: 关卡失败
    //params: 参数
    //params.desc：对关卡失败/成功的描述，可选，string
    public ReportStageOnEnd(params: any) {
        if (!qq.aldStage) {
            return;
        }
        if (!params.stageId ||
            !params.stageName ||
            !params.event) {
            return;
        }
        qq.aldStage.onRunning({
            stageId: params.stageId,
            stageName: params.stageName,
            userId: params.userId ? params.useId : null,
            event: params.event,
            params: params.params ? params.params : null
        })
    }

    public SetClipboardData(value: string): void {
        qq.setClipboardData && qq.setClipboardData({
            data: value,
            success: function () {
                console.log("ANT QQ 复制成功！");
            },
            fail: function () {
                console.log("ANT QQ 复制失败！");
            },
            complete: function () {
            }
        });
    }

    public ResetGame(): void {
        qq.exitMiniProgram({
            fail: function () {
                console.log("ANT QQ 退出游戏失败");
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
        AntLog.Info("QQ OnShowHandler callback");
    }

    private OnErrorHandler(res: any): void {
        AntLog.Info("QQ OnErrorHandler callback");
    }

    private OnHideHandler(res: any): void {
        AntLog.Info("QQ OnHideHandler callback");
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
        AntLog.Info("QQAPI Call AsyncCreateGameClub");

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        if (typeof qq.createGameClubButton === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏圈功能");
            return;
        }

        let btn = await qq.createGameClubButton({
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
        AntLog.Info("QQAPI Call AsyncNavigateToMiniProgram: " + params.appId);

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        if (typeof qq.navigateToMiniProgram === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏跳转功能");
            return;
        }

        await qq.navigateToMiniProgram({
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
        AntLog.Info("QQAPI Call ShowInterstitialAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_interstFinishCb = finishCb;
        this.m_interstErrorCb = errorCb;

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        if (typeof qq.createInterstitialAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持插屏功能");
            return;
        }

        let that = this;

        if (this.m_interstitialAd == undefined) {
            this.m_interstitialAd = await qq.createInterstitialAd({
                adUnitId: params.adUnitId || "invalid_ad_id"
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

        that.m_interstitialAd.show()
            .then(() => AntLog.Debug('插屏广告显示'))
            .catch(err => {
                that.m_interstitialAd.load()
                    .then(() => that.m_interstitialAd.show())
                    .catch(function (err) {
                        AntLog.Error("ShowInterstitialAd callback onError 2 " + err.errMsg);
                    });
            });

    }
    /**
     * 微信小游戏API
     * 播放激励视频
     * { adUnitId: 'xxxx' ,finishCb:cb, exitCb:cb}
     */
    public async ShowRewardVideoAd(params: any) {
        AntLog.Info("QQAPI Call ShowRewardVideoAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let exitCb = params.exitCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_videoFinishCb = finishCb;
        this.m_videoExitCb = exitCb;
        this.m_videoErrorCb = errorCb;

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        if (typeof qq.createRewardedVideoAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持激励视频功能");
            return;
        }

        let that = this;
        if (that.m_videoAd == undefined) {
            that.m_videoAd = await qq.createRewardedVideoAd({
                adUnitId: params.adUnitId || "invalid_ad_id"
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

        that.m_videoAd.show()
            .then(() => AntLog.Debug('激励视频 广告显示'))
            .catch(err => {
                that.m_videoAd.load()
                    .then(() => that.m_videoAd.show())
                    .catch(function (err) {
                        AntLog.Error("ShowRewardVideoAd callback onError 2 " + err.errMsg);
                    });
            });
    }

    public async ShowBannerAd(params: any) {
        AntLog.Info("QQAPI Call ShowBannerAd: " + params.adUnitId);
        let that = this;

        if (that.m_bannerAd == undefined) {
            that.m_bannerAd = qq.createBannerAd({
                adUnitId: params.adUnitId || "invalid_ad_id",
                adIntervals: params.adIntervals || 30,
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

        that.m_bannerAd.show()
            .then(() => AntLog.Debug('Banner广告显示'))
            .catch(err => {
                that.m_bannerAd.show()
                    .catch(function (err) {
                        AntLog.Error("ShowBannerAd callback onError 2 " + err.errMsg);
                    });
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
        qq.postMessage(params);
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

        qq.showModal({
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
        AntLog.Info("QQAPI Call VibrateShort");

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        qq.vibrateShort(
            {
                success: function (res) {
                    AntLog.Debug("qq api callback vibrateShort success");
                },
                fail: function (res) {
                    AntLog.Warn("qq api callback vibrateShort fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("qq api callback vibrateShort complete");
                }
            });
    }

    /**
    * vibrate 400ms
    */
    public VibrateLong() {
        AntLog.Info("QQAPI Call VibrateLong");

        if (typeof qq === 'undefined') {
            AntLog.Warn("qq is undefined");
            return;
        }

        qq.vibrateLong(
            {
                success: function (res) {
                    AntLog.Debug("qq api callback vibrateLong success");
                },
                fail: function (res) {
                    AntLog.Warn("qq api callback vibrateLong fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("qq api callback vibrateLong complete");
                }
            });
    }
}
