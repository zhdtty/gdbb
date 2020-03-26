import AntFrame from "../../AntFrame/AntFrame";
import ViewAntDebug from './ViewAntDebug';
import AntLog from './AntLog';
import Log, { LogLevel, LogDetail } from "./Log";
import AntFrameConfig from "../AntFrameConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LogicAntDebug extends cc.Component {
	public view: ViewAntDebug = null;
	public m_iCurrentPage: LogLevel = LogLevel.Debug;
	public m_iCurrentY: number = 0;
	public m_pLog: Log = null;
	private m_stLogList: cc.Node = null;
	private m_stLogTplNode: cc.Node = null;

	onLoad() {
		this.view = this.getComponent(ViewAntDebug);
		this.initClickEvents();
		this.m_stLogTplNode = this.view.nodeLogTpl;
		this.m_stLogList = this.view.content;
		this.view.DebugBtn.active = true;
		this.hide();
	}

	initLog(log: Log) {
		this.m_pLog = log;
	}

	start() {
	}

	onEnable() {
	}

	initClickEvents() {
		AntFrame.OnClick(this.view.DebugBtnButton.node, this.onClickDebugBtn, this);
		AntFrame.OnClick(this.view.btnInfoButton.node, this.onClickBtnInfo, this);
		AntFrame.OnClick(this.view.btnDebugButton.node, this.onClickBtnDebug, this);
		AntFrame.OnClick(this.view.btnWarningButton.node, this.onClickBtnWarning, this);
		AntFrame.OnClick(this.view.btnErrorButton.node, this.onClickBtnError, this);
		AntFrame.OnClick(this.view.btnPingButton.node, this.onClickBtnPing, this);
		AntFrame.OnClick(this.view.ResetButton.node, this.onClickReset, this);
		AntFrame.OnClick(this.view.btnClearButton.node, this.onClickBtnClear, this);
		AntFrame.OnClick(this.view.HideButton.node, this.onClickHide, this);

		AntFrame.OnClick(this.view.buttonGoButton.node, this.onClickButtonGo, this);
		AntFrame.OnClick(this.view.btnBackButton.node, this.onClickBtnBack, this);
		AntFrame.OnClick(this.view.btnSearchButton.node, this.onClickBtnSearch, this);
		AntFrame.OnClick(this.view.btnInfoInMenuButton.node, this.onClickBtnInfoInMenu, this);
		AntFrame.OnClick(this.view.btnEjectButton.node, this.onClickBtnEject, this);
		AntFrame.OnClick(this.view.btnGCButton.node, this.onClickBtnGC, this);
		AntFrame.OnClick(this.view.btnRestartButton.node, this.onClickBtnRestart, this);
		AntFrame.OnClick(this.view.btnNextButton.node, this.onClickBtnNext, this);
		AntFrame.OnClick(this.view.btnPrevButton.node, this.onClickBtnPrev, this);
	}

	onClickDebugBtn() {
		this.show();
		this.refreshScrollWin();
	}

	onClickBtnInfo() {
		AntFrame.UIMgr.ShowToast("info");
		this.refreshScrollWin(LogLevel.Info);
	}

	onClickBtnDebug() {
		AntFrame.UIMgr.ShowToast("debug");
		this.refreshScrollWin(LogLevel.Debug);
	}

	onClickBtnWarning() {
		AntFrame.UIMgr.ShowToast("warning");
		this.refreshScrollWin(LogLevel.Warning);
	}

	onClickBtnError() {
		AntFrame.UIMgr.ShowToast("error");
		this.refreshScrollWin(LogLevel.Error);
	}

	onClickBtnPing() {
		AntFrame.UIMgr.ShowToast("ping");
	}

	onClickReset() {
		AntFrame.UIMgr.ShowToast("reset");
	}

	onClickButtonGo() {
		AntFrame.UIMgr.ShowToast("Go");
	}

	onClickBtnBack() {
		AntFrame.UIMgr.ShowToast("Back");
	}

	onClickBtnSearch() {
		AntFrame.UIMgr.ShowToast("Search");
	}

	onClickBtnEject() {
		AntFrame.UIMgr.ShowToast("Eject");
	}

	onClickBtnInfoInMenu() {
		AntFrame.UIMgr.ShowToast("Info");
	}

	onClickBtnGC() {
		AntFrame.UIMgr.ShowToast("GC");
	}

	onClickBtnRestart() {
		AntFrame.UIMgr.ShowToast("Restart");
	}

	onClickBtnNext() {
		AntFrame.UIMgr.ShowToast("next");
	}

	onClickBtnPrev() {
		AntFrame.UIMgr.ShowToast("prev");
	}

	onClickBtnClear() {
		AntFrame.UIMgr.ShowToast("clear");
        this.m_pLog.m_mapLogs.clear();
        this.m_pLog.m_arrLogDetails.length = 0;
        this.m_stLogList.removeAllChildren();
        this.m_iCurrentY = 0;
        this.refreshScrollWin(this.m_iCurrentPage);
	}

	onClickHide() {
		this.hide();
	}

	show() {
		this.view.DebugView.active = !this.view.DebugView.active;
	}

	hide() {
		this.view.DebugView.active = false;
	}

	clear() {
	}

	refreshScrollWin(lv?: LogLevel) {
		if (!this.view.DebugView.active) {
			return;
		}
		if (lv == undefined || lv == null) {
			lv = LogLevel.Debug;
		}

		if (lv != this.m_iCurrentPage) {
			this.m_stLogList.removeAllChildren();
			this.m_iCurrentY = 0;
			if (lv == LogLevel.Debug) {
				let showList: Array<LogDetail> = this.m_pLog.m_arrLogDetails;
				if (showList) {
					for (let i: number = 0; i < showList.length; i++) {
						let log: cc.Node = cc.instantiate(this.m_stLogTplNode);
						this.setInfo(log, i, showList[i].info, showList[i].level);
						this.m_stLogList.addChild(log);
					}
				}
			}
			else {
				let showList: Array<string> = this.m_pLog.m_mapLogs.get(lv);
				if (showList) {
					for (let i: number = 0; i < showList.length; i++) {
						let log: cc.Node = cc.instantiate(this.m_stLogTplNode);
						this.setInfo(log, i, showList[i], lv);
						this.m_stLogList.addChild(log);
					}
				}
			}
			this.m_iCurrentPage = lv;
		}
		else {
			if (lv == LogLevel.Debug) {
				let showList: Array<LogDetail> = this.m_pLog.m_arrLogDetails;
				if (showList) {
					for (let i: number = this.m_stLogList.childrenCount; i < showList.length; i++) {
						let log: cc.Node = cc.instantiate(this.m_stLogTplNode);
						this.setInfo(log, i, showList[i].info, showList[i].level);
						this.m_stLogList.addChild(log);
					}
				}
			}
			else {
				let showList: Array<string> = this.m_pLog.m_mapLogs.get(lv);
				if (showList) {
					for (let i: number = this.m_stLogList.childrenCount; i < showList.length; i++) {
						let log: cc.Node = cc.instantiate(this.m_stLogTplNode);
						this.setInfo(log, i, showList[i], lv);
						this.m_stLogList.addChild(log);
					}
				}
			}
		}
	}

	private setInfo(log: cc.Node, index: number, info: string, lv: LogLevel) {
		// 设置背景颜色
		let bg: cc.Node = log.getChildByName("Bg");
		bg.color = (index % 2 == 0) ? AntFrameConfig.GGREY_COLOR : AntFrameConfig.GREY_COLOR;
		bg.width = AntFrame.UIMgr.view.node.width;
		// 设置字体颜色
		let text: cc.Node = bg.getChildByName("richtext");
		text.width = AntFrame.UIMgr.view.node.width;
		bg.height = text.height;
		let label: cc.RichText = text.getComponent(cc.RichText);
		label.string = info;

		// 更改位置
		log.y = this.m_iCurrentY;
		this.m_iCurrentY -= text.height;
		this.m_stLogList.height = -this.m_iCurrentY;

		switch (lv) {
			case LogLevel.Info:
				text.color = AntLog.INFO_COLOR;
				break;
			case LogLevel.Warning:
				text.color = AntLog.WARN_COLOR;
				break;
			case LogLevel.Error:
				text.color = AntLog.ERROR_COLOR;
				break;
			case LogLevel.Debug:
				text.color = AntLog.DEBUG_COLOR;
				break;
			default:
				text.color = AntLog.DEBUG_COLOR;
				break;
		}
	}
}