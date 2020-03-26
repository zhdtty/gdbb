//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanRank extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _BtnClose : cc.Node;
	private _BtnCloseSpriteCom : cc.Sprite;
	private _BtnCloseButtonCom : cc.Button;
	private _nodeSubContext : cc.Node;
	private _subScrollView : cc.Node;
	private _subScrollViewScrollViewCom : cc.ScrollView;
	private _testButton : cc.Node;
	private _testButtonButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._BtnClose = this.node.getChildByName("content").getChildByName("frame").getChildByName("w_BtnClose");
		this._BtnCloseSpriteCom = this._BtnClose.getComponent("cc.Sprite");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._nodeSubContext = this.node.getChildByName("content").getChildByName("w_subScrollView").getChildByName("view").getChildByName("content").getChildByName("w_nodeSubContext");
		this._subScrollView = this.node.getChildByName("content").getChildByName("w_subScrollView");
		this._subScrollViewScrollViewCom = this._subScrollView.getComponent("cc.ScrollView");
		this._testButton = this.node.getChildByName("content").getChildByName("w_testButton");
		this._testButtonButtonCom = this._testButton.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseSpriteCom() : cc.Sprite {
		return this._BtnCloseSpriteCom;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get nodeSubContext() : cc.Node {
		return this._nodeSubContext;
	}
	public get subScrollView() : cc.Node {
		return this._subScrollView;
	}
	public get subScrollViewScrollViewCom() : cc.ScrollView {
		return this._subScrollViewScrollViewCom;
	}
	public get testButton() : cc.Node {
		return this._testButton;
	}
	public get testButtonButtonCom() : cc.Button {
		return this._testButtonButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}