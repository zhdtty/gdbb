//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanStarGetAni extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeStar : cc.Node;
	private _NodeStarSpriteCom : cc.Sprite;
	private _LbStar : cc.Node;
	private _LbStarLabelCom : cc.Label;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeStar = this.node.getChildByName("layoutNode").getChildByName("startFrame").getChildByName("w_NodeStar");
		this._NodeStarSpriteCom = this._NodeStar.getComponent("cc.Sprite");
		this._LbStar = this.node.getChildByName("layoutNode").getChildByName("w_LbStar");
		this._LbStarLabelCom = this._LbStar.getComponent("cc.Label");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeStar() : cc.Node {
		return this._NodeStar;
	}
	public get NodeStarSpriteCom() : cc.Sprite {
		return this._NodeStarSpriteCom;
	}
	public get LbStar() : cc.Node {
		return this._LbStar;
	}
	public get LbStarLabelCom() : cc.Label {
		return this._LbStarLabelCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}