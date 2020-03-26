//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanRecordDialogQM extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _btnShareRecord : cc.Node;
	private _btnShareRecordSpriteCom : cc.Sprite;
	private _btnShareRecordButtonCom : cc.Button;
	private _btnNo : cc.Node;
	private _btnNoSpriteCom : cc.Sprite;
	private _btnNoButtonCom : cc.Button;
	private _btnClose : cc.Node;
	private _btnCloseSpriteCom : cc.Sprite;
	private _btnCloseButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._btnShareRecord = this.node.getChildByName("w_btnShareRecord");
		this._btnShareRecordSpriteCom = this._btnShareRecord.getComponent("cc.Sprite");
		this._btnShareRecordButtonCom = this._btnShareRecord.getComponent("cc.Button");
		this._btnNo = this.node.getChildByName("w_btnNo");
		this._btnNoSpriteCom = this._btnNo.getComponent("cc.Sprite");
		this._btnNoButtonCom = this._btnNo.getComponent("cc.Button");
		this._btnClose = this.node.getChildByName("w_btnClose");
		this._btnCloseSpriteCom = this._btnClose.getComponent("cc.Sprite");
		this._btnCloseButtonCom = this._btnClose.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get btnShareRecord() : cc.Node {
		return this._btnShareRecord;
	}
	public get btnShareRecordSpriteCom() : cc.Sprite {
		return this._btnShareRecordSpriteCom;
	}
	public get btnShareRecordButtonCom() : cc.Button {
		return this._btnShareRecordButtonCom;
	}
	public get btnNo() : cc.Node {
		return this._btnNo;
	}
	public get btnNoSpriteCom() : cc.Sprite {
		return this._btnNoSpriteCom;
	}
	public get btnNoButtonCom() : cc.Button {
		return this._btnNoButtonCom;
	}
	public get btnClose() : cc.Node {
		return this._btnClose;
	}
	public get btnCloseSpriteCom() : cc.Sprite {
		return this._btnCloseSpriteCom;
	}
	public get btnCloseButtonCom() : cc.Button {
		return this._btnCloseButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}