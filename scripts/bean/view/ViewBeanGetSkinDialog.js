//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanGetSkinDialog extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _DragonGift : cc.Node;
	private _DragonGiftButtonCom : cc.Button;
	private _DragonBg : cc.Node;
	private _DragonCd : cc.Node;
	private _LbDesc : cc.Node;
	private _LbDescLabelCom : cc.Label;
	private _BtnGet : cc.Node;
	private _BtnGetSpriteCom : cc.Sprite;
	private _BtnGetButtonCom : cc.Button;
	private _BtnRefuse : cc.Node;
	private _BtnRefuseButtonCom : cc.Button;
	private _BtnClose : cc.Node;
	private _BtnCloseButtonCom : cc.Button;
	private _NodeVideoSee : cc.Node;
	private _NodeRand : cc.Node;
	private _NodeSkin : cc.Node;
	private _NodeSkinSpriteCom : cc.Sprite;
	private _NodeSkinName : cc.Node;
	private _NodeSkinNameSpriteCom : cc.Sprite;
	private _NodeAniSkin : cc.Node;
	private _NodeAniSkinSpriteCom : cc.Sprite;
	private _NodeShowSkin : cc.Node;
	private _NodeDouyinTitle : cc.Node;
	private _NodeDouyinTitleSpriteCom : cc.Sprite;
	private _NodeGet : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._DragonGift = this.node.getChildByName("w_DragonGift");
		this._DragonGiftButtonCom = this._DragonGift.getComponent("cc.Button");
		this._DragonBg = this.node.getChildByName("w_NodeGet").getChildByName("w_DragonBg");
		this._DragonCd = this.node.getChildByName("w_NodeGet").getChildByName("w_DragonCd");
		this._LbDesc = this.node.getChildByName("w_NodeGet").getChildByName("bg_settlement_004").getChildByName("w_LbDesc");
		this._LbDescLabelCom = this._LbDesc.getComponent("cc.Label");
		this._BtnGet = this.node.getChildByName("w_NodeGet").getChildByName("w_BtnGet");
		this._BtnGetSpriteCom = this._BtnGet.getComponent("cc.Sprite");
		this._BtnGetButtonCom = this._BtnGet.getComponent("cc.Button");
		this._BtnRefuse = this.node.getChildByName("w_NodeGet").getChildByName("w_BtnRefuse");
		this._BtnRefuseButtonCom = this._BtnRefuse.getComponent("cc.Button");
		this._BtnClose = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeVideoSee").getChildByName("w_BtnClose");
		this._BtnCloseButtonCom = this._BtnClose.getComponent("cc.Button");
		this._NodeVideoSee = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeVideoSee");
		this._NodeRand = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeRand");
		this._NodeSkin = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeShowSkin").getChildByName("w_NodeSkin");
		this._NodeSkinSpriteCom = this._NodeSkin.getComponent("cc.Sprite");
		this._NodeSkinName = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeShowSkin").getChildByName("skinNameNode").getChildByName("w_NodeSkinName");
		this._NodeSkinNameSpriteCom = this._NodeSkinName.getComponent("cc.Sprite");
		this._NodeAniSkin = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeShowSkin").getChildByName("w_NodeAniSkin");
		this._NodeAniSkinSpriteCom = this._NodeAniSkin.getComponent("cc.Sprite");
		this._NodeShowSkin = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeShowSkin");
		this._NodeDouyinTitle = this.node.getChildByName("w_NodeGet").getChildByName("w_NodeDouyinTitle");
		this._NodeDouyinTitleSpriteCom = this._NodeDouyinTitle.getComponent("cc.Sprite");
		this._NodeGet = this.node.getChildByName("w_NodeGet");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get DragonGift() : cc.Node {
		return this._DragonGift;
	}
	public get DragonGiftButtonCom() : cc.Button {
		return this._DragonGiftButtonCom;
	}
	public get DragonBg() : cc.Node {
		return this._DragonBg;
	}
	public get DragonCd() : cc.Node {
		return this._DragonCd;
	}
	public get LbDesc() : cc.Node {
		return this._LbDesc;
	}
	public get LbDescLabelCom() : cc.Label {
		return this._LbDescLabelCom;
	}
	public get BtnGet() : cc.Node {
		return this._BtnGet;
	}
	public get BtnGetSpriteCom() : cc.Sprite {
		return this._BtnGetSpriteCom;
	}
	public get BtnGetButtonCom() : cc.Button {
		return this._BtnGetButtonCom;
	}
	public get BtnRefuse() : cc.Node {
		return this._BtnRefuse;
	}
	public get BtnRefuseButtonCom() : cc.Button {
		return this._BtnRefuseButtonCom;
	}
	public get BtnClose() : cc.Node {
		return this._BtnClose;
	}
	public get BtnCloseButtonCom() : cc.Button {
		return this._BtnCloseButtonCom;
	}
	public get NodeVideoSee() : cc.Node {
		return this._NodeVideoSee;
	}
	public get NodeRand() : cc.Node {
		return this._NodeRand;
	}
	public get NodeSkin() : cc.Node {
		return this._NodeSkin;
	}
	public get NodeSkinSpriteCom() : cc.Sprite {
		return this._NodeSkinSpriteCom;
	}
	public get NodeSkinName() : cc.Node {
		return this._NodeSkinName;
	}
	public get NodeSkinNameSpriteCom() : cc.Sprite {
		return this._NodeSkinNameSpriteCom;
	}
	public get NodeAniSkin() : cc.Node {
		return this._NodeAniSkin;
	}
	public get NodeAniSkinSpriteCom() : cc.Sprite {
		return this._NodeAniSkinSpriteCom;
	}
	public get NodeShowSkin() : cc.Node {
		return this._NodeShowSkin;
	}
	public get NodeDouyinTitle() : cc.Node {
		return this._NodeDouyinTitle;
	}
	public get NodeDouyinTitleSpriteCom() : cc.Sprite {
		return this._NodeDouyinTitleSpriteCom;
	}
	public get NodeGet() : cc.Node {
		return this._NodeGet;
	}
	public get root() : cc.Node {
		return this._root;
	}
}