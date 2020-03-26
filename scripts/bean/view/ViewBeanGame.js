//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanGame extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBgNor : cc.Node;
	private _NodeBgNorSpriteCom : cc.Sprite;
	private _NodeBgSpe : cc.Node;
	private _NodeBgSpeSpriteCom : cc.Sprite;
	private _NodeGoods1 : cc.Node;
	private _NodeGoods1SpriteCom : cc.Sprite;
	private _NodeGoods2 : cc.Node;
	private _NodeGoods2SpriteCom : cc.Sprite;
	private _NodeGoods4 : cc.Node;
	private _NodeGoods4SpriteCom : cc.Sprite;
	private _NodeGoods3 : cc.Node;
	private _NodeGoods3SpriteCom : cc.Sprite;
	private _NodeMainBg : cc.Node;
	private _DragonSpeEff : cc.Node;
	private _IconTable : cc.Node;
	private _IconTableSpriteCom : cc.Sprite;
	private _NodeStartPos : cc.Node;
	private _DragonUpStar : cc.Node;
	private _DragonStarRotate : cc.Node;
	private _NodeEffBack : cc.Node;
	private _DragonHitStar : cc.Node;
	private _DragonDownStar : cc.Node;
	private _DragonHandDown : cc.Node;
	private _NodeEffFront : cc.Node;
	private _NodeDesk : cc.Node;
	private _NodeGame : cc.Node;
	private _BtnStart : cc.Node;
	private _BtnStartButtonCom : cc.Button;
	private _BtnClothes : cc.Node;
	private _BtnClothesSpriteCom : cc.Sprite;
	private _BtnClothesButtonCom : cc.Button;
	private _BtnSet : cc.Node;
	private _BtnSetSpriteCom : cc.Sprite;
	private _BtnSetButtonCom : cc.Button;
	private _BtnIconJl : cc.Node;
	private _BtnIconJlSpriteCom : cc.Sprite;
	private _BtnShare : cc.Node;
	private _BtnShareSpriteCom : cc.Sprite;
	private _BtnShareButtonCom : cc.Button;
	private _BtnRank : cc.Node;
	private _BtnRankSpriteCom : cc.Sprite;
	private _BtnRankButtonCom : cc.Button;
	private _BtnHard : cc.Node;
	private _BtnHardButtonCom : cc.Button;
	private _BtnHardSpriteCom : cc.Sprite;
	private _NodeTimeLimitBtn : cc.Node;
	private _BtnSign : cc.Node;
	private _BtnSignSpriteCom : cc.Sprite;
	private _BtnSignButtonCom : cc.Button;
	private _NodeStartMove : cc.Node;
	private _NodeStart : cc.Node;
	private _NodeScoreStar : cc.Node;
	private _NodeScoreStarSpriteCom : cc.Sprite;
	private _LbStar : cc.Node;
	private _LbStarLabelCom : cc.Label;
	private _LbScore : cc.Node;
	private _LbScoreLabelCom : cc.Label;
	private _LbReviveDown : cc.Node;
	private _LbReviveDownLabelCom : cc.Label;
	private _scoreNode : cc.Node;
	private _scoreNodeSpriteCom : cc.Sprite;
	private _NodeTopEff : cc.Node;
	private _nodeMoreGameDouyin : cc.Node;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBgNor = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeBgNor");
		this._NodeBgNorSpriteCom = this._NodeBgNor.getComponent("cc.Sprite");
		this._NodeBgSpe = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeBgSpe");
		this._NodeBgSpeSpriteCom = this._NodeBgSpe.getComponent("cc.Sprite");
		this._NodeGoods1 = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeGoods1");
		this._NodeGoods1SpriteCom = this._NodeGoods1.getComponent("cc.Sprite");
		this._NodeGoods2 = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeGoods2");
		this._NodeGoods2SpriteCom = this._NodeGoods2.getComponent("cc.Sprite");
		this._NodeGoods4 = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeGoods3").getChildByName("w_NodeGoods4");
		this._NodeGoods4SpriteCom = this._NodeGoods4.getComponent("cc.Sprite");
		this._NodeGoods3 = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg").getChildByName("w_NodeGoods3");
		this._NodeGoods3SpriteCom = this._NodeGoods3.getComponent("cc.Sprite");
		this._NodeMainBg = this.node.getChildByName("mainBgNode").getChildByName("w_NodeMainBg");
		this._DragonSpeEff = this.node.getChildByName("mainBgNode").getChildByName("w_DragonSpeEff");
		this._IconTable = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_IconTable");
		this._IconTableSpriteCom = this._IconTable.getComponent("cc.Sprite");
		this._NodeStartPos = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeStartPos");
		this._DragonUpStar = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffBack").getChildByName("w_DragonUpStar");
		this._DragonStarRotate = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffBack").getChildByName("w_DragonStarRotate");
		this._NodeEffBack = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffBack");
		this._DragonHitStar = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffFront").getChildByName("w_DragonHitStar");
		this._DragonDownStar = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffFront").getChildByName("w_DragonDownStar");
		this._DragonHandDown = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffFront").getChildByName("w_DragonHandDown");
		this._NodeEffFront = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk").getChildByName("w_NodeEffFront");
		this._NodeDesk = this.node.getChildByName("w_NodeGame").getChildByName("w_NodeDesk");
		this._NodeGame = this.node.getChildByName("w_NodeGame");
		this._BtnStart = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnStart");
		this._BtnStartButtonCom = this._BtnStart.getComponent("cc.Button");
		this._BtnClothes = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnClothes");
		this._BtnClothesSpriteCom = this._BtnClothes.getComponent("cc.Sprite");
		this._BtnClothesButtonCom = this._BtnClothes.getComponent("cc.Button");
		this._BtnSet = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnSet");
		this._BtnSetSpriteCom = this._BtnSet.getComponent("cc.Sprite");
		this._BtnSetButtonCom = this._BtnSet.getComponent("cc.Button");
		this._BtnIconJl = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnShare").getChildByName("w_BtnIconJl");
		this._BtnIconJlSpriteCom = this._BtnIconJl.getComponent("cc.Sprite");
		this._BtnShare = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnShare");
		this._BtnShareSpriteCom = this._BtnShare.getComponent("cc.Sprite");
		this._BtnShareButtonCom = this._BtnShare.getComponent("cc.Button");
		this._BtnRank = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnRank");
		this._BtnRankSpriteCom = this._BtnRank.getComponent("cc.Sprite");
		this._BtnRankButtonCom = this._BtnRank.getComponent("cc.Button");
		this._BtnHard = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("w_BtnHard");
		this._BtnHardButtonCom = this._BtnHard.getComponent("cc.Button");
		this._BtnHardSpriteCom = this._BtnHard.getComponent("cc.Sprite");
		this._NodeTimeLimitBtn = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("btnLayout").getChildByName("w_NodeTimeLimitBtn");
		this._BtnSign = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove").getChildByName("btnLayout").getChildByName("w_BtnSign");
		this._BtnSignSpriteCom = this._BtnSign.getComponent("cc.Sprite");
		this._BtnSignButtonCom = this._BtnSign.getComponent("cc.Button");
		this._NodeStartMove = this.node.getChildByName("w_NodeStart").getChildByName("w_NodeStartMove");
		this._NodeStart = this.node.getChildByName("w_NodeStart");
		this._NodeScoreStar = this.node.getChildByName("w_scoreNode").getChildByName("w_NodeScoreStar");
		this._NodeScoreStarSpriteCom = this._NodeScoreStar.getComponent("cc.Sprite");
		this._LbStar = this.node.getChildByName("w_scoreNode").getChildByName("w_LbStar");
		this._LbStarLabelCom = this._LbStar.getComponent("cc.Label");
		this._LbScore = this.node.getChildByName("w_scoreNode").getChildByName("w_LbScore");
		this._LbScoreLabelCom = this._LbScore.getComponent("cc.Label");
		this._LbReviveDown = this.node.getChildByName("w_scoreNode").getChildByName("w_LbReviveDown");
		this._LbReviveDownLabelCom = this._LbReviveDown.getComponent("cc.Label");
		this._scoreNode = this.node.getChildByName("w_scoreNode");
		this._scoreNodeSpriteCom = this._scoreNode.getComponent("cc.Sprite");
		this._NodeTopEff = this.node.getChildByName("w_NodeTopEff");
		this._nodeMoreGameDouyin = this.node.getChildByName("w_nodeMoreGameDouyin");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBgNor() : cc.Node {
		return this._NodeBgNor;
	}
	public get NodeBgNorSpriteCom() : cc.Sprite {
		return this._NodeBgNorSpriteCom;
	}
	public get NodeBgSpe() : cc.Node {
		return this._NodeBgSpe;
	}
	public get NodeBgSpeSpriteCom() : cc.Sprite {
		return this._NodeBgSpeSpriteCom;
	}
	public get NodeGoods1() : cc.Node {
		return this._NodeGoods1;
	}
	public get NodeGoods1SpriteCom() : cc.Sprite {
		return this._NodeGoods1SpriteCom;
	}
	public get NodeGoods2() : cc.Node {
		return this._NodeGoods2;
	}
	public get NodeGoods2SpriteCom() : cc.Sprite {
		return this._NodeGoods2SpriteCom;
	}
	public get NodeGoods4() : cc.Node {
		return this._NodeGoods4;
	}
	public get NodeGoods4SpriteCom() : cc.Sprite {
		return this._NodeGoods4SpriteCom;
	}
	public get NodeGoods3() : cc.Node {
		return this._NodeGoods3;
	}
	public get NodeGoods3SpriteCom() : cc.Sprite {
		return this._NodeGoods3SpriteCom;
	}
	public get NodeMainBg() : cc.Node {
		return this._NodeMainBg;
	}
	public get DragonSpeEff() : cc.Node {
		return this._DragonSpeEff;
	}
	public get IconTable() : cc.Node {
		return this._IconTable;
	}
	public get IconTableSpriteCom() : cc.Sprite {
		return this._IconTableSpriteCom;
	}
	public get NodeStartPos() : cc.Node {
		return this._NodeStartPos;
	}
	public get DragonUpStar() : cc.Node {
		return this._DragonUpStar;
	}
	public get DragonStarRotate() : cc.Node {
		return this._DragonStarRotate;
	}
	public get NodeEffBack() : cc.Node {
		return this._NodeEffBack;
	}
	public get DragonHitStar() : cc.Node {
		return this._DragonHitStar;
	}
	public get DragonDownStar() : cc.Node {
		return this._DragonDownStar;
	}
	public get DragonHandDown() : cc.Node {
		return this._DragonHandDown;
	}
	public get NodeEffFront() : cc.Node {
		return this._NodeEffFront;
	}
	public get NodeDesk() : cc.Node {
		return this._NodeDesk;
	}
	public get NodeGame() : cc.Node {
		return this._NodeGame;
	}
	public get BtnStart() : cc.Node {
		return this._BtnStart;
	}
	public get BtnStartButtonCom() : cc.Button {
		return this._BtnStartButtonCom;
	}
	public get BtnClothes() : cc.Node {
		return this._BtnClothes;
	}
	public get BtnClothesSpriteCom() : cc.Sprite {
		return this._BtnClothesSpriteCom;
	}
	public get BtnClothesButtonCom() : cc.Button {
		return this._BtnClothesButtonCom;
	}
	public get BtnSet() : cc.Node {
		return this._BtnSet;
	}
	public get BtnSetSpriteCom() : cc.Sprite {
		return this._BtnSetSpriteCom;
	}
	public get BtnSetButtonCom() : cc.Button {
		return this._BtnSetButtonCom;
	}
	public get BtnIconJl() : cc.Node {
		return this._BtnIconJl;
	}
	public get BtnIconJlSpriteCom() : cc.Sprite {
		return this._BtnIconJlSpriteCom;
	}
	public get BtnShare() : cc.Node {
		return this._BtnShare;
	}
	public get BtnShareSpriteCom() : cc.Sprite {
		return this._BtnShareSpriteCom;
	}
	public get BtnShareButtonCom() : cc.Button {
		return this._BtnShareButtonCom;
	}
	public get BtnRank() : cc.Node {
		return this._BtnRank;
	}
	public get BtnRankSpriteCom() : cc.Sprite {
		return this._BtnRankSpriteCom;
	}
	public get BtnRankButtonCom() : cc.Button {
		return this._BtnRankButtonCom;
	}
	public get BtnHard() : cc.Node {
		return this._BtnHard;
	}
	public get BtnHardButtonCom() : cc.Button {
		return this._BtnHardButtonCom;
	}
	public get BtnHardSpriteCom() : cc.Sprite {
		return this._BtnHardSpriteCom;
	}
	public get NodeTimeLimitBtn() : cc.Node {
		return this._NodeTimeLimitBtn;
	}
	public get BtnSign() : cc.Node {
		return this._BtnSign;
	}
	public get BtnSignSpriteCom() : cc.Sprite {
		return this._BtnSignSpriteCom;
	}
	public get BtnSignButtonCom() : cc.Button {
		return this._BtnSignButtonCom;
	}
	public get NodeStartMove() : cc.Node {
		return this._NodeStartMove;
	}
	public get NodeStart() : cc.Node {
		return this._NodeStart;
	}
	public get NodeScoreStar() : cc.Node {
		return this._NodeScoreStar;
	}
	public get NodeScoreStarSpriteCom() : cc.Sprite {
		return this._NodeScoreStarSpriteCom;
	}
	public get LbStar() : cc.Node {
		return this._LbStar;
	}
	public get LbStarLabelCom() : cc.Label {
		return this._LbStarLabelCom;
	}
	public get LbScore() : cc.Node {
		return this._LbScore;
	}
	public get LbScoreLabelCom() : cc.Label {
		return this._LbScoreLabelCom;
	}
	public get LbReviveDown() : cc.Node {
		return this._LbReviveDown;
	}
	public get LbReviveDownLabelCom() : cc.Label {
		return this._LbReviveDownLabelCom;
	}
	public get scoreNode() : cc.Node {
		return this._scoreNode;
	}
	public get scoreNodeSpriteCom() : cc.Sprite {
		return this._scoreNodeSpriteCom;
	}
	public get NodeTopEff() : cc.Node {
		return this._NodeTopEff;
	}
	public get nodeMoreGameDouyin() : cc.Node {
		return this._nodeMoreGameDouyin;
	}
	public get root() : cc.Node {
		return this._root;
	}
}