//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanTimeLimitBtn extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBag : cc.Node;
	private _NodeBagSpriteCom : cc.Sprite;
	private _root : cc.Node;
	private _rootButtonCom : cc.Button;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBag = this.node.getChildByName("w_NodeBag");
		this._NodeBagSpriteCom = this._NodeBag.getComponent("cc.Sprite");
		this._root = this.node;
		this._rootButtonCom = this._root.getComponent("cc.Button");
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBag() : cc.Node {
		return this._NodeBag;
	}
	public get NodeBagSpriteCom() : cc.Sprite {
		return this._NodeBagSpriteCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
	public get rootButtonCom() : cc.Button {
		return this._rootButtonCom;
	}
}