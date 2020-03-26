//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanSetting extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _ToggleSound : cc.Node;
	private _BtnClose : cc.Node;
	private _BtnCloseSpriteCom : cc.Sprite;
	private _BtnCloseButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._ToggleSound = this.node.getChildByName("w_ToggleSound");
		this._BtnClose = this.node.getChildByName("w_BtnClose");
		this._BtnCloseSpriteCom = this._BtnClose.getComponent("cc.Sprite");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get ToggleSound() : cc.Node {
		return this._ToggleSound;
	}
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseSpriteCom() : cc.Sprite {
		return this._BtnCloseSpriteCom;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}