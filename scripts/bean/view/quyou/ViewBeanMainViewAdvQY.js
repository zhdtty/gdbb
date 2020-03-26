//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanMainViewAdvQY extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeLeft1 : cc.Node;
	private _NodeLeft2 : cc.Node;
	private _NodeRight1 : cc.Node;
	private _NodeRight2 : cc.Node;
	private _NodeAdvTop : cc.Node;
	private _scrollviewHor : cc.Node;
	private _scrollviewHorSpriteCom : cc.Sprite;
	private _scrollviewHorScrollViewCom : cc.ScrollView;
	private _NodeAdvBtm : cc.Node;
	private _NodeMoreLayout : cc.Node;
	private _scrollViewVer : cc.Node;
	private _scrollViewVerSpriteCom : cc.Sprite;
	private _scrollViewVerScrollViewCom : cc.ScrollView;
	private _NodeAdvMoreView : cc.Node;
	private _NodeAdvMoreViewSpriteCom : cc.Sprite;
	private _NodeAdvMore : cc.Node;
	private _NodeAdvMoreSpriteCom : cc.Sprite;
	private _NodeAdvMoreButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeLeft1 = this.node.getChildByName("w_NodeAdvTop").getChildByName("adv_bg_icon1").getChildByName("w_NodeLeft1");
		this._NodeLeft2 = this.node.getChildByName("w_NodeAdvTop").getChildByName("adv_bg_icon2").getChildByName("w_NodeLeft2");
		this._NodeRight1 = this.node.getChildByName("w_NodeAdvTop").getChildByName("adv_bg_icon3").getChildByName("w_NodeRight1");
		this._NodeRight2 = this.node.getChildByName("w_NodeAdvTop").getChildByName("adv_bg_icon4").getChildByName("w_NodeRight2");
		this._NodeAdvTop = this.node.getChildByName("w_NodeAdvTop");
		this._scrollviewHor = this.node.getChildByName("w_NodeAdvBtm").getChildByName("w_scrollviewHor");
		this._scrollviewHorSpriteCom = this._scrollviewHor.getComponent("cc.Sprite");
		this._scrollviewHorScrollViewCom = this._scrollviewHor.getComponent("cc.ScrollView");
		this._NodeAdvBtm = this.node.getChildByName("w_NodeAdvBtm");
		this._NodeMoreLayout = this.node.getChildByName("w_NodeAdvMore").getChildByName("w_NodeAdvMoreView").getChildByName("w_scrollViewVer").getChildByName("view").getChildByName("w_NodeMoreLayout");
		this._scrollViewVer = this.node.getChildByName("w_NodeAdvMore").getChildByName("w_NodeAdvMoreView").getChildByName("w_scrollViewVer");
		this._scrollViewVerSpriteCom = this._scrollViewVer.getComponent("cc.Sprite");
		this._scrollViewVerScrollViewCom = this._scrollViewVer.getComponent("cc.ScrollView");
		this._NodeAdvMoreView = this.node.getChildByName("w_NodeAdvMore").getChildByName("w_NodeAdvMoreView");
		this._NodeAdvMoreViewSpriteCom = this._NodeAdvMoreView.getComponent("cc.Sprite");
		this._NodeAdvMore = this.node.getChildByName("w_NodeAdvMore");
		this._NodeAdvMoreSpriteCom = this._NodeAdvMore.getComponent("cc.Sprite");
		this._NodeAdvMoreButtonCom = this._NodeAdvMore.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeLeft1() : cc.Node {
		return this._NodeLeft1;
	}
	public get NodeLeft2() : cc.Node {
		return this._NodeLeft2;
	}
	public get NodeRight1() : cc.Node {
		return this._NodeRight1;
	}
	public get NodeRight2() : cc.Node {
		return this._NodeRight2;
	}
	public get NodeAdvTop() : cc.Node {
		return this._NodeAdvTop;
	}
	public get scrollviewHor() : cc.Node {
		return this._scrollviewHor;
	}
	public get scrollviewHorSpriteCom() : cc.Sprite {
		return this._scrollviewHorSpriteCom;
	}
	public get scrollviewHorScrollViewCom() : cc.ScrollView {
		return this._scrollviewHorScrollViewCom;
	}
	public get NodeAdvBtm() : cc.Node {
		return this._NodeAdvBtm;
	}
	public get NodeMoreLayout() : cc.Node {
		return this._NodeMoreLayout;
	}
	public get scrollViewVer() : cc.Node {
		return this._scrollViewVer;
	}
	public get scrollViewVerSpriteCom() : cc.Sprite {
		return this._scrollViewVerSpriteCom;
	}
	public get scrollViewVerScrollViewCom() : cc.ScrollView {
		return this._scrollViewVerScrollViewCom;
	}
	public get NodeAdvMoreView() : cc.Node {
		return this._NodeAdvMoreView;
	}
	public get NodeAdvMoreViewSpriteCom() : cc.Sprite {
		return this._NodeAdvMoreViewSpriteCom;
	}
	public get NodeAdvMore() : cc.Node {
		return this._NodeAdvMore;
	}
	public get NodeAdvMoreSpriteCom() : cc.Sprite {
		return this._NodeAdvMoreSpriteCom;
	}
	public get NodeAdvMoreButtonCom() : cc.Button {
		return this._NodeAdvMoreButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}