import AntFrame from "../AntFrame";
import AntFrameConfig from "../AntFrameConfig";
import HttpMgr from "../Http/HTTP";
import AntLog from "../Log/AntLog";
import { LaunchOptionsInfo, OpenDataMsgType, PlatformVersion, ReferrerInfo, SdkLoginInfo, SdkShareInfo, SdkUserInfo, SystemInfo } from './AntPlatformDefine';
import AntPlatformImpl from './AntPlatformImpl';

declare var tt;
declare var sharedCanvas;

export class AntPlatformDouyinBase extends AntPlatformImpl {
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

        tt.setKeepScreenOn && tt.setKeepScreenOn({
            keepScreenOn: true,
            success: function () {
                console.log("常亮设置成功！");
            }
        });
    }

    private async InitSystemInfo(): Promise<SystemInfo> {
        AntLog.Info("TTAPI Call InitSystemInfo");

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return null;
        }

        let info = await tt.getSystemInfoSync();
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
            let info = tt.getLaunchOptionsSync();
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
        tt.onShow && tt.onShow(this.OnShowHandler.bind(this));
        tt.onHide && tt.onHide(this.OnHideHandler.bind(this));
        tt.onError && tt.onError(this.m_fnErrorCallback);
        tt.onAudioInterruptionEnd && tt.onAudioInterruptionEnd(this.OnAudioInterruptionEnd);
        tt.onAudioInterruptionBegin && tt.onAudioInterruptionBegin(this.OnAudioInterruptionBegin);
    }

    public GetLaunchOptions(): LaunchOptionsInfo {
        if (!this.m_stLaunchOptionsInfo) {
            this.InitLaunchOptions();
        }
        return this.m_stLaunchOptionsInfo;
    }

    public SdkInitShareMenu(params: any): void {
        params = params || { title: "test", imageUrl: "test" };
        AntLog.Debug("AntPlatform TT init share menu");
        tt.showShareMenu({ withShareTicket: true });
        tt.updateShareMenu({ withShareTicket: true });
        tt.onShareAppMessage(function () {
            return {
                title: params.title,
                imageUrl: params.imageUrl,
            };
        });
    }

    public RequestSdkCheckUpdate() {
        var updateManager = tt.getUpdateManager();
        if (updateManager) {
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                AntLog.Debug("tt update ok! res:", res);
            })
            updateManager.onUpdateReady(function () {
                tt.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success: res => {
                        AntLog.Debug("tt update! showModal ok, res:", res)
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
        AntLog.Debug("tt check version");
        return new Promise<any>(resolve => {
            tt.request({
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
        AntLog.Info("TTAPI Call AsyncRequestSdkIsAuthed");

        return new Promise<boolean>(resolve => {
            tt.getSetting({
                success: function (res) {
                    let authered: any = res.authSetting['scope.userInfo'];
                    AntLog.Debug("tt.getSetting success! isAuth: " + authered);
                    let ret = (authered != undefined);
                    resolve(ret);
                },
                fail: function () {
                    AntLog.Error("tt.getSetting failed!");
                    resolve(false);
                },
            })
        });
    }

    public async AsyncRequestSdkUserInfo(): Promise<SdkUserInfo> {
        AntLog.Info("TTAPI Call AsyncRequestSdkUserInfo");
        let that = this;
        return new Promise<any>(resolve => {
            tt.getUserInfo({
                withCredentials: true,
                success: res => {
                    that.SdkUserInfo.fromWechatQQUserInfo(res);
                    resolve(that.SdkUserInfo);
                },
                fail: res => {
                    AntLog.Error("tt.getUserInfo failed! err:", res.errMsg);
                    resolve(null);
                }
            });
        });
    }

    public async AsyncRequestSdkLogin(): Promise<SdkLoginInfo> {
        AntLog.Info("TTAPI Call AsyncRequestSdkLogin");

        return new Promise<SdkLoginInfo>(resolve => {
            tt.login({
                success: res => {
                    AntLog.Debug("AsyncRequestSdkLogin tt.login success! code:", res.code);
                    this.m_stSdkLoginInfo.code = res.code;
                    resolve(this.m_stSdkLoginInfo);
                },
                fail: res => {
                    AntLog.Error("AsyncRequestSdkLogin tt.login failed! err:", res.errMsg);
                    resolve(null);
                },
            });
        });
    }

    public async AsyncRequestSdkCreateUserInfoButton(params: any): Promise<any> {
        AntLog.Info("TTAPI Call AsyncRequestSdkCreateUserInfoButton");
        let that = this;
        let pixelRatioX: number = AntFrameConfig.GAME_WIDTH / that.GetSystemInfo().screenWidth;
        let pixelRatioY: number = 0;
        pixelRatioY = AntFrameConfig.GAME_HEIGHT / (that.GetSystemInfo().screenWidth *
            AntFrameConfig.GAME_HEIGHT / AntFrameConfig.GAME_WIDTH);
        let screenHeight: number = that.GetSystemInfo().screenHeight;
        let authBtn: cc.Node = this.AuthSpriteNode;
        let pos: cc.Vec2 = cc.find("Canvas").convertToWorldSpaceAR(cc.v2(authBtn.x, authBtn.y));

        let button = tt.createUserInfoButton({
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
            var loadTask = tt.loadSubpackage({
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
        AntLog.Debug("AntPlatform TT share! info:", info)
        if (info && ((info.imageUrl === "") || (info.title === ""))) {
            AntLog.Error("AntPlatform TT share parameter error");
        }
        return new Promise<boolean>(resolve => {
            tt.shareAppMessage({
                title: info.title,
                imageUrl: info.imageUrl,
                content: info.content,
                query: info.Query,
                success: function () {
                    AntLog.Debug("AntPlatform TT Share callback: success!");
                    this.m_shareSuccessCb && this.m_shareSuccessCb();
                    resolve(true);
                },
                fail: function () {
                    AntLog.Error("AntPlatform TT Share callback: fail!");
                    this.m_shareFailedCb && this.m_shareFailedCb();
                    resolve(false);
                },
                complete: function () {
                    AntLog.Debug("AntPlatform TT Share callback: complete");
                }
            });
        });
    }

    //自定义事件上报
    public ReportSendEvent(params: any) {
    }

    //关卡上报(开始)
    //stageId: 关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
    //stageName: //关卡名称，该字段必传
    //userId: //用户ID，可选
    public ReportStageOnStart(params: any) {
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
    }

    public SetClipboardData(value: string): void {
        tt.setClipboardData && tt.setClipboardData({
            data: value,
            success: function () {
                console.log("ANT TT 复制成功！");
            },
            fail: function () {
                console.log("ANT TT 复制失败！");
            },
            complete: function () {
            }
        });
    }

    public ResetGame(): void {
        tt.exitMiniProgram({
            fail: function () {
                console.log("ANT TT 退出游戏失败");
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
        AntLog.Info("tt OnShowHandler callback");
        if (this.m_hideTs == 0) {
            this.resetShareCb();
            return;
        }
        let delta = new Date().getTime() - this.m_hideTs;
        if (delta > 2000) {
            this.m_shareSuccessCb && this.m_shareSuccessCb();
        } else {
            this.m_shareFailedCb && this.m_shareFailedCb();
        }
        this.resetShareCb();
        this.m_hideTs = 0;
    }

    private OnErrorHandler(res: any): void {
        AntLog.Info("tt OnErrorHandler callback");
    }

    private OnHideHandler(res: any): void {
        AntLog.Info("tt OnHideHandler callback");
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
        AntLog.Info("TTAPI Call AsyncCreateGameClub");

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        if (typeof tt.createGameClubButton === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏圈功能");
            return;
        }

        let btn = await tt.createGameClubButton({
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
        AntLog.Info("TTAPI Call AsyncNavigateToMiniProgram: " + params.appId);

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        if (typeof tt.navigateToMiniProgram === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持游戏跳转功能");
            return;
        }

        await tt.navigateToMiniProgram({
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
        AntLog.Info("TTAPI Call ShowInterstitialAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_interstFinishCb = finishCb;
        this.m_interstErrorCb = errorCb;

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        if (typeof tt.createInterstitialAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持插屏功能");
            return;
        }

        let that = this;

        if (this.m_interstitialAd == undefined) {
            this.m_interstitialAd = await tt.createInterstitialAd({
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
        AntLog.Info("TTAPI Call ShowRewardVideoAd: " + params.adUnitId);
        let finishCb = params.finishCb || function () { };
        let exitCb = params.exitCb || function () { };
        let errorCb = params.errorCb || function () { }
        this.m_videoFinishCb = finishCb;
        this.m_videoExitCb = exitCb;
        this.m_videoErrorCb = errorCb;

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        if (typeof tt.createRewardedVideoAd === 'undefined') {
            AntFrame.UIMgr.ShowToast("该微信版本不支持激励视频功能");
            return;
        }

        let that = this;
        if (that.m_videoAd == undefined) {
            that.m_videoAd = await tt.createRewardedVideoAd({
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
        AntLog.Info("TTAPI Call ShowBannerAd: " + params.adUnitId);
        let that = this;

        if (that.m_bannerAd == undefined) {
            that.m_bannerAd = tt.createBannerAd({
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
        tt.postMessage(params);
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

        tt.showModal({
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
        AntLog.Info("TTAPI Call VibrateShort");

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        tt.vibrateShort(
            {
                success: function (res) {
                    AntLog.Debug("tt api callback vibrateShort success");
                },
                fail: function (res) {
                    AntLog.Warn("tt api callback vibrateShort fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("tt api callback vibrateShort complete");
                }
            });
    }

    /**
    * vibrate 400ms
    */
    public VibrateLong() {
        AntLog.Info("TTAPI Call VibrateLong");

        if (typeof tt === 'undefined') {
            AntLog.Warn("tt is undefined");
            return;
        }

        tt.vibrateLong(
            {
                success: function (res) {
                    AntLog.Debug("tt api callback vibrateLong success");
                },
                fail: function (res) {
                    AntLog.Warn("tt api callback vibrateLong fail: " + res);
                },
                complete: function (res) {
                    AntLog.Debug("tt api callback vibrateLong complete");
                }
            });
    }
}
