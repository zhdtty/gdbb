//antframe auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../../../AntFrame/UI/AntUIBase';
// antframe auto generate tools : IMPORT POINT STUB
@ccclass
export default class ViewBeanGetRewardDialog extends UIBase
{
	// antframe auto generate tools : DECLARE POINT STUB
	private _dragonBg : cc.Node;
	private _dragonCd : cc.Node;
	private _lblRwd : cc.Node;
	private _lblRwdLabelCom : cc.Label;
	private _iconReward : cc.Node;
	private _iconRewardSpriteCom : cc.Sprite;
	private _btnVideo : cc.Node;
	private _btnVideoSpriteCom : cc.Sprite;
	private _btnVideoButtonCom : cc.Button;
	private _btnRefuse : cc.Node;
	private _btnRefuseButtonCom : cc.Button;
	private _root : cc.Node;

	onLoad() {
		// antframe auto generate tools : INIT FUNC onLoad
		this._dragonBg = this.node.getChildByName("w_dragonBg");
		this._dragonCd = this.node.getChildByName("w_dragonCd");
		this._lblRwd = this.node.getChildByName("nodeReward").getChildByName("w_lblRwd");
		this._lblRwdLabelCom = this._lblRwd.getComponent("cc.Label");
		this._iconReward = this.node.getChildByName("nodeReward").getChildByName("w_iconReward");
		this._iconRewardSpriteCom = this._iconReward.getComponent("cc.Sprite");
		this._btnVideo = this.node.getChildByName("w_btnVideo");
		this._btnVideoSpriteCom = this._btnVideo.getComponent("cc.Sprite");
		this._btnVideoButtonCom = this._btnVideo.getComponent("cc.Button");
		this._btnRefuse = this.node.getChildByName("w_btnRefuse");
		this._btnRefuseButtonCom = this._btnRefuse.getComponent("cc.Button");
		this._root = this.node;
	}

	// antframe auto generate tools : API POINT STUB
	public get dragonBg() : cc.Node {
		return this._dragonBg;
	}
	public get dragonCd() : cc.Node {
		return this._dragonCd;
	}
	public get lblRwd() : cc.Node {
		return this._lblRwd;
	}
	public get lblRwdLabelCom() : cc.Label {
		return this._lblRwdLabelCom;
	}
	public get iconReward() : cc.Node {
		return this._iconReward;
	}
	public get iconRewardSpriteCom() : cc.Sprite {
		return this._iconRewardSpriteCom;
	}
	public get btnVideo() : cc.Node {
		return this._btnVideo;
	}
	public get btnVideoSpriteCom() : cc.Sprite {
		return this._btnVideoSpriteCom;
	}
	public get btnVideoButtonCom() : cc.Button {
		return this._btnVideoButtonCom;
	}
	public get btnRefuse() : cc.Node {
		return this._btnRefuse;
	}
	public get btnRefuseButtonCom() : cc.Button {
		return this._btnRefuseButtonCom;
	}
	public get root() : cc.Node {
		return this._root;
	}
}