import AntLog from '../../../AntFrame/Log/AntLog';
import { SdkShareInfo } from '../../../AntFrame/Platform/AntPlatformDefine';
import AntGame from '../../AntGame';
import { Platform } from '../../Platform/GamePlatform';
import { EnumQueryField, EnumShareType } from './ShareMgr';

export class ShareQueryHandler
{
    private readonly InvalidShareTicket: string = "1"; // 无效的群标记

    constructor()
    {
        this.RegisterQuery();
    }

    private RegisterQuery(): void
    {
        AntGame.ShareMgrInst.BindQuery(EnumShareType.ShareMenu,this.OnShareMenuHandler.bind(this));
        AntGame.ShareMgrInst.BindQuery(EnumShareType.InviteTeam, this.OnInviteTeamHandler.bind(this));
        AntGame.ShareMgrInst.BindQuery(EnumShareType.GroupRank, this.OnGetGroupRankListHandler.bind(this));
        AntGame.ShareMgrInst.BindQuery(EnumShareType.ActivityInviteFriendOne, this.OnCheckFriendGiftOne.bind(this));
        AntGame.ShareMgrInst.BindQuery(EnumShareType.ActivityInviteFriendTwo, this.OnCheckFriendGiftTwo.bind(this));
        AntGame.ShareMgrInst.BindQuery(EnumShareType.AddWechatFriend, this.OnAddWechatFriendHandler.bind(this));
    }

    private OnShareMenuHandler(mapData: Map<EnumQueryField,string>): void
    {
        let uin: number = Number(mapData.get(EnumQueryField.ShareUin));
        AntLog.Debug("从主界面分享进来的玩家,分享者uin:" + uin);
    }

    private OnInviteTeamHandler(mapData: Map<EnumQueryField,string>): void
    {
    }

    private OnGetGroupRankListHandler(mapData: Map<EnumQueryField,string>): void
    {
    }

    public ShareJoinTeam(teamID: number): void
    {
    }

    public GetGroupRankList(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.GroupRank);
        info.AddQuery(EnumQueryField.ShareTicket, this.InvalidShareTicket);
        // 因为shareTicket是进入后拿到的，所以这里的设置随意，但是必须要有shareTicket的键值
        Platform.sdk.Share(info);
    }

    public ShareAchievement(url: string,title: string): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.ShareAchievement);
        info.imageUrl = url;
        info.title = info.title.replace("%s",title);
        Platform.sdk.Share(info);
    }

    public ShareBalance(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.ShareBalance);
        Platform.sdk.Share(info);
    }

    public InviteFriendsOne(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.ActivityInviteFriendOne);
        Platform.sdk.Share(info);
    }

    public InviteFriendsTwo(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.ActivityInviteFriendTwo);
        Platform.sdk.Share(info);
    }

    public OnCheckFriendGiftOne(mapData: Map<EnumQueryField,string>): void
    {
        // let uin: number = Number(mapData.get(eQueryField.ShareUin));
        // Game.Server.ReqUploadShareInfo(uin,enmShareID.ActivityInviteFriendOne);
    }

    public OnCheckFriendGiftTwo(mapData: Map<EnumQueryField,string>): void
    {
        // let uin: number = Number(mapData.get(eQueryField.ShareUin));
        // Game.Server.ReqUploadShareInfo(uin,enmShareID.ActivityInviteFriendTwo);
    }

    public ShareTest(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.ShareTest);
        Platform.sdk.Share(info);
    }

    public ShareAddWechatFriend(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.AddWechatFriend);
        Platform.sdk.Share(info);
    }

    private OnAddWechatFriendHandler(mapData: Map<EnumQueryField,string>): void
    {
        // let uin: number = Number(mapData.get(eQueryField.ShareUin));
        // Game.FriendsMgr.AddFriend(uin);
    }

    public ShareBattleVictory(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.BattleVictory);
        Platform.sdk.Share(info);
    }

    public ShareBattleFail(): void
    {
        let info: SdkShareInfo = AntGame.ShareMgrInst.GetShareInfo(EnumShareType.BattleFail);
        Platform.sdk.Share(info);
    }
}
