import AntFrame from '../AntFrame';
import AntLog from '../Log/AntLog';
import { LaunchOptionsInfo, SdkLoginInfo, SdkUserInfo, SystemInfo } from './AntPlatformDefine';

export default class AntPlatformImpl {
    protected m_stLaunchOptionsInfo: LaunchOptionsInfo = null;
    protected m_stSystemInfo: SystemInfo = null;
    protected m_stSdkUserInfo: SdkUserInfo = null;
    protected m_stSdkLoginInfo: SdkLoginInfo = null;
    private m_stJiaZaiNode: cc.Node = null;
    private m_stAuthSpriteNode: cc.Node = null;

    constructor() {
        this.m_stLaunchOptionsInfo = new LaunchOptionsInfo();
        this.m_stSystemInfo = new SystemInfo();
        this.m_stSdkUserInfo = new SdkUserInfo();
        this.m_stSdkLoginInfo = new SdkLoginInfo();
    }

    public async Init(params:any) {
    }

    public GetSystemInfo(): SystemInfo {
        return this.m_stSystemInfo;
    }

    public InitLaunchOptions(): void {
    }

    public GetLaunchOptions(): LaunchOptionsInfo {
        return null;
    }

    public SdkInitShareMenu(params): void {
    }

    public RequestSdkCheckUpdate() {
    }

    public async AsyncRequestSdkCheckVersion(): Promise<number> {
        return null;
    }

    public async AsyncRequestSdkIsAuthed(): Promise<boolean> {
        return false;
    }

    public async AsyncRequestSdkUserInfo(): Promise<SdkUserInfo> {
        return null;
    };

    public async AsyncRequestSdkLogin(): Promise<SdkLoginInfo> {
        return null;
    };

    public async AsyncHttpRequestCode2Session(params: any): Promise<boolean> {
        return false;
    }

    public async AsyncRequestSdkCreateUserInfoButton(params: any): Promise<any> {
        return null;
    };

    public async PostMessageToOpenData(params:any): Promise<void> {

    }

    public async AsyncCreateGameClub() {
        AntLog.Debug("AsyncCreateGameClub: no implementation");
    }

    public async AsyncNavigateToMiniProgram(params) {
        AntLog.Debug("AsyncNavigateToMiniProgram: no implementation");
    }

    public async ShowBannerAd(params: any) { }

    public async ShowRewardVideoAd(params: any) { }

    public async ShowInterstitialAd(params: any) { }

    public HideBannerAd() { }

    public async Share(info: any): Promise<boolean> {
        AntFrame.UIMgr.ShowToast("该接口不可用");
        return null;
    }

    public GetClipboardData(callback: Function): void {
        AntFrame.UIMgr.ShowToast("该接口不可用");
    }

    public SetClipboardData(value: string): void {
        AntFrame.UIMgr.ShowToast("该接口不可用");
    }

    public ResetGame(): void {
        AntFrame.UIMgr.ShowToast("该接口不可用");
    }

    public get SystemInfo(): SystemInfo {
        return this.m_stSystemInfo;
    }

    public get LaunchOptions(): LaunchOptionsInfo {
        return this.m_stLaunchOptionsInfo;
    }

    public get SdkUserInfo(): SdkUserInfo {
        return this.m_stSdkUserInfo;
    }

    public set SdkUserInfo(v: SdkUserInfo) {
        this.m_stSdkUserInfo = v;
    }

    public get SdkLoginInfo(): SdkLoginInfo {
        return this.m_stSdkLoginInfo;
    }

    public get JiaZaiNode(): cc.Node {
        return this.m_stJiaZaiNode;
    }

    public set JiaZaiNode(v: cc.Node) {
        this.m_stJiaZaiNode = v;
    }

    public get AuthSpriteNode(): cc.Node {
        return this.m_stAuthSpriteNode;
    }

    public set AuthSpriteNode(v: cc.Node) {
        this.m_stAuthSpriteNode = v;
    }

    public async AsyncAdvReview(params: any): Promise<any> {
        return null;
    }

    public ShowMoreGameButton(params: any = null) {}

    public HideMoreGameButton() {}
}
