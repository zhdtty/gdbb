import LogicAntDebug from "./LogicAntDebug";
import AntFrame from "../AntFrame"

/**
 * Log
 * 日志系统
 */
export default class Log
{
    private m_viewActive : boolean = false;
    private m_logicAntDebugCom: LogicAntDebug;
    public m_mapLogs: Map<LogLevel,Array<string>>;
    public m_arrLogDetails: Array<LogDetail>;

    constructor()
    {
    }

    public InitWithView(): void
    {
        let antDebugNode: cc.Node = AntFrame.UIMgr.Debug;
        this.m_viewActive = antDebugNode.active;
        antDebugNode = antDebugNode.getChildByName("AntDebug");
        this.m_viewActive = this.m_viewActive && antDebugNode.active;
        if (!this.m_viewActive) return;

        this.m_logicAntDebugCom = antDebugNode.getComponent(LogicAntDebug);
        this.m_logicAntDebugCom.initLog(this);
        this.ShowPingHandler();
    }

    private ShowPingHandler(): void
    {
    }

    public Log(info: string,lv?: LogLevel): void
    {
        if(!lv)
        {
            lv = LogLevel.Debug;
        }
        if(!this.m_mapLogs)
        {
            this.m_mapLogs = new Map<LogLevel,Array<string>>();
        }
        if(!this.m_arrLogDetails)
        {
            this.m_arrLogDetails = new Array<LogDetail>();
        }
        if(!this.m_mapLogs.get(lv))
        {
            this.m_mapLogs.set(lv,new Array<string>());
        }
        this.m_arrLogDetails.push(new LogDetail(info,lv));
        this.m_mapLogs.get(lv).push(info);

        this.refreshView();
    }

    public refreshView() {
        if(!this.m_viewActive) return;

        this.m_logicAntDebugCom.refreshScrollWin();
    }
}

export class LogDetail
{
    public info: string;
    public level: LogLevel;
    public constructor(info: string,lv: LogLevel)
    {
        this.info = info;
        this.level = lv;
    }
}

/**
 * 日志等级
 */
export enum LogLevel
{
    Debug = 1 << 0,
    Info = 1 << 1,
    Warning = 1 << 2,
    Origin = 1 << 3,
    Error = 1 << 4,
}
