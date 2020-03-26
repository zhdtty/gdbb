//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanScoreItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _LbScore : cc.Node;
	private _LbScoreLabelCom : cc.Label;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._LbScore = this.node.getChildByName("w_LbScore");
		this._LbScoreLabelCom = this._LbScore.getComponent("cc.Label");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get LbScore() : cc.Node {
		return this._LbScore;
	}
	public get LbScoreLabelCom() : cc.Label {
		return this._LbScoreLabelCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}