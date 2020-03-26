//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanJellySkinItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeSel : cc.Node;
	private _NodeSelSpriteCom : cc.Sprite;
	private _NodeSkin : cc.Node;
	private _NodeSkinSpriteCom : cc.Sprite;
	private _NodeLock : cc.Node;
	private _NodeLockSpriteCom : cc.Sprite;
	private _NodeLockButtonCom : cc.Button;
	private _root : cc.Node;
	private _rootButtonCom : cc.Button;
	private _rootSpriteCom : cc.Sprite;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeSel = this.node.getChildByName("w_NodeSel");
		this._NodeSelSpriteCom = this._NodeSel.getComponent("cc.Sprite");
		this._NodeSkin = this.node.getChildByName("w_NodeSkin");
		this._NodeSkinSpriteCom = this._NodeSkin.getComponent("cc.Sprite");
		this._NodeLock = this.node.getChildByName("w_NodeLock");
		this._NodeLockSpriteCom = this._NodeLock.getComponent("cc.Sprite");
		this._NodeLockButtonCom = this._NodeLock.getComponent("cc.Button");
		this._root = this.node;
		this._rootButtonCom = this._root.getComponent("cc.Button");
		this._rootSpriteCom = this._root.getComponent("cc.Sprite");
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeSel() : cc.Node {
		return this._NodeSel;
	}
	public get NodeSelSpriteCom() : cc.Sprite {
		return this._NodeSelSpriteCom;
	}
	public get NodeSkin() : cc.Node {
		return this._NodeSkin;
	}
	public get NodeSkinSpriteCom() : cc.Sprite {
		return this._NodeSkinSpriteCom;
	}
	public get NodeLock() : cc.Node {
		return this._NodeLock;
	}
	public get NodeLockSpriteCom() : cc.Sprite {
		return this._NodeLockSpriteCom;
	}
	public get NodeLockButtonCom() : cc.Button {
		return this._NodeLockButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
	public get rootButtonCom() : cc.Button {
		return this._rootButtonCom;
	}
	public get rootSpriteCom() : cc.Sprite {
		return this._rootSpriteCom;
	}
}