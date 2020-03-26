//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanStarItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _DragonSpr : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._DragonSpr = this.node.getChildByName("w_DragonSpr");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get DragonSpr() : cc.Node {
		return this._DragonSpr;
	}
	public get root() : cc.Node {
		return this._root;
	}
}