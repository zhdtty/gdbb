//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
import ViewBeanTplSignItem from "./ViewBeanSignTpl/ViewBeanTplSignItem";
import LogicBeanTplSignItem from "../logic/LogicBeanSignTpl/LogicBeanTplSignItem";

@ccclass
export default class ViewBeanSign extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _btnClose : cc.Node;
	private _btnCloseSpriteCom : cc.Sprite;
	private _btnCloseButtonCom : cc.Button;
	private _nodeSigns : cc.Node;
	private _nodeTip : cc.Node;
	private _btnDraw : cc.Node;
	private _btnDrawButtonCom : cc.Button;
	private _btnShare : cc.Node;
	private _btnShareSpriteCom : cc.Sprite;
	private _btnShareButtonCom : cc.Button;
	private _btnShowVideo : cc.Node;
	private _btnShowVideoSpriteCom : cc.Sprite;
	private _btnShowVideoButtonCom : cc.Button;
	private _nodeButtons : cc.Node;
	private _beanTplSignItem : cc.Node;
	private _root : cc.Node;
	private _rootButtonCom : cc.Button;
    private _ViewBeanTplSignItem : ViewBeanTplSignItem;
    private _LogicBeanTplSignItem : LogicBeanTplSignItem;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._btnClose = this.node.getChildByName("w_btnClose");
		this._btnCloseSpriteCom = this._btnClose.getComponent("cc.Sprite");
		this._btnCloseButtonCom = this._btnClose.getComponent("cc.Button");
		this._nodeSigns = this.node.getChildByName("w_nodeSigns");
		this._nodeTip = this.node.getChildByName("w_nodeTip");
		this._btnDraw = this.node.getChildByName("w_nodeButtons").getChildByName("w_btnDraw");
		this._btnDrawButtonCom = this._btnDraw.getComponent("cc.Button");
		this._btnShare = this.node.getChildByName("w_nodeButtons").getChildByName("w_btnShare");
		this._btnShareSpriteCom = this._btnShare.getComponent("cc.Sprite");
		this._btnShareButtonCom = this._btnShare.getComponent("cc.Button");
		this._btnShowVideo = this.node.getChildByName("w_nodeButtons").getChildByName("w_btnShowVideo");
		this._btnShowVideoSpriteCom = this._btnShowVideo.getComponent("cc.Sprite");
		this._btnShowVideoButtonCom = this._btnShowVideo.getComponent("cc.Button");
		this._nodeButtons = this.node.getChildByName("w_nodeButtons");
		this._beanTplSignItem = this.node.getChildByName("t_beanTplSignItem");
		this._root = this.node;
		this._rootButtonCom = this._root.getComponent("cc.Button");
		this._ViewBeanTplSignItem = this._beanTplSignItem.addComponent(ViewBeanTplSignItem);
		this._LogicBeanTplSignItem = this._beanTplSignItem.addComponent(LogicBeanTplSignItem);
	}

	// antframe auto generate tools : API POINT STUB
	public get btnClose() : cc.Node {
		return this._btnClose;
	}
	public get btnCloseSpriteCom() : cc.Sprite {
		return this._btnCloseSpriteCom;
	}
	public get btnCloseButtonCom() : cc.Button {
		return this._btnCloseButtonCom;
	}
	public get nodeSigns() : cc.Node {
		return this._nodeSigns;
	}
	public get nodeTip() : cc.Node {
		return this._nodeTip;
	}
	public get btnDraw() : cc.Node {
		return this._btnDraw;
	}
	public get btnDrawButtonCom() : cc.Button {
		return this._btnDrawButtonCom;
	}
	public get btnShare() : cc.Node {
		return this._btnShare;
	}
	public get btnShareSpriteCom() : cc.Sprite {
		return this._btnShareSpriteCom;
	}
	public get btnShareButtonCom() : cc.Button {
		return this._btnShareButtonCom;
	}
	public get btnShowVideo() : cc.Node {
		return this._btnShowVideo;
	}
	public get btnShowVideoSpriteCom() : cc.Sprite {
		return this._btnShowVideoSpriteCom;
	}
	public get btnShowVideoButtonCom() : cc.Button {
		return this._btnShowVideoButtonCom;
	}
	public get nodeButtons() : cc.Node {
		return this._nodeButtons;
	}
	public get beanTplSignItem() : cc.Node {
		return this._beanTplSignItem;
	}
	public get root() : cc.Node {
		return this._root;
	}
	public get rootButtonCom() : cc.Button {
		return this._rootButtonCom;
	}
	public get ViewBeanTplSignItem() : ViewBeanTplSignItem {
		return this._ViewBeanTplSignItem;
	}

	public get LogicBeanTplSignItem() : LogicBeanTplSignItem {
		return this._LogicBeanTplSignItem;
	}

}