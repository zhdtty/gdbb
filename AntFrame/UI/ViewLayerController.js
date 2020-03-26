
//auto gen

const {ccclass,property} = cc._decorator;
import UIBase from './AntUIBase';
@ccclass
export default class ViewLayerController extends UIBase
{

	private _root:cc.Node;
	private _layerMap:cc.Node;
	private _layerUI:cc.Node;
	private _layerBlock:cc.Node;
	private _layerBlockBlockInputEvents:cc.BlockInputEvents;
	private _layerPopUp:cc.Node;
	private _layerLoading:cc.Node;
	private _layerNetMask:cc.Node;
	private _layerToast:cc.Node;
	private _layerAlert:cc.Node;
	private _layerGuide:cc.Node;
	private _layerDebug:cc.Node;

	public get root():cc.Node{
		if(this._root){
			return this._root;
		}
		this._root=this.node;
		return this._root;
	}

	public get layerMap():cc.Node{
		if(this._layerMap){
			return this._layerMap;
		}
		this._layerMap=this.node.getChildByName("w_layerMap");
		return this._layerMap;
	}

	public get layerUI():cc.Node{
		if(this._layerUI){
			return this._layerUI;
		}
		this._layerUI=this.node.getChildByName("w_layerUI");
		return this._layerUI;
	}

	public get layerBlock():cc.Node{
		if(this._layerBlock){
			return this._layerBlock;
		}
		this._layerBlock=this.node.getChildByName("w_layerUI").getChildByName("w_layerBlock");
		return this._layerBlock;
	}

	public get layerBlockBlockInputEvents():cc.BlockInputEvents{
		if(this._layerBlockBlockInputEvents){
			return this._layerBlockBlockInputEvents;
		}
		this._layerBlockBlockInputEvents=this.layerBlock.getComponent(cc.BlockInputEvents)
		return this._layerBlockBlockInputEvents;
	}

	public get layerPopUp():cc.Node{
		if(this._layerPopUp){
			return this._layerPopUp;
		}
		this._layerPopUp=this.node.getChildByName("w_layerPopUp");
		return this._layerPopUp;
	}

	public get layerLoading():cc.Node{
		if(this._layerLoading){
			return this._layerLoading;
		}
		this._layerLoading=this.node.getChildByName("w_layerLoading");
		return this._layerLoading;
	}

	public get layerNetMask():cc.Node{
		if(this._layerNetMask){
			return this._layerNetMask;
		}
		this._layerNetMask=this.node.getChildByName("w_layerNetMask");
		return this._layerNetMask;
	}

	public get layerToast():cc.Node{
		if(this._layerToast){
			return this._layerToast;
		}
		this._layerToast=this.node.getChildByName("w_layerToast");
		return this._layerToast;
	}

	public get layerAlert():cc.Node{
		if(this._layerAlert){
			return this._layerAlert;
		}
		this._layerAlert=this.node.getChildByName("w_layerAlert");
		return this._layerAlert;
	}

	public get layerGuide():cc.Node{
		if(this._layerGuide){
			return this._layerGuide;
		}
		this._layerGuide=this.node.getChildByName("w_layerGuide");
		return this._layerGuide;
	}

	public get layerDebug():cc.Node{
		if(this._layerDebug){
			return this._layerDebug;
		}
		this._layerDebug=this.node.getChildByName("w_layerDebug");
		return this._layerDebug;
	}
}