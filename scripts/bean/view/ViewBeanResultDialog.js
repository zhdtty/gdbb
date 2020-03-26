//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanResultDialog extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _NodeBg : cc.Node;
	private _NodeBgSpriteCom : cc.Sprite;
	private _LbScore : cc.Node;
	private _LbScoreLabelCom : cc.Label;
	private _LbBeanNum : cc.Node;
	private _LbBeanNumLabelCom : cc.Label;
	private _LbStartNum : cc.Node;
	private _LbStartNumLabelCom : cc.Label;
	private _BtnShare : cc.Node;
	private _BtnShareSpriteCom : cc.Sprite;
	private _BtnShareButtonCom : cc.Button;
	private _BtnShowVideo : cc.Node;
	private _BtnShowVideoSpriteCom : cc.Sprite;
	private _BtnShowVideoButtonCom : cc.Button;
	private _BtnNorGet : cc.Node;
	private _BtnNorGetButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._NodeBg = this.node.getChildByName("w_NodeBg");
		this._NodeBgSpriteCom = this._NodeBg.getComponent("cc.Sprite");
		this._LbScore = this.node.getChildByName("bg_settlement_002").getChildByName("w_LbScore");
		this._LbScoreLabelCom = this._LbScore.getComponent("cc.Label");
		this._LbBeanNum = this.node.getChildByName("bg_settlement_002").getChildByName("w_LbBeanNum");
		this._LbBeanNumLabelCom = this._LbBeanNum.getComponent("cc.Label");
		this._LbStartNum = this.node.getChildByName("bg_settlement_002").getChildByName("w_LbStartNum");
		this._LbStartNumLabelCom = this._LbStartNum.getComponent("cc.Label");
		this._BtnShare = this.node.getChildByName("w_BtnShare");
		this._BtnShareSpriteCom = this._BtnShare.getComponent("cc.Sprite");
		this._BtnShareButtonCom = this._BtnShare.getComponent("cc.Button");
		this._BtnShowVideo = this.node.getChildByName("w_BtnShowVideo");
		this._BtnShowVideoSpriteCom = this._BtnShowVideo.getComponent("cc.Sprite");
		this._BtnShowVideoButtonCom = this._BtnShowVideo.getComponent("cc.Button");
		this._BtnNorGet = this.node.getChildByName("w_BtnNorGet");
		this._BtnNorGetButtonCom = this._BtnNorGet.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get NodeBg() : cc.Node {
		return this._NodeBg;
	}
	public get NodeBgSpriteCom() : cc.Sprite {
		return this._NodeBgSpriteCom;
	}
	public get LbScore() : cc.Node {
		return this._LbScore;
	}
	public get LbScoreLabelCom() : cc.Label {
		return this._LbScoreLabelCom;
	}
	public get LbBeanNum() : cc.Node {
		return this._LbBeanNum;
	}
	public get LbBeanNumLabelCom() : cc.Label {
		return this._LbBeanNumLabelCom;
	}
	public get LbStartNum() : cc.Node {
		return this._LbStartNum;
	}
	public get LbStartNumLabelCom() : cc.Label {
		return this._LbStartNumLabelCom;
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
	public get BtnShowVideo() : cc.Node {
		return this._BtnShowVideo;
	}
	public get BtnShowVideoSpriteCom() : cc.Sprite {
		return this._BtnShowVideoSpriteCom;
	}
	public get BtnShowVideoButtonCom() : cc.Button {
		return this._BtnShowVideoButtonCom;
	}
	public get BtnNorGet() : cc.Node {
		return this._BtnNorGet;
	}
	public get BtnNorGetButtonCom() : cc.Button {
		return this._BtnNorGetButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}