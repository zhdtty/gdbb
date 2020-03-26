//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanTrySkinDialog extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBg : cc.Node;
	private _NodeBgSpriteCom : cc.Sprite;
	private _BtnVideo : cc.Node;
	private _BtnVideoSpriteCom : cc.Sprite;
	private _BtnVideoButtonCom : cc.Button;
	private _BtnClose : cc.Node;
	private _BtnCloseButtonCom : cc.Button;
	private _NodeSkin : cc.Node;
	private _NodeSkinSpriteCom : cc.Sprite;
	private _NodeSkinName : cc.Node;
	private _NodeSkinNameSpriteCom : cc.Sprite;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBg = this.node.getChildByName("w_NodeBg");
		this._NodeBgSpriteCom = this._NodeBg.getComponent("cc.Sprite");
		this._BtnVideo = this.node.getChildByName("w_BtnVideo");
		this._BtnVideoSpriteCom = this._BtnVideo.getComponent("cc.Sprite");
		this._BtnVideoButtonCom = this._BtnVideo.getComponent("cc.Button");
		this._BtnClose = this.node.getChildByName("w_BtnClose");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._NodeSkin = this.node.getChildByName("w_NodeSkin");
		this._NodeSkinSpriteCom = this._NodeSkin.getComponent("cc.Sprite");
		this._NodeSkinName = this.node.getChildByName("w_NodeSkinName");
		this._NodeSkinNameSpriteCom = this._NodeSkinName.getComponent("cc.Sprite");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBg() : cc.Node {
		return this._NodeBg;
	}
	public get NodeBgSpriteCom() : cc.Sprite {
		return this._NodeBgSpriteCom;
	}
	public get BtnVideo() : cc.Node {
		return this._BtnVideo;
	}
	public get BtnVideoSpriteCom() : cc.Sprite {
		return this._BtnVideoSpriteCom;
	}
	public get BtnVideoButtonCom() : cc.Button {
		return this._BtnVideoButtonCom;
	}
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get NodeSkin() : cc.Node {
		return this._NodeSkin;
	}
	public get NodeSkinSpriteCom() : cc.Sprite {
		return this._NodeSkinSpriteCom;
	}
	public get NodeSkinName() : cc.Node {
		return this._NodeSkinName;
	}
	public get NodeSkinNameSpriteCom() : cc.Sprite {
		return this._NodeSkinNameSpriteCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}