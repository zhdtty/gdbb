//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanReviveDialogQM extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _BtnClose : cc.Node;
	private _BtnCloseSpriteCom : cc.Sprite;
	private _BtnCloseButtonCom : cc.Button;
	private _ProgressBar : cc.Node;
	private _ProgressBarSpriteCom : cc.Sprite;
	private _ProgressBarProgressBarCom : cc.ProgressBar;
	private _BtnRevive : cc.Node;
	private _BtnReviveSpriteCom : cc.Sprite;
	private _BtnReviveButtonCom : cc.Button;
	private _LayoutAdv : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._BtnClose = this.node.getChildByName("w_BtnClose");
		this._BtnCloseSpriteCom = this._BtnClose.getComponent("cc.Sprite");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._ProgressBar = this.node.getChildByName("w_BtnRevive").getChildByName("w_ProgressBar");
		this._ProgressBarSpriteCom = this._ProgressBar.getComponent("cc.Sprite");
		this._ProgressBarProgressBarCom = this._ProgressBar.getComponent("cc.ProgressBar");
		this._BtnRevive = this.node.getChildByName("w_BtnRevive");
		this._BtnReviveSpriteCom = this._BtnRevive.getComponent("cc.Sprite");
		this._BtnReviveButtonCom = this._BtnRevive.getComponent("cc.Button");
		this._LayoutAdv = this.node.getChildByName("nodeAdv").getChildByName("w_LayoutAdv");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseSpriteCom() : cc.Sprite {
		return this._BtnCloseSpriteCom;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get ProgressBar() : cc.Node {
		return this._ProgressBar;
	}
	public get ProgressBarSpriteCom() : cc.Sprite {
		return this._ProgressBarSpriteCom;
	}
	public get ProgressBarProgressBarCom() : cc.ProgressBar {
		return this._ProgressBarProgressBarCom;
	}
	public get BtnRevive() : cc.Node {
		return this._BtnRevive;
	}
	public get BtnReviveSpriteCom() : cc.Sprite {
		return this._BtnReviveSpriteCom;
	}
	public get BtnReviveButtonCom() : cc.Button {
		return this._BtnReviveButtonCom;
	}
	public get LayoutAdv() : cc.Node {
		return this._LayoutAdv;
	}
	public get root() : cc.Node {
		return this._root;
	}
}