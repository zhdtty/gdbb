//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanRewardLine extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeLine : cc.Node;
	private _NodeLineSpriteCom : cc.Sprite;
	private _LbScore : cc.Node;
	private _LbScoreLabelCom : cc.Label;
	private _NodeLine : cc.Node;
	private _DragonLine : cc.Node;
	private _DragonBomb : cc.Node;
	private _DragonStarBomb : cc.Node;
	private _NodeStar : cc.Node;
	private _NodeStarSpriteCom : cc.Sprite;
	private _LbStar : cc.Node;
	private _LbStarLabelCom : cc.Label;
	private _NodeGet : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeLine = this.node.getChildByName("w_NodeLine").getChildByName("w_NodeLine");
		this._NodeLineSpriteCom = this._NodeLine.getComponent("cc.Sprite");
		this._LbScore = this.node.getChildByName("w_NodeLine").getChildByName("w_LbScore");
		this._LbScoreLabelCom = this._LbScore.getComponent("cc.Label");
		this._NodeLine = this.node.getChildByName("w_NodeLine");
		this._DragonLine = this.node.getChildByName("w_DragonLine");
		this._DragonBomb = this.node.getChildByName("w_DragonBomb");
		this._DragonStarBomb = this.node.getChildByName("w_DragonStarBomb");
		this._NodeStar = this.node.getChildByName("w_NodeGet").getChildByName("startFrame").getChildByName("w_NodeStar");
		this._NodeStarSpriteCom = this._NodeStar.getComponent("cc.Sprite");
		this._LbStar = this.node.getChildByName("w_NodeGet").getChildByName("w_LbStar");
		this._LbStarLabelCom = this._LbStar.getComponent("cc.Label");
		this._NodeGet = this.node.getChildByName("w_NodeGet");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeLine() : cc.Node {
		return this._NodeLine;
	}
	public get NodeLineSpriteCom() : cc.Sprite {
		return this._NodeLineSpriteCom;
	}
	public get LbScore() : cc.Node {
		return this._LbScore;
	}
	public get LbScoreLabelCom() : cc.Label {
		return this._LbScoreLabelCom;
	}
	public get NodeLine() : cc.Node {
		return this._NodeLine;
	}
	public get DragonLine() : cc.Node {
		return this._DragonLine;
	}
	public get DragonBomb() : cc.Node {
		return this._DragonBomb;
	}
	public get DragonStarBomb() : cc.Node {
		return this._DragonStarBomb;
	}
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
	public get NodeGet() : cc.Node {
		return this._NodeGet;
	}
	public get root() : cc.Node {
		return this._root;
	}
}