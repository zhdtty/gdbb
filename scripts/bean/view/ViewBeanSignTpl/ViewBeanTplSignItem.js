//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanTplSignItem extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _lblDay : cc.Node;
	private _lblDayLabelCom : cc.Label;
	private _iconReward : cc.Node;
	private _iconRewardSpriteCom : cc.Sprite;
	private _lblRwd : cc.Node;
	private _lblRwdLabelCom : cc.Label;
	private _iconDrawMask : cc.Node;
	private _iconDrawMaskSpriteCom : cc.Sprite;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._lblDay = this.node.getChildByName("w_lblDay");
		this._lblDayLabelCom = this._lblDay.getComponent("cc.Label");
		this._iconReward = this.node.getChildByName("w_iconReward");
		this._iconRewardSpriteCom = this._iconReward.getComponent("cc.Sprite");
		this._lblRwd = this.node.getChildByName("w_lblRwd");
		this._lblRwdLabelCom = this._lblRwd.getComponent("cc.Label");
		this._iconDrawMask = this.node.getChildByName("w_iconDrawMask");
		this._iconDrawMaskSpriteCom = this._iconDrawMask.getComponent("cc.Sprite");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get lblDay() : cc.Node {
		return this._lblDay;
	}
	public get lblDayLabelCom() : cc.Label {
		return this._lblDayLabelCom;
	}
	public get iconReward() : cc.Node {
		return this._iconReward;
	}
	public get iconRewardSpriteCom() : cc.Sprite {
		return this._iconRewardSpriteCom;
	}
	public get lblRwd() : cc.Node {
		return this._lblRwd;
	}
	public get lblRwdLabelCom() : cc.Label {
		return this._lblRwdLabelCom;
	}
	public get iconDrawMask() : cc.Node {
		return this._iconDrawMask;
	}
	public get iconDrawMaskSpriteCom() : cc.Sprite {
		return this._iconDrawMaskSpriteCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}