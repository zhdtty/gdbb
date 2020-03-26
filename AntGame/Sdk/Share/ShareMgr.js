import AntLog from "../../../AntFrame/Log/AntLog";
import { SdkShareInfo } from "../../../AntFrame/Platform/AntPlatformDefine";

export enum EnumShareType {
    ShareMenu = 1,
    ShareTest,
    InviteTeam,
    ActivityInviteFriendOne,
    ActivityInviteFriendTwo,
    ActivityHaggle,
    GroupRank,
    ShareAchievement,
    ShareBalance,
    WeeklyReport,
    AddWechatFriend,
    BattleVictory,
    BattleFail,
}

export enum EnumQueryField
{
    ShareGame = "share_game",
    ShareType = "share_type",
    ShareUin = "share_uin",
    ShareTicket = "share_ticket",
    TeamID = "team_id",
    GroupID = "group_id",
    GameMode = "game_mode",
    ImgId = "img_id",
    ChannelID = "channel",
    CustomStr = "custom_str",
}

export class ShareMgr
{
    private m_mapShareInfo: Map<number,Array<SdkShareInfo>>;
    private m_mapCallback: Map<number,Function>;

    constructor()
    {
        AntLog.Info("ShareMgr constructor");
        this.m_mapShareInfo = new Map<number,Array<SdkShareInfo>>();
        this.m_mapCallback = new Map<number,Function>();
    }

    public BindQuery(id: number, callback: Function): void
    {
        this.m_mapCallback.set(id, callback);
    }

    /**
     * 添加图片分享的配置
     * @param type 分享的类型
     * @param arrInfo 分享的描述
     */
    public AddShareConfig(type: number, arrInfo: Array<SdkShareInfo>): void
    {
        if(this.m_mapShareInfo.get(type))
        {
            AntLog.Error("重复添加ShareInfo + " + type);
            return;
        }
        this.m_mapShareInfo.set(type, arrInfo);
        AntLog.Info("AddShareConfig type: ", type, "data:", arrInfo);
    }

    /**
     * 根据type、id获取主动分享的ShareInfo
     * @param type 分享的类型
     * @param id 当id为-1时，获取的是随机的分享信息
     */
    public GetShareInfo(type: number,id: number = -1): SdkShareInfo
    {
        if(!this.m_mapShareInfo.has(type))
        {
            AntLog.Error(`没有对应类型为${type}主动分享的配置`);
            return;
        }
        let info: SdkShareInfo = this._FindShareInfo(this.m_mapShareInfo.get(type),id,type);
        info.type = type;
        return info;
    }

    /**
     * 查找对应的shareInfo
     * @param arrInfo
     * @param id  当id为-1时，获取的是随机的分享信息
     * @param type 默认转发分享为1
     */
    private _FindShareInfo(arrInfo: Array<SdkShareInfo>,id: number,type: number = 1): SdkShareInfo
    {
        let info = new SdkShareInfo();
        let len = arrInfo.length;
        // if(len == 0)
        // {
        //     //什么都没有就返回一个默认的
        //     console.warn("没有找到对应的分享信息，id：",id);
        //     info = new ShareInfo();
        // }

        if(-1 == id)
        {
            let index = (Math.random() * arrInfo.length) >> 0;
            info.gameScene = arrInfo[index].gameScene;
            info.title = arrInfo[index].title;
            info.imageUrl = arrInfo[index].imageUrl;
        }
        else
        {
            for(let i = 0;i < len;++i)
            {
                if(arrInfo[i].id == id)
                {
                    info.gameScene = arrInfo[i].gameScene;
                    info.title = arrInfo[i].title;
                    info.imageUrl = arrInfo[i].imageUrl;
                }
            }
            //没找到分享信息
            if(!info)
            {
                console.warn("没有找到对应的分享信息，id：",id);
                info.gameScene = arrInfo[0].gameScene;
                info.title = arrInfo[0].title;
                info.imageUrl = arrInfo[0].imageUrl;
            }
        }
        info.Clear();
        info.AddQuery(EnumQueryField.ShareType, type.toString());
        info.AddQuery(EnumQueryField.ShareUin, 1);//Core.Uin);
        info.AddQuery(EnumQueryField.GroupID, 1);//CoreConfig.GROUP_ID);
        info.AddQuery(EnumQueryField.ShareGame, 1001);
        return info;
    }
    /**
     * 更新查询参数
     * @param query
     */
    public UpdateQuery(mapData: Map<string,string>): void
    {
        if(mapData.has(EnumQueryField.ShareType))
        {
            let shareID: number = Number(mapData.get(EnumQueryField.ShareType));
            if(this.m_mapCallback.has(shareID))
            {
                let callback: Function = this.m_mapCallback.get(shareID);
                callback(mapData);
            }
            else
            {
                console.log("没有绑定相关的查询,查询条件：",mapData);
            }
        }
    }
}
