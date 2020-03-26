//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanGuideFinger extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodePoint : cc.Node;
	private _NodePointSpriteCom : cc.Sprite;
	private _NodeFinger : cc.Node;
	private _NodeFingerSpriteCom : cc.Sprite;
	private _LbDesc : cc.Node;
	private _LbDescLabelCom : cc.Label;
	private _LbTimes : cc.Node;
	private _LbTimesLabelCom : cc.Label;
	private _NodeJumpGuide : cc.Node;
	private _NodeClothesGuide : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodePoint = this.node.getChildByName("w_NodePoint");
		this._NodePointSpriteCom = this._NodePoint.getComponent("cc.Sprite");
		this._NodeFinger = this.node.getChildByName("w_NodeFinger");
		this._NodeFingerSpriteCom = this._NodeFinger.getComponent("cc.Sprite");
		this._LbDesc = this.node.getChildByName("w_NodeJumpGuide").getChildByName("w_LbDesc");
		this._LbDescLabelCom = this._LbDesc.getComponent("cc.Label");
		this._LbTimes = this.node.getChildByName("w_NodeJumpGuide").getChildByName("w_LbTimes");
		this._LbTimesLabelCom = this._LbTimes.getComponent("cc.Label");
		this._NodeJumpGuide = this.node.getChildByName("w_NodeJumpGuide");
		this._NodeClothesGuide = this.node.getChildByName("w_NodeClothesGuide");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodePoint() : cc.Node {
		return this._NodePoint;
	}
	public get NodePointSpriteCom() : cc.Sprite {
		return this._NodePointSpriteCom;
	}
	public get NodeFinger() : cc.Node {
		return this._NodeFinger;
	}
	public get NodeFingerSpriteCom() : cc.Sprite {
		return this._NodeFingerSpriteCom;
	}
	public get LbDesc() : cc.Node {
		return this._LbDesc;
	}
	public get LbDescLabelCom() : cc.Label {
		return this._LbDescLabelCom;
	}
	public get LbTimes() : cc.Node {
		return this._LbTimes;
	}
	public get LbTimesLabelCom() : cc.Label {
		return this._LbTimesLabelCom;
	}
	public get NodeJumpGuide() : cc.Node {
		return this._NodeJumpGuide;
	}
	public get NodeClothesGuide() : cc.Node {
		return this._NodeClothesGuide;
	}
	public get root() : cc.Node {
		return this._root;
	}
}