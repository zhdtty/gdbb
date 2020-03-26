//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanClothesView extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _BtnJelly : cc.Node;
	private _BtnJellyButtonCom : cc.Button;
	private _BtnClothes : cc.Node;
	private _BtnClothesButtonCom : cc.Button;
	private _BtnJellyRand : cc.Node;
	private _BtnJellyRandButtonCom : cc.Button;
	private _BtnJellyRandSpriteCom : cc.Sprite;
	private _PageJelly1 : cc.Node;
	private _PageJelly2 : cc.Node;
	private _pageviewJelly : cc.Node;
	private _BtnRand : cc.Node;
	private _BtnRandButtonCom : cc.Button;
	private _BtnRandSpriteCom : cc.Sprite;
	private _PagePlayer1 : cc.Node;
	private _PagePlayer2 : cc.Node;
	private _pageviewClothes : cc.Node;
	private _pageArrowRight : cc.Node;
	private _pageArrowRightSpriteCom : cc.Sprite;
	private _pageArrowRightButtonCom : cc.Button;
	private _pageArrowLeft : cc.Node;
	private _pageArrowLeftSpriteCom : cc.Sprite;
	private _pageArrowLeftButtonCom : cc.Button;
	private _NodeBuySkin : cc.Node;
	private _NodeBuySkinSpriteCom : cc.Sprite;
	private _NodeBuySkinName : cc.Node;
	private _NodeBuySkinNameSpriteCom : cc.Sprite;
	private _BtnCloseBuy : cc.Node;
	private _BtnCloseBuySpriteCom : cc.Sprite;
	private _BtnCloseBuyButtonCom : cc.Button;
	private _LbGetDesc : cc.Node;
	private _LbGetDescLabelCom : cc.Label;
	private _nodeProgress : cc.Node;
	private _nodeProgressSpriteCom : cc.Sprite;
	private _nodeProgressProgressBarCom : cc.ProgressBar;
	private _LbPgVal : cc.Node;
	private _LbPgValLabelCom : cc.Label;
	private _NodePgMain : cc.Node;
	private _LbSaleOffCost : cc.Node;
	private _LbSaleOffCostLabelCom : cc.Label;
	private _LbRebate : cc.Node;
	private _LbRebateLabelCom : cc.Label;
	private _BtnSaleOffBuy : cc.Node;
	private _BtnSaleOffBuySpriteCom : cc.Sprite;
	private _BtnSaleOffBuyButtonCom : cc.Button;
	private _LbCost : cc.Node;
	private _LbCostLabelCom : cc.Label;
	private _BtnBuy : cc.Node;
	private _BtnBuySpriteCom : cc.Sprite;
	private _BtnBuyButtonCom : cc.Button;
	private _NodeCostBuy : cc.Node;
	private _BtnGet : cc.Node;
	private _BtnGetSpriteCom : cc.Sprite;
	private _BtnGetButtonCom : cc.Button;
	private _NodeSel : cc.Node;
	private _NodeSelSpriteCom : cc.Sprite;
	private _NodeBg : cc.Node;
	private _NodeBgSpriteCom : cc.Sprite;
	private _btnClose : cc.Node;
	private _btnCloseSpriteCom : cc.Sprite;
	private _btnCloseButtonCom : cc.Button;
	private _NodeSkinName : cc.Node;
	private _NodeSkinNameSpriteCom : cc.Sprite;
	private _NodeSkinNameBg : cc.Node;
	private _NodeSkinNameBgSpriteCom : cc.Sprite;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._BtnJelly = this.node.getChildByName("w_NodeBg").getChildByName("w_BtnJelly");
		this._BtnJellyButtonCom = this._BtnJelly.getComponent("cc.Button");
		this._BtnClothes = this.node.getChildByName("w_NodeBg").getChildByName("w_BtnClothes");
		this._BtnClothesButtonCom = this._BtnClothes.getComponent("cc.Button");
		this._BtnJellyRand = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewJelly").getChildByName("view").getChildByName("content").getChildByName("w_PageJelly1").getChildByName("w_BtnJellyRand");
		this._BtnJellyRandButtonCom = this._BtnJellyRand.getComponent("cc.Button");
		this._BtnJellyRandSpriteCom = this._BtnJellyRand.getComponent("cc.Sprite");
		this._PageJelly1 = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewJelly").getChildByName("view").getChildByName("content").getChildByName("w_PageJelly1");
		this._PageJelly2 = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewJelly").getChildByName("view").getChildByName("content").getChildByName("w_PageJelly2");
		this._pageviewJelly = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewJelly");
		this._BtnRand = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewClothes").getChildByName("view").getChildByName("content").getChildByName("w_PagePlayer1").getChildByName("w_BtnRand");
		this._BtnRandButtonCom = this._BtnRand.getComponent("cc.Button");
		this._BtnRandSpriteCom = this._BtnRand.getComponent("cc.Sprite");
		this._PagePlayer1 = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewClothes").getChildByName("view").getChildByName("content").getChildByName("w_PagePlayer1");
		this._PagePlayer2 = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewClothes").getChildByName("view").getChildByName("content").getChildByName("w_PagePlayer2");
		this._pageviewClothes = this.node.getChildByName("w_NodeBg").getChildByName("w_pageviewClothes");
		this._pageArrowRight = this.node.getChildByName("w_NodeBg").getChildByName("w_pageArrowRight");
		this._pageArrowRightSpriteCom = this._pageArrowRight.getComponent("cc.Sprite");
		this._pageArrowRightButtonCom = this._pageArrowRight.getComponent("cc.Button");
		this._pageArrowLeft = this.node.getChildByName("w_NodeBg").getChildByName("w_pageArrowLeft");
		this._pageArrowLeftSpriteCom = this._pageArrowLeft.getComponent("cc.Sprite");
		this._pageArrowLeftButtonCom = this._pageArrowLeft.getComponent("cc.Button");
		this._NodeBuySkin = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeBuySkin");
		this._NodeBuySkinSpriteCom = this._NodeBuySkin.getComponent("cc.Sprite");
		this._NodeBuySkinName = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeBuySkinName");
		this._NodeBuySkinNameSpriteCom = this._NodeBuySkinName.getComponent("cc.Sprite");
		this._BtnCloseBuy = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_BtnCloseBuy");
		this._BtnCloseBuySpriteCom = this._BtnCloseBuy.getComponent("cc.Sprite");
		this._BtnCloseBuyButtonCom = this._BtnCloseBuy.getComponent("cc.Button");
		this._LbGetDesc = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("midDescLayout").getChildByName("w_LbGetDesc");
		this._LbGetDescLabelCom = this._LbGetDesc.getComponent("cc.Label");
		this._nodeProgress = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("midDescLayout").getChildByName("w_NodePgMain").getChildByName("w_nodeProgress");
		this._nodeProgressSpriteCom = this._nodeProgress.getComponent("cc.Sprite");
		this._nodeProgressProgressBarCom = this._nodeProgress.getComponent("cc.ProgressBar");
		this._LbPgVal = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("midDescLayout").getChildByName("w_NodePgMain").getChildByName("w_LbPgVal");
		this._LbPgValLabelCom = this._LbPgVal.getComponent("cc.Label");
		this._NodePgMain = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("midDescLayout").getChildByName("w_NodePgMain");
		this._LbSaleOffCost = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy").getChildByName("w_BtnSaleOffBuy").getChildByName("layout").getChildByName("w_LbSaleOffCost");
		this._LbSaleOffCostLabelCom = this._LbSaleOffCost.getComponent("cc.Label");
		this._LbRebate = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy").getChildByName("w_BtnSaleOffBuy").getChildByName("bg_skin_003").getChildByName("w_LbRebate");
		this._LbRebateLabelCom = this._LbRebate.getComponent("cc.Label");
		this._BtnSaleOffBuy = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy").getChildByName("w_BtnSaleOffBuy");
		this._BtnSaleOffBuySpriteCom = this._BtnSaleOffBuy.getComponent("cc.Sprite");
		this._BtnSaleOffBuyButtonCom = this._BtnSaleOffBuy.getComponent("cc.Button");
		this._LbCost = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy").getChildByName("w_BtnBuy").getChildByName("layout").getChildByName("w_LbCost");
		this._LbCostLabelCom = this._LbCost.getComponent("cc.Label");
		this._BtnBuy = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy").getChildByName("w_BtnBuy");
		this._BtnBuySpriteCom = this._BtnBuy.getComponent("cc.Sprite");
		this._BtnBuyButtonCom = this._BtnBuy.getComponent("cc.Button");
		this._NodeCostBuy = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_NodeCostBuy");
		this._BtnGet = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel").getChildByName("bg_skin_007").getChildByName("w_BtnGet");
		this._BtnGetSpriteCom = this._BtnGet.getComponent("cc.Sprite");
		this._BtnGetButtonCom = this._BtnGet.getComponent("cc.Button");
		this._NodeSel = this.node.getChildByName("w_NodeBg").getChildByName("w_NodeSel");
		this._NodeSelSpriteCom = this._NodeSel.getComponent("cc.Sprite");
		this._NodeBg = this.node.getChildByName("w_NodeBg");
		this._NodeBgSpriteCom = this._NodeBg.getComponent("cc.Sprite");
		this._btnClose = this.node.getChildByName("w_btnClose");
		this._btnCloseSpriteCom = this._btnClose.getComponent("cc.Sprite");
		this._btnCloseButtonCom = this._btnClose.getComponent("cc.Button");
		this._NodeSkinName = this.node.getChildByName("w_NodeSkinNameBg").getChildByName("w_NodeSkinName");
		this._NodeSkinNameSpriteCom = this._NodeSkinName.getComponent("cc.Sprite");
		this._NodeSkinNameBg = this.node.getChildByName("w_NodeSkinNameBg");
		this._NodeSkinNameBgSpriteCom = this._NodeSkinNameBg.getComponent("cc.Sprite");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get BtnJelly() : cc.Node {
		return this._BtnJelly;
	}
	public get BtnJellyButtonCom() : cc.Button {
		return this._BtnJellyButtonCom;
	}
	public get BtnClothes() : cc.Node {
		return this._BtnClothes;
	}
	public get BtnClothesButtonCom() : cc.Button {
		return this._BtnClothesButtonCom;
	}
	public get BtnJellyRand() : cc.Node {
		return this._BtnJellyRand;
	}
	public get BtnJellyRandButtonCom() : cc.Button {
		return this._BtnJellyRandButtonCom;
	}
	public get BtnJellyRandSpriteCom() : cc.Sprite {
		return this._BtnJellyRandSpriteCom;
	}
	public get PageJelly1() : cc.Node {
		return this._PageJelly1;
	}
	public get PageJelly2() : cc.Node {
		return this._PageJelly2;
	}
	public get pageviewJelly() : cc.Node {
		return this._pageviewJelly;
	}
	public get BtnRand() : cc.Node {
		return this._BtnRand;
	}
	public get BtnRandButtonCom() : cc.Button {
		return this._BtnRandButtonCom;
	}
	public get BtnRandSpriteCom() : cc.Sprite {
		return this._BtnRandSpriteCom;
	}
	public get PagePlayer1() : cc.Node {
		return this._PagePlayer1;
	}
	public get PagePlayer2() : cc.Node {
		return this._PagePlayer2;
	}
	public get pageviewClothes() : cc.Node {
		return this._pageviewClothes;
	}
	public get pageArrowRight() : cc.Node {
		return this._pageArrowRight;
	}
	public get pageArrowRightSpriteCom() : cc.Sprite {
		return this._pageArrowRightSpriteCom;
	}
	public get pageArrowRightButtonCom() : cc.Button {
		return this._pageArrowRightButtonCom;
	}
	public get pageArrowLeft() : cc.Node {
		return this._pageArrowLeft;
	}
	public get pageArrowLeftSpriteCom() : cc.Sprite {
		return this._pageArrowLeftSpriteCom;
	}
	public get pageArrowLeftButtonCom() : cc.Button {
		return this._pageArrowLeftButtonCom;
	}
	public get NodeBuySkin() : cc.Node {
		return this._NodeBuySkin;
	}
	public get NodeBuySkinSpriteCom() : cc.Sprite {
		return this._NodeBuySkinSpriteCom;
	}
	public get NodeBuySkinName() : cc.Node {
		return this._NodeBuySkinName;
	}
	public get NodeBuySkinNameSpriteCom() : cc.Sprite {
		return this._NodeBuySkinNameSpriteCom;
	}
	public get BtnCloseBuy() : cc.Node {
		return this._BtnCloseBuy;
	}
	public get BtnCloseBuySpriteCom() : cc.Sprite {
		return this._BtnCloseBuySpriteCom;
	}
	public get BtnCloseBuyButtonCom() : cc.Button {
		return this._BtnCloseBuyButtonCom;
	}
	public get LbGetDesc() : cc.Node {
		return this._LbGetDesc;
	}
	public get LbGetDescLabelCom() : cc.Label {
		return this._LbGetDescLabelCom;
	}
	public get nodeProgress() : cc.Node {
		return this._nodeProgress;
	}
	public get nodeProgressSpriteCom() : cc.Sprite {
		return this._nodeProgressSpriteCom;
	}
	public get nodeProgressProgressBarCom() : cc.ProgressBar {
		return this._nodeProgressProgressBarCom;
	}
	public get LbPgVal() : cc.Node {
		return this._LbPgVal;
	}
	public get LbPgValLabelCom() : cc.Label {
		return this._LbPgValLabelCom;
	}
	public get NodePgMain() : cc.Node {
		return this._NodePgMain;
	}
	public get LbSaleOffCost() : cc.Node {
		return this._LbSaleOffCost;
	}
	public get LbSaleOffCostLabelCom() : cc.Label {
		return this._LbSaleOffCostLabelCom;
	}
	public get LbRebate() : cc.Node {
		return this._LbRebate;
	}
	public get LbRebateLabelCom() : cc.Label {
		return this._LbRebateLabelCom;
	}
	public get BtnSaleOffBuy() : cc.Node {
		return this._BtnSaleOffBuy;
	}
	public get BtnSaleOffBuySpriteCom() : cc.Sprite {
		return this._BtnSaleOffBuySpriteCom;
	}
	public get BtnSaleOffBuyButtonCom() : cc.Button {
		return this._BtnSaleOffBuyButtonCom;
	}
	public get LbCost() : cc.Node {
		return this._LbCost;
	}
	public get LbCostLabelCom() : cc.Label {
		return this._LbCostLabelCom;
	}
	public get BtnBuy() : cc.Node {
		return this._BtnBuy;
	}
	public get BtnBuySpriteCom() : cc.Sprite {
		return this._BtnBuySpriteCom;
	}
	public get BtnBuyButtonCom() : cc.Button {
		return this._BtnBuyButtonCom;
	}
	public get NodeCostBuy() : cc.Node {
		return this._NodeCostBuy;
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
	public get NodeSel() : cc.Node {
		return this._NodeSel;
	}
	public get NodeSelSpriteCom() : cc.Sprite {
		return this._NodeSelSpriteCom;
	}
	public get NodeBg() : cc.Node {
		return this._NodeBg;
	}
	public get NodeBgSpriteCom() : cc.Sprite {
		return this._NodeBgSpriteCom;
	}
	public get btnClose() : cc.Node {
		return this._btnClose;
	}
	public get btnCloseSpriteCom() : cc.Sprite {
		return this._btnCloseSpriteCom;
	}
	public get btnCloseButtonCom() : cc.Button {
		return this._btnCloseButtonCom;
	}
	public get NodeSkinName() : cc.Node {
		return this._NodeSkinName;
	}
	public get NodeSkinNameSpriteCom() : cc.Sprite {
		return this._NodeSkinNameSpriteCom;
	}
	public get NodeSkinNameBg() : cc.Node {
		return this._NodeSkinNameBg;
	}
	public get NodeSkinNameBgSpriteCom() : cc.Sprite {
		return this._NodeSkinNameBgSpriteCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}