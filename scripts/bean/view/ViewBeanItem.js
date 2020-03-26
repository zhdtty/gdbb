//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBoard : cc.Node;
	private _NodeBoardSpriteCom : cc.Sprite;
	private _NodeBean : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBoard = this.node.getChildByName("w_NodeBoard");
		this._NodeBoardSpriteCom = this._NodeBoard.getComponent("cc.Sprite");
		this._NodeBean = this.node.getChildByName("w_NodeBean");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBoard() : cc.Node {
		return this._NodeBoard;
	}
	public get NodeBoardSpriteCom() : cc.Sprite {
		return this._NodeBoardSpriteCom;
	}
	public get NodeBean() : cc.Node {
		return this._NodeBean;
	}
	public get root() : cc.Node {
		return this._root;
	}
}