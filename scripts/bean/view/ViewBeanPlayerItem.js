//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanPlayerItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _DragonCircle : cc.Node;
	private _NodePlayer : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._DragonCircle = this.node.getChildByName("w_DragonCircle");
		this._NodePlayer = this.node.getChildByName("w_NodePlayer");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get DragonCircle() : cc.Node {
		return this._DragonCircle;
	}
	public get NodePlayer() : cc.Node {
		return this._NodePlayer;
	}
	public get root() : cc.Node {
		return this._root;
	}
}