//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanExportPageQY extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBg : cc.Node;
	private _NodeBgSpriteCom : cc.Sprite;
	private _layerAdvTop : cc.Node;
	private _scrollAdvHor : cc.Node;
	private _scrollAdvHorScrollViewCom : cc.ScrollView;
	private _layerAdvBom : cc.Node;
	private _scrollAdvVer : cc.Node;
	private _scrollAdvVerScrollViewCom : cc.ScrollView;
	private _BtnClose : cc.Node;
	private _BtnCloseSpriteCom : cc.Sprite;
	private _BtnCloseButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBg = this.node.getChildByName("w_NodeBg");
		this._NodeBgSpriteCom = this._NodeBg.getComponent("cc.Sprite");
		this._layerAdvTop = this.node.getChildByName("w_scrollAdvHor").getChildByName("view").getChildByName("w_layerAdvTop");
		this._scrollAdvHor = this.node.getChildByName("w_scrollAdvHor");
		this._scrollAdvHorScrollViewCom = this._scrollAdvHor.getComponent("cc.ScrollView");
		this._layerAdvBom = this.node.getChildByName("w_scrollAdvVer").getChildByName("view").getChildByName("w_layerAdvBom");
		this._scrollAdvVer = this.node.getChildByName("w_scrollAdvVer");
		this._scrollAdvVerScrollViewCom = this._scrollAdvVer.getComponent("cc.ScrollView");
		this._BtnClose = this.node.getChildByName("w_BtnClose");
		this._BtnCloseSpriteCom = this._BtnClose.getComponent("cc.Sprite");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBg() : cc.Node {
		return this._NodeBg;
	}
	public get NodeBgSpriteCom() : cc.Sprite {
		return this._NodeBgSpriteCom;
	}
	public get layerAdvTop() : cc.Node {
		return this._layerAdvTop;
	}
	public get scrollAdvHor() : cc.Node {
		return this._scrollAdvHor;
	}
	public get scrollAdvHorScrollViewCom() : cc.ScrollView {
		return this._scrollAdvHorScrollViewCom;
	}
	public get layerAdvBom() : cc.Node {
		return this._layerAdvBom;
	}
	public get scrollAdvVer() : cc.Node {
		return this._scrollAdvVer;
	}
	public get scrollAdvVerScrollViewCom() : cc.ScrollView {
		return this._scrollAdvVerScrollViewCom;
	}
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseSpriteCom() : cc.Sprite {
		return this._BtnCloseSpriteCom;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}