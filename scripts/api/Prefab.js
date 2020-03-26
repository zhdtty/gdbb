import AntLog from "../../AntFrame/Log/AntLog";
import AntPoolObject from "../../AntFrame/Resource/AntPoolObject";
import AntResMgr from "../../AntFrame/Resource/AntResMgr";

// antframe auto generate tools : IMPORT POINT STUB

import ViewHeadIcon from "../sudoku/view/ViewHeadIcon";
import ViewSudokuAuth from "../sudoku/view/ViewSudokuAuth";
import ViewSudokuMain from "../sudoku/view/ViewSudokuMain";
import ViewSudokuRankResult from "../sudoku/view/ViewSudokuRankResult";
import ViewSudokuRankSurpass from "../sudoku/view/ViewSudokuRankSurpass";
import ViewSudokuRankView from "../sudoku/view/ViewSudokuRankView";
import ViewUIRankList from "../sudoku/view/ViewUIRankList";
import ViewBlockCom from "../oneline/view/ViewBlockCom";
import ViewCustomsLayer from "../oneline/view/ViewCustomsLayer";
import ViewOLChallengeGameLayer from "../oneline/view/ViewOLChallengeGameLayer";
import ViewOLCustomizationLayer from "../oneline/view/ViewOLCustomizationLayer";
import ViewOLGameLayer from "../oneline/view/ViewOLGameLayer";
import ViewOLGetDogDialog from "../oneline/view/ViewOLGetDogDialog";
import ViewOLRankLayer from "../oneline/view/ViewOLRankLayer";
import ViewOLResultDialog from "../oneline/view/ViewOLResultDialog";
import ViewOLShopLayer from "../oneline/view/ViewOLShopLayer";
import ViewStartLayer from "../oneline/view/ViewStartLayer";
import ViewCuteClothesView from "../cute/view/ViewCuteClothesView";
import ViewCuteGame from "../cute/view/ViewCuteGame";
import ViewCuteGetRewardByVideo from "../cute/view/ViewCuteGetRewardByVideo";
import ViewCuteGetRewardDialog from "../cute/view/ViewCuteGetRewardDialog";
import ViewCuteGetSkinDialog from "../cute/view/ViewCuteGetSkinDialog";
import ViewCuteGuideFinger from "../cute/view/ViewCuteGuideFinger";
import ViewCuteJellyItem from "../cute/view/ViewCuteJellyItem";
import ViewCuteJellySkinItem from "../cute/view/ViewCuteJellySkinItem";
import ViewCutePlayerItem from "../cute/view/ViewCutePlayerItem";
import ViewCutePlayerSkinItem from "../cute/view/ViewCutePlayerSkinItem";
import ViewCuteRank from "../cute/view/ViewCuteRank";
import ViewCuteResultDialog from "../cute/view/ViewCuteResultDialog";
import ViewCuteReviveDialog from "../cute/view/ViewCuteReviveDialog";
import ViewCuteReviveItem from "../cute/view/ViewCuteReviveItem";
import ViewCuteRewardLine from "../cute/view/ViewCuteRewardLine";
import ViewCuteScoreItem from "../cute/view/ViewCuteScoreItem";
import ViewCuteSetting from "../cute/view/ViewCuteSetting";
import ViewCuteSign from "../cute/view/ViewCuteSign";
import ViewCuteStarGetAni from "../cute/view/ViewCuteStarGetAni";
import ViewCuteStarItem from "../cute/view/ViewCuteStarItem";
import ViewCuteTimeLimitBtn from "../cute/view/ViewCuteTimeLimitBtn";
import ViewCuteTrySkinDialog from "../cute/view/ViewCuteTrySkinDialog";
import ViewCuteWheel from "../cute/view/ViewCuteWheel";
import ViewCuteExportPageQY from "../cute/view/quyou/ViewCuteExportPageQY";
import ViewCuteMainViewAdvQY from "../cute/view/quyou/ViewCuteMainViewAdvQY";
import ViewCuteResultDialogQY from "../cute/view/quyou/ViewCuteResultDialogQY";
import ViewCuteReviveDialogQY from "../cute/view/quyou/ViewCuteReviveDialogQY";
import ViewCuteRecordDialogQM from "../cute/view/quanmin/ViewCuteRecordDialogQM";
import ViewCuteResultDialogQM from "../cute/view/quanmin/ViewCuteResultDialogQM";
import ViewCuteReviveDialogQM from "../cute/view/quanmin/ViewCuteReviveDialogQM";
import ViewCuteTrySkinDialogQM from "../cute/view/quanmin/ViewCuteTrySkinDialogQM";
import ViewAntGameInfo from "../common/view/ViewAntGameInfo";
import ViewAntTestCaseUI from "../common/view/ViewAntTestCaseUI";
import ViewBrickAlert from "../brick/view/ViewBrickAlert";
import ViewBrickAlertRelive from "../brick/view/ViewBrickAlertRelive";
import ViewBrickGame from "../brick/view/ViewBrickGame";
import ViewBrickGameResult from "../brick/view/ViewBrickGameResult";
import ViewBrickGameVideoResult from "../brick/view/ViewBrickGameVideoResult";
import ViewBrickHall from "../brick/view/ViewBrickHall";
import ViewBrickItemAccelerateBelt from "../brick/view/ViewBrickItemAccelerateBelt";
import ViewBrickItemBrick from "../brick/view/ViewBrickItemBrick";
import ViewBrickItemBrickDisappearAnim from "../brick/view/ViewBrickItemBrickDisappearAnim";
import ViewBrickItemBuff from "../brick/view/ViewBrickItemBuff";
import ViewBrickItemBullet from "../brick/view/ViewBrickItemBullet";
import ViewBrickItemPlane from "../brick/view/ViewBrickItemPlane";
import ViewBrickItemSkin from "../brick/view/ViewBrickItemSkin";
import ViewBrickItemSkinDesc from "../brick/view/ViewBrickItemSkinDesc";
import ViewBrickRank from "../brick/view/ViewBrickRank";
import ViewBrickSetting from "../brick/view/ViewBrickSetting";
import ViewBrickSkin from "../brick/view/ViewBrickSkin";
import ViewBeanClothesView from "../bean/view/ViewBeanClothesView";
import ViewBeanGame from "../bean/view/ViewBeanGame";
import ViewBeanGetRewardDialog from "../bean/view/ViewBeanGetRewardDialog";
import ViewBeanGetSkinDialog from "../bean/view/ViewBeanGetSkinDialog";
import ViewBeanGuideFinger from "../bean/view/ViewBeanGuideFinger";
import ViewBeanJellyItem from "../bean/view/ViewBeanJellyItem";
import ViewBeanJellySkinItem from "../bean/view/ViewBeanJellySkinItem";
import ViewBeanPlayerItem from "../bean/view/ViewBeanPlayerItem";
import ViewBeanPlayerSkinItem from "../bean/view/ViewBeanPlayerSkinItem";
import ViewBeanRank from "../bean/view/ViewBeanRank";
import ViewBeanResultDialog from "../bean/view/ViewBeanResultDialog";
import ViewBeanReviveDialog from "../bean/view/ViewBeanReviveDialog";
import ViewBeanRewardLine from "../bean/view/ViewBeanRewardLine";
import ViewBeanScoreItem from "../bean/view/ViewBeanScoreItem";
import ViewBeanSetting from "../bean/view/ViewBeanSetting";
import ViewBeanSign from "../bean/view/ViewBeanSign";
import ViewBeanStarGetAni from "../bean/view/ViewBeanStarGetAni";
import ViewBeanStarItem from "../bean/view/ViewBeanStarItem";
import ViewBeanTimeLimitBtn from "../bean/view/ViewBeanTimeLimitBtn";
import ViewBeanTrySkinDialog from "../bean/view/ViewBeanTrySkinDialog";
import ViewBeanExportPageQY from "../bean/view/quyou/ViewBeanExportPageQY";
import ViewBeanMainViewAdvQY from "../bean/view/quyou/ViewBeanMainViewAdvQY";
import ViewBeanResultDialogQY from "../bean/view/quyou/ViewBeanResultDialogQY";
import ViewBeanReviveDialogQY from "../bean/view/quyou/ViewBeanReviveDialogQY";
import ViewBeanRecordDialogQM from "../bean/view/quanmin/ViewBeanRecordDialogQM";
import ViewBeanResultDialogQM from "../bean/view/quanmin/ViewBeanResultDialogQM";
import ViewBeanReviveDialogQM from "../bean/view/quanmin/ViewBeanReviveDialogQM";
import ViewBeanTrySkinDialogQM from "../bean/view/quanmin/ViewBeanTrySkinDialogQM";
import ViewBalloonsArrowItem from "../balloons/view/ViewBalloonsArrowItem";
import ViewBalloonsBowItem from "../balloons/view/ViewBalloonsBowItem";
import ViewBalloonsGame from "../balloons/view/ViewBalloonsGame";

export default class Prefab {
	public statis: {} = {};

	// antframe auto generate tools : DECLARE POINT STUB

    private _HeadIcon:ViewHeadIcon;
    private _SudokuAuth:ViewSudokuAuth;
    private _SudokuMain:ViewSudokuMain;
    private _SudokuRankResult:ViewSudokuRankResult;
    private _SudokuRankSurpass:ViewSudokuRankSurpass;
    private _SudokuRankView:ViewSudokuRankView;
    private _UIRankList:ViewUIRankList;
    private _BlockCom:ViewBlockCom;
    private _CustomsLayer:ViewCustomsLayer;
    private _OLChallengeGameLayer:ViewOLChallengeGameLayer;
    private _OLCustomizationLayer:ViewOLCustomizationLayer;
    private _OLGameLayer:ViewOLGameLayer;
    private _OLGetDogDialog:ViewOLGetDogDialog;
    private _OLRankLayer:ViewOLRankLayer;
    private _OLResultDialog:ViewOLResultDialog;
    private _OLShopLayer:ViewOLShopLayer;
    private _StartLayer:ViewStartLayer;
    private _CuteClothesView:ViewCuteClothesView;
    private _CuteGame:ViewCuteGame;
    private _CuteGetRewardByVideo:ViewCuteGetRewardByVideo;
    private _CuteGetRewardDialog:ViewCuteGetRewardDialog;
    private _CuteGetSkinDialog:ViewCuteGetSkinDialog;
    private _CuteGuideFinger:ViewCuteGuideFinger;
    private _CuteJellyItem:ViewCuteJellyItem;
    private _CuteJellySkinItem:ViewCuteJellySkinItem;
    private _CutePlayerItem:ViewCutePlayerItem;
    private _CutePlayerSkinItem:ViewCutePlayerSkinItem;
    private _CuteRank:ViewCuteRank;
    private _CuteResultDialog:ViewCuteResultDialog;
    private _CuteReviveDialog:ViewCuteReviveDialog;
    private _CuteReviveItem:ViewCuteReviveItem;
    private _CuteRewardLine:ViewCuteRewardLine;
    private _CuteScoreItem:ViewCuteScoreItem;
    private _CuteSetting:ViewCuteSetting;
    private _CuteSign:ViewCuteSign;
    private _CuteStarGetAni:ViewCuteStarGetAni;
    private _CuteStarItem:ViewCuteStarItem;
    private _CuteTimeLimitBtn:ViewCuteTimeLimitBtn;
    private _CuteTrySkinDialog:ViewCuteTrySkinDialog;
    private _CuteWheel:ViewCuteWheel;
    private _CuteExportPageQY:ViewCuteExportPageQY;
    private _CuteMainViewAdvQY:ViewCuteMainViewAdvQY;
    private _CuteResultDialogQY:ViewCuteResultDialogQY;
    private _CuteReviveDialogQY:ViewCuteReviveDialogQY;
    private _CuteRecordDialogQM:ViewCuteRecordDialogQM;
    private _CuteResultDialogQM:ViewCuteResultDialogQM;
    private _CuteReviveDialogQM:ViewCuteReviveDialogQM;
    private _CuteTrySkinDialogQM:ViewCuteTrySkinDialogQM;
    private _AntGameInfo:ViewAntGameInfo;
    private _AntTestCaseUI:ViewAntTestCaseUI;
    private _BrickAlert:ViewBrickAlert;
    private _BrickAlertRelive:ViewBrickAlertRelive;
    private _BrickGame:ViewBrickGame;
    private _BrickGameResult:ViewBrickGameResult;
    private _BrickGameVideoResult:ViewBrickGameVideoResult;
    private _BrickHall:ViewBrickHall;
    private _BrickItemAccelerateBelt:ViewBrickItemAccelerateBelt;
    private _BrickItemBrick:ViewBrickItemBrick;
    private _BrickItemBrickDisappearAnim:ViewBrickItemBrickDisappearAnim;
    private _BrickItemBuff:ViewBrickItemBuff;
    private _BrickItemBullet:ViewBrickItemBullet;
    private _BrickItemPlane:ViewBrickItemPlane;
    private _BrickItemSkin:ViewBrickItemSkin;
    private _BrickItemSkinDesc:ViewBrickItemSkinDesc;
    private _BrickRank:ViewBrickRank;
    private _BrickSetting:ViewBrickSetting;
    private _BrickSkin:ViewBrickSkin;
    private _BeanClothesView:ViewBeanClothesView;
    private _BeanGame:ViewBeanGame;
    private _BeanGetRewardDialog:ViewBeanGetRewardDialog;
    private _BeanGetSkinDialog:ViewBeanGetSkinDialog;
    private _BeanGuideFinger:ViewBeanGuideFinger;
    private _BeanJellyItem:ViewBeanJellyItem;
    private _BeanJellySkinItem:ViewBeanJellySkinItem;
    private _BeanPlayerItem:ViewBeanPlayerItem;
    private _BeanPlayerSkinItem:ViewBeanPlayerSkinItem;
    private _BeanRank:ViewBeanRank;
    private _BeanResultDialog:ViewBeanResultDialog;
    private _BeanReviveDialog:ViewBeanReviveDialog;
    private _BeanRewardLine:ViewBeanRewardLine;
    private _BeanScoreItem:ViewBeanScoreItem;
    private _BeanSetting:ViewBeanSetting;
    private _BeanSign:ViewBeanSign;
    private _BeanStarGetAni:ViewBeanStarGetAni;
    private _BeanStarItem:ViewBeanStarItem;
    private _BeanTimeLimitBtn:ViewBeanTimeLimitBtn;
    private _BeanTrySkinDialog:ViewBeanTrySkinDialog;
    private _BeanExportPageQY:ViewBeanExportPageQY;
    private _BeanMainViewAdvQY:ViewBeanMainViewAdvQY;
    private _BeanResultDialogQY:ViewBeanResultDialogQY;
    private _BeanReviveDialogQY:ViewBeanReviveDialogQY;
    private _BeanRecordDialogQM:ViewBeanRecordDialogQM;
    private _BeanResultDialogQM:ViewBeanResultDialogQM;
    private _BeanReviveDialogQM:ViewBeanReviveDialogQM;
    private _BeanTrySkinDialogQM:ViewBeanTrySkinDialogQM;
    private _BalloonsArrowItem:ViewBalloonsArrowItem;
    private _BalloonsBowItem:ViewBalloonsBowItem;
    private _BalloonsGame:ViewBalloonsGame;

	// antframe auto generate tools : API POINT STUB

	//-------------------------------------------
	public async NewHeadIcon(add2pool:boolean = false):Promise<ViewHeadIcon>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewHeadIcon");
			if(node) {
				return new Promise<ViewHeadIcon>(resolve=>{resolve(node.getComponent(ViewHeadIcon))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/HeadIcon");
			return new Promise<ViewHeadIcon>(resolve=>{
				node = AntPoolObject.Instantiate("ViewHeadIcon", prefab);
				if(!this.statis["HeadIcon"]) {
					this.statis["HeadIcon"] = 0;
				}
				this.statis["HeadIcon"]++;
				let view = node.addComponent("ViewHeadIcon");
				try {
					node.addComponent("LogicHeadIcon");
				} catch(e){
					AntLog.Warn("prefab HeadIcon has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/HeadIcon");
			return new Promise<ViewHeadIcon>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["HeadIcon"]) {
					this.statis["HeadIcon"] = 0;
				}
				this.statis["HeadIcon"]++;
				node.active = true;
				let view = node.addComponent("ViewHeadIcon");
				try {
					node.addComponent("LogicHeadIcon");
				} catch(e){
					AntLog.Warn("prefab HeadIcon has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetHeadIcon(add2pool:boolean = true):Promise<ViewHeadIcon>{
		if(!this._HeadIcon){
			this._HeadIcon = await this.NewHeadIcon();
		}

		return new Promise<ViewHeadIcon>(resolve=>{resolve(this._HeadIcon)});
	}

	//-------------------------------------------
	public async NewSudokuAuth(add2pool:boolean = false):Promise<ViewSudokuAuth>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewSudokuAuth");
			if(node) {
				return new Promise<ViewSudokuAuth>(resolve=>{resolve(node.getComponent(ViewSudokuAuth))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuAuth");
			return new Promise<ViewSudokuAuth>(resolve=>{
				node = AntPoolObject.Instantiate("ViewSudokuAuth", prefab);
				if(!this.statis["SudokuAuth"]) {
					this.statis["SudokuAuth"] = 0;
				}
				this.statis["SudokuAuth"]++;
				let view = node.addComponent("ViewSudokuAuth");
				try {
					node.addComponent("LogicSudokuAuth");
				} catch(e){
					AntLog.Warn("prefab SudokuAuth has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuAuth");
			return new Promise<ViewSudokuAuth>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["SudokuAuth"]) {
					this.statis["SudokuAuth"] = 0;
				}
				this.statis["SudokuAuth"]++;
				node.active = true;
				let view = node.addComponent("ViewSudokuAuth");
				try {
					node.addComponent("LogicSudokuAuth");
				} catch(e){
					AntLog.Warn("prefab SudokuAuth has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetSudokuAuth(add2pool:boolean = true):Promise<ViewSudokuAuth>{
		if(!this._SudokuAuth){
			this._SudokuAuth = await this.NewSudokuAuth();
		}

		return new Promise<ViewSudokuAuth>(resolve=>{resolve(this._SudokuAuth)});
	}

	//-------------------------------------------
	public async NewSudokuMain(add2pool:boolean = false):Promise<ViewSudokuMain>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewSudokuMain");
			if(node) {
				return new Promise<ViewSudokuMain>(resolve=>{resolve(node.getComponent(ViewSudokuMain))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuMain");
			return new Promise<ViewSudokuMain>(resolve=>{
				node = AntPoolObject.Instantiate("ViewSudokuMain", prefab);
				if(!this.statis["SudokuMain"]) {
					this.statis["SudokuMain"] = 0;
				}
				this.statis["SudokuMain"]++;
				let view = node.addComponent("ViewSudokuMain");
				try {
					node.addComponent("LogicSudokuMain");
				} catch(e){
					AntLog.Warn("prefab SudokuMain has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuMain");
			return new Promise<ViewSudokuMain>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["SudokuMain"]) {
					this.statis["SudokuMain"] = 0;
				}
				this.statis["SudokuMain"]++;
				node.active = true;
				let view = node.addComponent("ViewSudokuMain");
				try {
					node.addComponent("LogicSudokuMain");
				} catch(e){
					AntLog.Warn("prefab SudokuMain has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetSudokuMain(add2pool:boolean = true):Promise<ViewSudokuMain>{
		if(!this._SudokuMain){
			this._SudokuMain = await this.NewSudokuMain();
		}

		return new Promise<ViewSudokuMain>(resolve=>{resolve(this._SudokuMain)});
	}

	//-------------------------------------------
	public async NewSudokuRankResult(add2pool:boolean = false):Promise<ViewSudokuRankResult>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewSudokuRankResult");
			if(node) {
				return new Promise<ViewSudokuRankResult>(resolve=>{resolve(node.getComponent(ViewSudokuRankResult))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankResult");
			return new Promise<ViewSudokuRankResult>(resolve=>{
				node = AntPoolObject.Instantiate("ViewSudokuRankResult", prefab);
				if(!this.statis["SudokuRankResult"]) {
					this.statis["SudokuRankResult"] = 0;
				}
				this.statis["SudokuRankResult"]++;
				let view = node.addComponent("ViewSudokuRankResult");
				try {
					node.addComponent("LogicSudokuRankResult");
				} catch(e){
					AntLog.Warn("prefab SudokuRankResult has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankResult");
			return new Promise<ViewSudokuRankResult>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["SudokuRankResult"]) {
					this.statis["SudokuRankResult"] = 0;
				}
				this.statis["SudokuRankResult"]++;
				node.active = true;
				let view = node.addComponent("ViewSudokuRankResult");
				try {
					node.addComponent("LogicSudokuRankResult");
				} catch(e){
					AntLog.Warn("prefab SudokuRankResult has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetSudokuRankResult(add2pool:boolean = true):Promise<ViewSudokuRankResult>{
		if(!this._SudokuRankResult){
			this._SudokuRankResult = await this.NewSudokuRankResult();
		}

		return new Promise<ViewSudokuRankResult>(resolve=>{resolve(this._SudokuRankResult)});
	}

	//-------------------------------------------
	public async NewSudokuRankSurpass(add2pool:boolean = false):Promise<ViewSudokuRankSurpass>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewSudokuRankSurpass");
			if(node) {
				return new Promise<ViewSudokuRankSurpass>(resolve=>{resolve(node.getComponent(ViewSudokuRankSurpass))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankSurpass");
			return new Promise<ViewSudokuRankSurpass>(resolve=>{
				node = AntPoolObject.Instantiate("ViewSudokuRankSurpass", prefab);
				if(!this.statis["SudokuRankSurpass"]) {
					this.statis["SudokuRankSurpass"] = 0;
				}
				this.statis["SudokuRankSurpass"]++;
				let view = node.addComponent("ViewSudokuRankSurpass");
				try {
					node.addComponent("LogicSudokuRankSurpass");
				} catch(e){
					AntLog.Warn("prefab SudokuRankSurpass has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankSurpass");
			return new Promise<ViewSudokuRankSurpass>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["SudokuRankSurpass"]) {
					this.statis["SudokuRankSurpass"] = 0;
				}
				this.statis["SudokuRankSurpass"]++;
				node.active = true;
				let view = node.addComponent("ViewSudokuRankSurpass");
				try {
					node.addComponent("LogicSudokuRankSurpass");
				} catch(e){
					AntLog.Warn("prefab SudokuRankSurpass has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetSudokuRankSurpass(add2pool:boolean = true):Promise<ViewSudokuRankSurpass>{
		if(!this._SudokuRankSurpass){
			this._SudokuRankSurpass = await this.NewSudokuRankSurpass();
		}

		return new Promise<ViewSudokuRankSurpass>(resolve=>{resolve(this._SudokuRankSurpass)});
	}

	//-------------------------------------------
	public async NewSudokuRankView(add2pool:boolean = false):Promise<ViewSudokuRankView>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewSudokuRankView");
			if(node) {
				return new Promise<ViewSudokuRankView>(resolve=>{resolve(node.getComponent(ViewSudokuRankView))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankView");
			return new Promise<ViewSudokuRankView>(resolve=>{
				node = AntPoolObject.Instantiate("ViewSudokuRankView", prefab);
				if(!this.statis["SudokuRankView"]) {
					this.statis["SudokuRankView"] = 0;
				}
				this.statis["SudokuRankView"]++;
				let view = node.addComponent("ViewSudokuRankView");
				try {
					node.addComponent("LogicSudokuRankView");
				} catch(e){
					AntLog.Warn("prefab SudokuRankView has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/SudokuRankView");
			return new Promise<ViewSudokuRankView>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["SudokuRankView"]) {
					this.statis["SudokuRankView"] = 0;
				}
				this.statis["SudokuRankView"]++;
				node.active = true;
				let view = node.addComponent("ViewSudokuRankView");
				try {
					node.addComponent("LogicSudokuRankView");
				} catch(e){
					AntLog.Warn("prefab SudokuRankView has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetSudokuRankView(add2pool:boolean = true):Promise<ViewSudokuRankView>{
		if(!this._SudokuRankView){
			this._SudokuRankView = await this.NewSudokuRankView();
		}

		return new Promise<ViewSudokuRankView>(resolve=>{resolve(this._SudokuRankView)});
	}

	//-------------------------------------------
	public async NewUIRankList(add2pool:boolean = false):Promise<ViewUIRankList>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewUIRankList");
			if(node) {
				return new Promise<ViewUIRankList>(resolve=>{resolve(node.getComponent(ViewUIRankList))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/UIRankList");
			return new Promise<ViewUIRankList>(resolve=>{
				node = AntPoolObject.Instantiate("ViewUIRankList", prefab);
				if(!this.statis["UIRankList"]) {
					this.statis["UIRankList"] = 0;
				}
				this.statis["UIRankList"]++;
				let view = node.addComponent("ViewUIRankList");
				try {
					node.addComponent("LogicUIRankList");
				} catch(e){
					AntLog.Warn("prefab UIRankList has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("sudoku/prefab/UIRankList");
			return new Promise<ViewUIRankList>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["UIRankList"]) {
					this.statis["UIRankList"] = 0;
				}
				this.statis["UIRankList"]++;
				node.active = true;
				let view = node.addComponent("ViewUIRankList");
				try {
					node.addComponent("LogicUIRankList");
				} catch(e){
					AntLog.Warn("prefab UIRankList has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetUIRankList(add2pool:boolean = true):Promise<ViewUIRankList>{
		if(!this._UIRankList){
			this._UIRankList = await this.NewUIRankList();
		}

		return new Promise<ViewUIRankList>(resolve=>{resolve(this._UIRankList)});
	}

	//-------------------------------------------
	public async NewBlockCom(add2pool:boolean = false):Promise<ViewBlockCom>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBlockCom");
			if(node) {
				return new Promise<ViewBlockCom>(resolve=>{resolve(node.getComponent(ViewBlockCom))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/BlockCom");
			return new Promise<ViewBlockCom>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBlockCom", prefab);
				if(!this.statis["BlockCom"]) {
					this.statis["BlockCom"] = 0;
				}
				this.statis["BlockCom"]++;
				let view = node.addComponent("ViewBlockCom");
				try {
					node.addComponent("LogicBlockCom");
				} catch(e){
					AntLog.Warn("prefab BlockCom has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/BlockCom");
			return new Promise<ViewBlockCom>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BlockCom"]) {
					this.statis["BlockCom"] = 0;
				}
				this.statis["BlockCom"]++;
				node.active = true;
				let view = node.addComponent("ViewBlockCom");
				try {
					node.addComponent("LogicBlockCom");
				} catch(e){
					AntLog.Warn("prefab BlockCom has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBlockCom(add2pool:boolean = true):Promise<ViewBlockCom>{
		if(!this._BlockCom){
			this._BlockCom = await this.NewBlockCom();
		}

		return new Promise<ViewBlockCom>(resolve=>{resolve(this._BlockCom)});
	}

	//-------------------------------------------
	public async NewCustomsLayer(add2pool:boolean = false):Promise<ViewCustomsLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCustomsLayer");
			if(node) {
				return new Promise<ViewCustomsLayer>(resolve=>{resolve(node.getComponent(ViewCustomsLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/CustomsLayer");
			return new Promise<ViewCustomsLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCustomsLayer", prefab);
				if(!this.statis["CustomsLayer"]) {
					this.statis["CustomsLayer"] = 0;
				}
				this.statis["CustomsLayer"]++;
				let view = node.addComponent("ViewCustomsLayer");
				try {
					node.addComponent("LogicCustomsLayer");
				} catch(e){
					AntLog.Warn("prefab CustomsLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/CustomsLayer");
			return new Promise<ViewCustomsLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CustomsLayer"]) {
					this.statis["CustomsLayer"] = 0;
				}
				this.statis["CustomsLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewCustomsLayer");
				try {
					node.addComponent("LogicCustomsLayer");
				} catch(e){
					AntLog.Warn("prefab CustomsLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCustomsLayer(add2pool:boolean = true):Promise<ViewCustomsLayer>{
		if(!this._CustomsLayer){
			this._CustomsLayer = await this.NewCustomsLayer();
		}

		return new Promise<ViewCustomsLayer>(resolve=>{resolve(this._CustomsLayer)});
	}

	//-------------------------------------------
	public async NewOLChallengeGameLayer(add2pool:boolean = false):Promise<ViewOLChallengeGameLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLChallengeGameLayer");
			if(node) {
				return new Promise<ViewOLChallengeGameLayer>(resolve=>{resolve(node.getComponent(ViewOLChallengeGameLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLChallengeGameLayer");
			return new Promise<ViewOLChallengeGameLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLChallengeGameLayer", prefab);
				if(!this.statis["OLChallengeGameLayer"]) {
					this.statis["OLChallengeGameLayer"] = 0;
				}
				this.statis["OLChallengeGameLayer"]++;
				let view = node.addComponent("ViewOLChallengeGameLayer");
				try {
					node.addComponent("LogicOLChallengeGameLayer");
				} catch(e){
					AntLog.Warn("prefab OLChallengeGameLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLChallengeGameLayer");
			return new Promise<ViewOLChallengeGameLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLChallengeGameLayer"]) {
					this.statis["OLChallengeGameLayer"] = 0;
				}
				this.statis["OLChallengeGameLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewOLChallengeGameLayer");
				try {
					node.addComponent("LogicOLChallengeGameLayer");
				} catch(e){
					AntLog.Warn("prefab OLChallengeGameLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLChallengeGameLayer(add2pool:boolean = true):Promise<ViewOLChallengeGameLayer>{
		if(!this._OLChallengeGameLayer){
			this._OLChallengeGameLayer = await this.NewOLChallengeGameLayer();
		}

		return new Promise<ViewOLChallengeGameLayer>(resolve=>{resolve(this._OLChallengeGameLayer)});
	}

	//-------------------------------------------
	public async NewOLCustomizationLayer(add2pool:boolean = false):Promise<ViewOLCustomizationLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLCustomizationLayer");
			if(node) {
				return new Promise<ViewOLCustomizationLayer>(resolve=>{resolve(node.getComponent(ViewOLCustomizationLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLCustomizationLayer");
			return new Promise<ViewOLCustomizationLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLCustomizationLayer", prefab);
				if(!this.statis["OLCustomizationLayer"]) {
					this.statis["OLCustomizationLayer"] = 0;
				}
				this.statis["OLCustomizationLayer"]++;
				let view = node.addComponent("ViewOLCustomizationLayer");
				try {
					node.addComponent("LogicOLCustomizationLayer");
				} catch(e){
					AntLog.Warn("prefab OLCustomizationLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLCustomizationLayer");
			return new Promise<ViewOLCustomizationLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLCustomizationLayer"]) {
					this.statis["OLCustomizationLayer"] = 0;
				}
				this.statis["OLCustomizationLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewOLCustomizationLayer");
				try {
					node.addComponent("LogicOLCustomizationLayer");
				} catch(e){
					AntLog.Warn("prefab OLCustomizationLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLCustomizationLayer(add2pool:boolean = true):Promise<ViewOLCustomizationLayer>{
		if(!this._OLCustomizationLayer){
			this._OLCustomizationLayer = await this.NewOLCustomizationLayer();
		}

		return new Promise<ViewOLCustomizationLayer>(resolve=>{resolve(this._OLCustomizationLayer)});
	}

	//-------------------------------------------
	public async NewOLGameLayer(add2pool:boolean = false):Promise<ViewOLGameLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLGameLayer");
			if(node) {
				return new Promise<ViewOLGameLayer>(resolve=>{resolve(node.getComponent(ViewOLGameLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLGameLayer");
			return new Promise<ViewOLGameLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLGameLayer", prefab);
				if(!this.statis["OLGameLayer"]) {
					this.statis["OLGameLayer"] = 0;
				}
				this.statis["OLGameLayer"]++;
				let view = node.addComponent("ViewOLGameLayer");
				try {
					node.addComponent("LogicOLGameLayer");
				} catch(e){
					AntLog.Warn("prefab OLGameLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLGameLayer");
			return new Promise<ViewOLGameLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLGameLayer"]) {
					this.statis["OLGameLayer"] = 0;
				}
				this.statis["OLGameLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewOLGameLayer");
				try {
					node.addComponent("LogicOLGameLayer");
				} catch(e){
					AntLog.Warn("prefab OLGameLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLGameLayer(add2pool:boolean = true):Promise<ViewOLGameLayer>{
		if(!this._OLGameLayer){
			this._OLGameLayer = await this.NewOLGameLayer();
		}

		return new Promise<ViewOLGameLayer>(resolve=>{resolve(this._OLGameLayer)});
	}

	//-------------------------------------------
	public async NewOLGetDogDialog(add2pool:boolean = false):Promise<ViewOLGetDogDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLGetDogDialog");
			if(node) {
				return new Promise<ViewOLGetDogDialog>(resolve=>{resolve(node.getComponent(ViewOLGetDogDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLGetDogDialog");
			return new Promise<ViewOLGetDogDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLGetDogDialog", prefab);
				if(!this.statis["OLGetDogDialog"]) {
					this.statis["OLGetDogDialog"] = 0;
				}
				this.statis["OLGetDogDialog"]++;
				let view = node.addComponent("ViewOLGetDogDialog");
				try {
					node.addComponent("LogicOLGetDogDialog");
				} catch(e){
					AntLog.Warn("prefab OLGetDogDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLGetDogDialog");
			return new Promise<ViewOLGetDogDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLGetDogDialog"]) {
					this.statis["OLGetDogDialog"] = 0;
				}
				this.statis["OLGetDogDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewOLGetDogDialog");
				try {
					node.addComponent("LogicOLGetDogDialog");
				} catch(e){
					AntLog.Warn("prefab OLGetDogDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLGetDogDialog(add2pool:boolean = true):Promise<ViewOLGetDogDialog>{
		if(!this._OLGetDogDialog){
			this._OLGetDogDialog = await this.NewOLGetDogDialog();
		}

		return new Promise<ViewOLGetDogDialog>(resolve=>{resolve(this._OLGetDogDialog)});
	}

	//-------------------------------------------
	public async NewOLRankLayer(add2pool:boolean = false):Promise<ViewOLRankLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLRankLayer");
			if(node) {
				return new Promise<ViewOLRankLayer>(resolve=>{resolve(node.getComponent(ViewOLRankLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLRankLayer");
			return new Promise<ViewOLRankLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLRankLayer", prefab);
				if(!this.statis["OLRankLayer"]) {
					this.statis["OLRankLayer"] = 0;
				}
				this.statis["OLRankLayer"]++;
				let view = node.addComponent("ViewOLRankLayer");
				try {
					node.addComponent("LogicOLRankLayer");
				} catch(e){
					AntLog.Warn("prefab OLRankLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLRankLayer");
			return new Promise<ViewOLRankLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLRankLayer"]) {
					this.statis["OLRankLayer"] = 0;
				}
				this.statis["OLRankLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewOLRankLayer");
				try {
					node.addComponent("LogicOLRankLayer");
				} catch(e){
					AntLog.Warn("prefab OLRankLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLRankLayer(add2pool:boolean = true):Promise<ViewOLRankLayer>{
		if(!this._OLRankLayer){
			this._OLRankLayer = await this.NewOLRankLayer();
		}

		return new Promise<ViewOLRankLayer>(resolve=>{resolve(this._OLRankLayer)});
	}

	//-------------------------------------------
	public async NewOLResultDialog(add2pool:boolean = false):Promise<ViewOLResultDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLResultDialog");
			if(node) {
				return new Promise<ViewOLResultDialog>(resolve=>{resolve(node.getComponent(ViewOLResultDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLResultDialog");
			return new Promise<ViewOLResultDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLResultDialog", prefab);
				if(!this.statis["OLResultDialog"]) {
					this.statis["OLResultDialog"] = 0;
				}
				this.statis["OLResultDialog"]++;
				let view = node.addComponent("ViewOLResultDialog");
				try {
					node.addComponent("LogicOLResultDialog");
				} catch(e){
					AntLog.Warn("prefab OLResultDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLResultDialog");
			return new Promise<ViewOLResultDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLResultDialog"]) {
					this.statis["OLResultDialog"] = 0;
				}
				this.statis["OLResultDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewOLResultDialog");
				try {
					node.addComponent("LogicOLResultDialog");
				} catch(e){
					AntLog.Warn("prefab OLResultDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLResultDialog(add2pool:boolean = true):Promise<ViewOLResultDialog>{
		if(!this._OLResultDialog){
			this._OLResultDialog = await this.NewOLResultDialog();
		}

		return new Promise<ViewOLResultDialog>(resolve=>{resolve(this._OLResultDialog)});
	}

	//-------------------------------------------
	public async NewOLShopLayer(add2pool:boolean = false):Promise<ViewOLShopLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewOLShopLayer");
			if(node) {
				return new Promise<ViewOLShopLayer>(resolve=>{resolve(node.getComponent(ViewOLShopLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLShopLayer");
			return new Promise<ViewOLShopLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewOLShopLayer", prefab);
				if(!this.statis["OLShopLayer"]) {
					this.statis["OLShopLayer"] = 0;
				}
				this.statis["OLShopLayer"]++;
				let view = node.addComponent("ViewOLShopLayer");
				try {
					node.addComponent("LogicOLShopLayer");
				} catch(e){
					AntLog.Warn("prefab OLShopLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/OLShopLayer");
			return new Promise<ViewOLShopLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["OLShopLayer"]) {
					this.statis["OLShopLayer"] = 0;
				}
				this.statis["OLShopLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewOLShopLayer");
				try {
					node.addComponent("LogicOLShopLayer");
				} catch(e){
					AntLog.Warn("prefab OLShopLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetOLShopLayer(add2pool:boolean = true):Promise<ViewOLShopLayer>{
		if(!this._OLShopLayer){
			this._OLShopLayer = await this.NewOLShopLayer();
		}

		return new Promise<ViewOLShopLayer>(resolve=>{resolve(this._OLShopLayer)});
	}

	//-------------------------------------------
	public async NewStartLayer(add2pool:boolean = false):Promise<ViewStartLayer>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewStartLayer");
			if(node) {
				return new Promise<ViewStartLayer>(resolve=>{resolve(node.getComponent(ViewStartLayer))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/StartLayer");
			return new Promise<ViewStartLayer>(resolve=>{
				node = AntPoolObject.Instantiate("ViewStartLayer", prefab);
				if(!this.statis["StartLayer"]) {
					this.statis["StartLayer"] = 0;
				}
				this.statis["StartLayer"]++;
				let view = node.addComponent("ViewStartLayer");
				try {
					node.addComponent("LogicStartLayer");
				} catch(e){
					AntLog.Warn("prefab StartLayer has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("oneline/prefab/StartLayer");
			return new Promise<ViewStartLayer>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["StartLayer"]) {
					this.statis["StartLayer"] = 0;
				}
				this.statis["StartLayer"]++;
				node.active = true;
				let view = node.addComponent("ViewStartLayer");
				try {
					node.addComponent("LogicStartLayer");
				} catch(e){
					AntLog.Warn("prefab StartLayer has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetStartLayer(add2pool:boolean = true):Promise<ViewStartLayer>{
		if(!this._StartLayer){
			this._StartLayer = await this.NewStartLayer();
		}

		return new Promise<ViewStartLayer>(resolve=>{resolve(this._StartLayer)});
	}

	//-------------------------------------------
	public async NewCuteClothesView(add2pool:boolean = false):Promise<ViewCuteClothesView>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteClothesView");
			if(node) {
				return new Promise<ViewCuteClothesView>(resolve=>{resolve(node.getComponent(ViewCuteClothesView))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteClothesView");
			return new Promise<ViewCuteClothesView>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteClothesView", prefab);
				if(!this.statis["CuteClothesView"]) {
					this.statis["CuteClothesView"] = 0;
				}
				this.statis["CuteClothesView"]++;
				let view = node.addComponent("ViewCuteClothesView");
				try {
					node.addComponent("LogicCuteClothesView");
				} catch(e){
					AntLog.Warn("prefab CuteClothesView has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteClothesView");
			return new Promise<ViewCuteClothesView>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteClothesView"]) {
					this.statis["CuteClothesView"] = 0;
				}
				this.statis["CuteClothesView"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteClothesView");
				try {
					node.addComponent("LogicCuteClothesView");
				} catch(e){
					AntLog.Warn("prefab CuteClothesView has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteClothesView(add2pool:boolean = true):Promise<ViewCuteClothesView>{
		if(!this._CuteClothesView){
			this._CuteClothesView = await this.NewCuteClothesView();
		}

		return new Promise<ViewCuteClothesView>(resolve=>{resolve(this._CuteClothesView)});
	}

	//-------------------------------------------
	public async NewCuteGame(add2pool:boolean = false):Promise<ViewCuteGame>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteGame");
			if(node) {
				return new Promise<ViewCuteGame>(resolve=>{resolve(node.getComponent(ViewCuteGame))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGame");
			return new Promise<ViewCuteGame>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteGame", prefab);
				if(!this.statis["CuteGame"]) {
					this.statis["CuteGame"] = 0;
				}
				this.statis["CuteGame"]++;
				let view = node.addComponent("ViewCuteGame");
				try {
					node.addComponent("LogicCuteGame");
				} catch(e){
					AntLog.Warn("prefab CuteGame has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGame");
			return new Promise<ViewCuteGame>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteGame"]) {
					this.statis["CuteGame"] = 0;
				}
				this.statis["CuteGame"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteGame");
				try {
					node.addComponent("LogicCuteGame");
				} catch(e){
					AntLog.Warn("prefab CuteGame has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteGame(add2pool:boolean = true):Promise<ViewCuteGame>{
		if(!this._CuteGame){
			this._CuteGame = await this.NewCuteGame();
		}

		return new Promise<ViewCuteGame>(resolve=>{resolve(this._CuteGame)});
	}

	//-------------------------------------------
	public async NewCuteGetRewardByVideo(add2pool:boolean = false):Promise<ViewCuteGetRewardByVideo>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteGetRewardByVideo");
			if(node) {
				return new Promise<ViewCuteGetRewardByVideo>(resolve=>{resolve(node.getComponent(ViewCuteGetRewardByVideo))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetRewardByVideo");
			return new Promise<ViewCuteGetRewardByVideo>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteGetRewardByVideo", prefab);
				if(!this.statis["CuteGetRewardByVideo"]) {
					this.statis["CuteGetRewardByVideo"] = 0;
				}
				this.statis["CuteGetRewardByVideo"]++;
				let view = node.addComponent("ViewCuteGetRewardByVideo");
				try {
					node.addComponent("LogicCuteGetRewardByVideo");
				} catch(e){
					AntLog.Warn("prefab CuteGetRewardByVideo has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetRewardByVideo");
			return new Promise<ViewCuteGetRewardByVideo>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteGetRewardByVideo"]) {
					this.statis["CuteGetRewardByVideo"] = 0;
				}
				this.statis["CuteGetRewardByVideo"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteGetRewardByVideo");
				try {
					node.addComponent("LogicCuteGetRewardByVideo");
				} catch(e){
					AntLog.Warn("prefab CuteGetRewardByVideo has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteGetRewardByVideo(add2pool:boolean = true):Promise<ViewCuteGetRewardByVideo>{
		if(!this._CuteGetRewardByVideo){
			this._CuteGetRewardByVideo = await this.NewCuteGetRewardByVideo();
		}

		return new Promise<ViewCuteGetRewardByVideo>(resolve=>{resolve(this._CuteGetRewardByVideo)});
	}

	//-------------------------------------------
	public async NewCuteGetRewardDialog(add2pool:boolean = false):Promise<ViewCuteGetRewardDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteGetRewardDialog");
			if(node) {
				return new Promise<ViewCuteGetRewardDialog>(resolve=>{resolve(node.getComponent(ViewCuteGetRewardDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetRewardDialog");
			return new Promise<ViewCuteGetRewardDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteGetRewardDialog", prefab);
				if(!this.statis["CuteGetRewardDialog"]) {
					this.statis["CuteGetRewardDialog"] = 0;
				}
				this.statis["CuteGetRewardDialog"]++;
				let view = node.addComponent("ViewCuteGetRewardDialog");
				try {
					node.addComponent("LogicCuteGetRewardDialog");
				} catch(e){
					AntLog.Warn("prefab CuteGetRewardDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetRewardDialog");
			return new Promise<ViewCuteGetRewardDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteGetRewardDialog"]) {
					this.statis["CuteGetRewardDialog"] = 0;
				}
				this.statis["CuteGetRewardDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteGetRewardDialog");
				try {
					node.addComponent("LogicCuteGetRewardDialog");
				} catch(e){
					AntLog.Warn("prefab CuteGetRewardDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteGetRewardDialog(add2pool:boolean = true):Promise<ViewCuteGetRewardDialog>{
		if(!this._CuteGetRewardDialog){
			this._CuteGetRewardDialog = await this.NewCuteGetRewardDialog();
		}

		return new Promise<ViewCuteGetRewardDialog>(resolve=>{resolve(this._CuteGetRewardDialog)});
	}

	//-------------------------------------------
	public async NewCuteGetSkinDialog(add2pool:boolean = false):Promise<ViewCuteGetSkinDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteGetSkinDialog");
			if(node) {
				return new Promise<ViewCuteGetSkinDialog>(resolve=>{resolve(node.getComponent(ViewCuteGetSkinDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetSkinDialog");
			return new Promise<ViewCuteGetSkinDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteGetSkinDialog", prefab);
				if(!this.statis["CuteGetSkinDialog"]) {
					this.statis["CuteGetSkinDialog"] = 0;
				}
				this.statis["CuteGetSkinDialog"]++;
				let view = node.addComponent("ViewCuteGetSkinDialog");
				try {
					node.addComponent("LogicCuteGetSkinDialog");
				} catch(e){
					AntLog.Warn("prefab CuteGetSkinDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGetSkinDialog");
			return new Promise<ViewCuteGetSkinDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteGetSkinDialog"]) {
					this.statis["CuteGetSkinDialog"] = 0;
				}
				this.statis["CuteGetSkinDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteGetSkinDialog");
				try {
					node.addComponent("LogicCuteGetSkinDialog");
				} catch(e){
					AntLog.Warn("prefab CuteGetSkinDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteGetSkinDialog(add2pool:boolean = true):Promise<ViewCuteGetSkinDialog>{
		if(!this._CuteGetSkinDialog){
			this._CuteGetSkinDialog = await this.NewCuteGetSkinDialog();
		}

		return new Promise<ViewCuteGetSkinDialog>(resolve=>{resolve(this._CuteGetSkinDialog)});
	}

	//-------------------------------------------
	public async NewCuteGuideFinger(add2pool:boolean = false):Promise<ViewCuteGuideFinger>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteGuideFinger");
			if(node) {
				return new Promise<ViewCuteGuideFinger>(resolve=>{resolve(node.getComponent(ViewCuteGuideFinger))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGuideFinger");
			return new Promise<ViewCuteGuideFinger>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteGuideFinger", prefab);
				if(!this.statis["CuteGuideFinger"]) {
					this.statis["CuteGuideFinger"] = 0;
				}
				this.statis["CuteGuideFinger"]++;
				let view = node.addComponent("ViewCuteGuideFinger");
				try {
					node.addComponent("LogicCuteGuideFinger");
				} catch(e){
					AntLog.Warn("prefab CuteGuideFinger has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteGuideFinger");
			return new Promise<ViewCuteGuideFinger>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteGuideFinger"]) {
					this.statis["CuteGuideFinger"] = 0;
				}
				this.statis["CuteGuideFinger"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteGuideFinger");
				try {
					node.addComponent("LogicCuteGuideFinger");
				} catch(e){
					AntLog.Warn("prefab CuteGuideFinger has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteGuideFinger(add2pool:boolean = true):Promise<ViewCuteGuideFinger>{
		if(!this._CuteGuideFinger){
			this._CuteGuideFinger = await this.NewCuteGuideFinger();
		}

		return new Promise<ViewCuteGuideFinger>(resolve=>{resolve(this._CuteGuideFinger)});
	}

	//-------------------------------------------
	public async NewCuteJellyItem(add2pool:boolean = false):Promise<ViewCuteJellyItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteJellyItem");
			if(node) {
				return new Promise<ViewCuteJellyItem>(resolve=>{resolve(node.getComponent(ViewCuteJellyItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteJellyItem");
			return new Promise<ViewCuteJellyItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteJellyItem", prefab);
				if(!this.statis["CuteJellyItem"]) {
					this.statis["CuteJellyItem"] = 0;
				}
				this.statis["CuteJellyItem"]++;
				let view = node.addComponent("ViewCuteJellyItem");
				try {
					node.addComponent("LogicCuteJellyItem");
				} catch(e){
					AntLog.Warn("prefab CuteJellyItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteJellyItem");
			return new Promise<ViewCuteJellyItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteJellyItem"]) {
					this.statis["CuteJellyItem"] = 0;
				}
				this.statis["CuteJellyItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteJellyItem");
				try {
					node.addComponent("LogicCuteJellyItem");
				} catch(e){
					AntLog.Warn("prefab CuteJellyItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteJellyItem(add2pool:boolean = true):Promise<ViewCuteJellyItem>{
		if(!this._CuteJellyItem){
			this._CuteJellyItem = await this.NewCuteJellyItem();
		}

		return new Promise<ViewCuteJellyItem>(resolve=>{resolve(this._CuteJellyItem)});
	}

	//-------------------------------------------
	public async NewCuteJellySkinItem(add2pool:boolean = false):Promise<ViewCuteJellySkinItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteJellySkinItem");
			if(node) {
				return new Promise<ViewCuteJellySkinItem>(resolve=>{resolve(node.getComponent(ViewCuteJellySkinItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteJellySkinItem");
			return new Promise<ViewCuteJellySkinItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteJellySkinItem", prefab);
				if(!this.statis["CuteJellySkinItem"]) {
					this.statis["CuteJellySkinItem"] = 0;
				}
				this.statis["CuteJellySkinItem"]++;
				let view = node.addComponent("ViewCuteJellySkinItem");
				try {
					node.addComponent("LogicCuteJellySkinItem");
				} catch(e){
					AntLog.Warn("prefab CuteJellySkinItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteJellySkinItem");
			return new Promise<ViewCuteJellySkinItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteJellySkinItem"]) {
					this.statis["CuteJellySkinItem"] = 0;
				}
				this.statis["CuteJellySkinItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteJellySkinItem");
				try {
					node.addComponent("LogicCuteJellySkinItem");
				} catch(e){
					AntLog.Warn("prefab CuteJellySkinItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteJellySkinItem(add2pool:boolean = true):Promise<ViewCuteJellySkinItem>{
		if(!this._CuteJellySkinItem){
			this._CuteJellySkinItem = await this.NewCuteJellySkinItem();
		}

		return new Promise<ViewCuteJellySkinItem>(resolve=>{resolve(this._CuteJellySkinItem)});
	}

	//-------------------------------------------
	public async NewCutePlayerItem(add2pool:boolean = false):Promise<ViewCutePlayerItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCutePlayerItem");
			if(node) {
				return new Promise<ViewCutePlayerItem>(resolve=>{resolve(node.getComponent(ViewCutePlayerItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CutePlayerItem");
			return new Promise<ViewCutePlayerItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCutePlayerItem", prefab);
				if(!this.statis["CutePlayerItem"]) {
					this.statis["CutePlayerItem"] = 0;
				}
				this.statis["CutePlayerItem"]++;
				let view = node.addComponent("ViewCutePlayerItem");
				try {
					node.addComponent("LogicCutePlayerItem");
				} catch(e){
					AntLog.Warn("prefab CutePlayerItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CutePlayerItem");
			return new Promise<ViewCutePlayerItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CutePlayerItem"]) {
					this.statis["CutePlayerItem"] = 0;
				}
				this.statis["CutePlayerItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCutePlayerItem");
				try {
					node.addComponent("LogicCutePlayerItem");
				} catch(e){
					AntLog.Warn("prefab CutePlayerItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCutePlayerItem(add2pool:boolean = true):Promise<ViewCutePlayerItem>{
		if(!this._CutePlayerItem){
			this._CutePlayerItem = await this.NewCutePlayerItem();
		}

		return new Promise<ViewCutePlayerItem>(resolve=>{resolve(this._CutePlayerItem)});
	}

	//-------------------------------------------
	public async NewCutePlayerSkinItem(add2pool:boolean = false):Promise<ViewCutePlayerSkinItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCutePlayerSkinItem");
			if(node) {
				return new Promise<ViewCutePlayerSkinItem>(resolve=>{resolve(node.getComponent(ViewCutePlayerSkinItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CutePlayerSkinItem");
			return new Promise<ViewCutePlayerSkinItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCutePlayerSkinItem", prefab);
				if(!this.statis["CutePlayerSkinItem"]) {
					this.statis["CutePlayerSkinItem"] = 0;
				}
				this.statis["CutePlayerSkinItem"]++;
				let view = node.addComponent("ViewCutePlayerSkinItem");
				try {
					node.addComponent("LogicCutePlayerSkinItem");
				} catch(e){
					AntLog.Warn("prefab CutePlayerSkinItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CutePlayerSkinItem");
			return new Promise<ViewCutePlayerSkinItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CutePlayerSkinItem"]) {
					this.statis["CutePlayerSkinItem"] = 0;
				}
				this.statis["CutePlayerSkinItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCutePlayerSkinItem");
				try {
					node.addComponent("LogicCutePlayerSkinItem");
				} catch(e){
					AntLog.Warn("prefab CutePlayerSkinItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCutePlayerSkinItem(add2pool:boolean = true):Promise<ViewCutePlayerSkinItem>{
		if(!this._CutePlayerSkinItem){
			this._CutePlayerSkinItem = await this.NewCutePlayerSkinItem();
		}

		return new Promise<ViewCutePlayerSkinItem>(resolve=>{resolve(this._CutePlayerSkinItem)});
	}

	//-------------------------------------------
	public async NewCuteRank(add2pool:boolean = false):Promise<ViewCuteRank>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteRank");
			if(node) {
				return new Promise<ViewCuteRank>(resolve=>{resolve(node.getComponent(ViewCuteRank))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteRank");
			return new Promise<ViewCuteRank>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteRank", prefab);
				if(!this.statis["CuteRank"]) {
					this.statis["CuteRank"] = 0;
				}
				this.statis["CuteRank"]++;
				let view = node.addComponent("ViewCuteRank");
				try {
					node.addComponent("LogicCuteRank");
				} catch(e){
					AntLog.Warn("prefab CuteRank has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteRank");
			return new Promise<ViewCuteRank>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteRank"]) {
					this.statis["CuteRank"] = 0;
				}
				this.statis["CuteRank"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteRank");
				try {
					node.addComponent("LogicCuteRank");
				} catch(e){
					AntLog.Warn("prefab CuteRank has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteRank(add2pool:boolean = true):Promise<ViewCuteRank>{
		if(!this._CuteRank){
			this._CuteRank = await this.NewCuteRank();
		}

		return new Promise<ViewCuteRank>(resolve=>{resolve(this._CuteRank)});
	}

	//-------------------------------------------
	public async NewCuteResultDialog(add2pool:boolean = false):Promise<ViewCuteResultDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteResultDialog");
			if(node) {
				return new Promise<ViewCuteResultDialog>(resolve=>{resolve(node.getComponent(ViewCuteResultDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteResultDialog");
			return new Promise<ViewCuteResultDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteResultDialog", prefab);
				if(!this.statis["CuteResultDialog"]) {
					this.statis["CuteResultDialog"] = 0;
				}
				this.statis["CuteResultDialog"]++;
				let view = node.addComponent("ViewCuteResultDialog");
				try {
					node.addComponent("LogicCuteResultDialog");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteResultDialog");
			return new Promise<ViewCuteResultDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteResultDialog"]) {
					this.statis["CuteResultDialog"] = 0;
				}
				this.statis["CuteResultDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteResultDialog");
				try {
					node.addComponent("LogicCuteResultDialog");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteResultDialog(add2pool:boolean = true):Promise<ViewCuteResultDialog>{
		if(!this._CuteResultDialog){
			this._CuteResultDialog = await this.NewCuteResultDialog();
		}

		return new Promise<ViewCuteResultDialog>(resolve=>{resolve(this._CuteResultDialog)});
	}

	//-------------------------------------------
	public async NewCuteReviveDialog(add2pool:boolean = false):Promise<ViewCuteReviveDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteReviveDialog");
			if(node) {
				return new Promise<ViewCuteReviveDialog>(resolve=>{resolve(node.getComponent(ViewCuteReviveDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteReviveDialog");
			return new Promise<ViewCuteReviveDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteReviveDialog", prefab);
				if(!this.statis["CuteReviveDialog"]) {
					this.statis["CuteReviveDialog"] = 0;
				}
				this.statis["CuteReviveDialog"]++;
				let view = node.addComponent("ViewCuteReviveDialog");
				try {
					node.addComponent("LogicCuteReviveDialog");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteReviveDialog");
			return new Promise<ViewCuteReviveDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteReviveDialog"]) {
					this.statis["CuteReviveDialog"] = 0;
				}
				this.statis["CuteReviveDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteReviveDialog");
				try {
					node.addComponent("LogicCuteReviveDialog");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteReviveDialog(add2pool:boolean = true):Promise<ViewCuteReviveDialog>{
		if(!this._CuteReviveDialog){
			this._CuteReviveDialog = await this.NewCuteReviveDialog();
		}

		return new Promise<ViewCuteReviveDialog>(resolve=>{resolve(this._CuteReviveDialog)});
	}

	//-------------------------------------------
	public async NewCuteReviveItem(add2pool:boolean = false):Promise<ViewCuteReviveItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteReviveItem");
			if(node) {
				return new Promise<ViewCuteReviveItem>(resolve=>{resolve(node.getComponent(ViewCuteReviveItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteReviveItem");
			return new Promise<ViewCuteReviveItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteReviveItem", prefab);
				if(!this.statis["CuteReviveItem"]) {
					this.statis["CuteReviveItem"] = 0;
				}
				this.statis["CuteReviveItem"]++;
				let view = node.addComponent("ViewCuteReviveItem");
				try {
					node.addComponent("LogicCuteReviveItem");
				} catch(e){
					AntLog.Warn("prefab CuteReviveItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteReviveItem");
			return new Promise<ViewCuteReviveItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteReviveItem"]) {
					this.statis["CuteReviveItem"] = 0;
				}
				this.statis["CuteReviveItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteReviveItem");
				try {
					node.addComponent("LogicCuteReviveItem");
				} catch(e){
					AntLog.Warn("prefab CuteReviveItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteReviveItem(add2pool:boolean = true):Promise<ViewCuteReviveItem>{
		if(!this._CuteReviveItem){
			this._CuteReviveItem = await this.NewCuteReviveItem();
		}

		return new Promise<ViewCuteReviveItem>(resolve=>{resolve(this._CuteReviveItem)});
	}

	//-------------------------------------------
	public async NewCuteRewardLine(add2pool:boolean = false):Promise<ViewCuteRewardLine>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteRewardLine");
			if(node) {
				return new Promise<ViewCuteRewardLine>(resolve=>{resolve(node.getComponent(ViewCuteRewardLine))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteRewardLine");
			return new Promise<ViewCuteRewardLine>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteRewardLine", prefab);
				if(!this.statis["CuteRewardLine"]) {
					this.statis["CuteRewardLine"] = 0;
				}
				this.statis["CuteRewardLine"]++;
				let view = node.addComponent("ViewCuteRewardLine");
				try {
					node.addComponent("LogicCuteRewardLine");
				} catch(e){
					AntLog.Warn("prefab CuteRewardLine has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteRewardLine");
			return new Promise<ViewCuteRewardLine>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteRewardLine"]) {
					this.statis["CuteRewardLine"] = 0;
				}
				this.statis["CuteRewardLine"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteRewardLine");
				try {
					node.addComponent("LogicCuteRewardLine");
				} catch(e){
					AntLog.Warn("prefab CuteRewardLine has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteRewardLine(add2pool:boolean = true):Promise<ViewCuteRewardLine>{
		if(!this._CuteRewardLine){
			this._CuteRewardLine = await this.NewCuteRewardLine();
		}

		return new Promise<ViewCuteRewardLine>(resolve=>{resolve(this._CuteRewardLine)});
	}

	//-------------------------------------------
	public async NewCuteScoreItem(add2pool:boolean = false):Promise<ViewCuteScoreItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteScoreItem");
			if(node) {
				return new Promise<ViewCuteScoreItem>(resolve=>{resolve(node.getComponent(ViewCuteScoreItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteScoreItem");
			return new Promise<ViewCuteScoreItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteScoreItem", prefab);
				if(!this.statis["CuteScoreItem"]) {
					this.statis["CuteScoreItem"] = 0;
				}
				this.statis["CuteScoreItem"]++;
				let view = node.addComponent("ViewCuteScoreItem");
				try {
					node.addComponent("LogicCuteScoreItem");
				} catch(e){
					AntLog.Warn("prefab CuteScoreItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteScoreItem");
			return new Promise<ViewCuteScoreItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteScoreItem"]) {
					this.statis["CuteScoreItem"] = 0;
				}
				this.statis["CuteScoreItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteScoreItem");
				try {
					node.addComponent("LogicCuteScoreItem");
				} catch(e){
					AntLog.Warn("prefab CuteScoreItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteScoreItem(add2pool:boolean = true):Promise<ViewCuteScoreItem>{
		if(!this._CuteScoreItem){
			this._CuteScoreItem = await this.NewCuteScoreItem();
		}

		return new Promise<ViewCuteScoreItem>(resolve=>{resolve(this._CuteScoreItem)});
	}

	//-------------------------------------------
	public async NewCuteSetting(add2pool:boolean = false):Promise<ViewCuteSetting>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteSetting");
			if(node) {
				return new Promise<ViewCuteSetting>(resolve=>{resolve(node.getComponent(ViewCuteSetting))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteSetting");
			return new Promise<ViewCuteSetting>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteSetting", prefab);
				if(!this.statis["CuteSetting"]) {
					this.statis["CuteSetting"] = 0;
				}
				this.statis["CuteSetting"]++;
				let view = node.addComponent("ViewCuteSetting");
				try {
					node.addComponent("LogicCuteSetting");
				} catch(e){
					AntLog.Warn("prefab CuteSetting has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteSetting");
			return new Promise<ViewCuteSetting>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteSetting"]) {
					this.statis["CuteSetting"] = 0;
				}
				this.statis["CuteSetting"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteSetting");
				try {
					node.addComponent("LogicCuteSetting");
				} catch(e){
					AntLog.Warn("prefab CuteSetting has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteSetting(add2pool:boolean = true):Promise<ViewCuteSetting>{
		if(!this._CuteSetting){
			this._CuteSetting = await this.NewCuteSetting();
		}

		return new Promise<ViewCuteSetting>(resolve=>{resolve(this._CuteSetting)});
	}

	//-------------------------------------------
	public async NewCuteSign(add2pool:boolean = false):Promise<ViewCuteSign>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteSign");
			if(node) {
				return new Promise<ViewCuteSign>(resolve=>{resolve(node.getComponent(ViewCuteSign))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteSign");
			return new Promise<ViewCuteSign>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteSign", prefab);
				if(!this.statis["CuteSign"]) {
					this.statis["CuteSign"] = 0;
				}
				this.statis["CuteSign"]++;
				let view = node.addComponent("ViewCuteSign");
				try {
					node.addComponent("LogicCuteSign");
				} catch(e){
					AntLog.Warn("prefab CuteSign has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteSign");
			return new Promise<ViewCuteSign>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteSign"]) {
					this.statis["CuteSign"] = 0;
				}
				this.statis["CuteSign"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteSign");
				try {
					node.addComponent("LogicCuteSign");
				} catch(e){
					AntLog.Warn("prefab CuteSign has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteSign(add2pool:boolean = true):Promise<ViewCuteSign>{
		if(!this._CuteSign){
			this._CuteSign = await this.NewCuteSign();
		}

		return new Promise<ViewCuteSign>(resolve=>{resolve(this._CuteSign)});
	}

	//-------------------------------------------
	public async NewCuteStarGetAni(add2pool:boolean = false):Promise<ViewCuteStarGetAni>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteStarGetAni");
			if(node) {
				return new Promise<ViewCuteStarGetAni>(resolve=>{resolve(node.getComponent(ViewCuteStarGetAni))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteStarGetAni");
			return new Promise<ViewCuteStarGetAni>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteStarGetAni", prefab);
				if(!this.statis["CuteStarGetAni"]) {
					this.statis["CuteStarGetAni"] = 0;
				}
				this.statis["CuteStarGetAni"]++;
				let view = node.addComponent("ViewCuteStarGetAni");
				try {
					node.addComponent("LogicCuteStarGetAni");
				} catch(e){
					AntLog.Warn("prefab CuteStarGetAni has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteStarGetAni");
			return new Promise<ViewCuteStarGetAni>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteStarGetAni"]) {
					this.statis["CuteStarGetAni"] = 0;
				}
				this.statis["CuteStarGetAni"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteStarGetAni");
				try {
					node.addComponent("LogicCuteStarGetAni");
				} catch(e){
					AntLog.Warn("prefab CuteStarGetAni has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteStarGetAni(add2pool:boolean = true):Promise<ViewCuteStarGetAni>{
		if(!this._CuteStarGetAni){
			this._CuteStarGetAni = await this.NewCuteStarGetAni();
		}

		return new Promise<ViewCuteStarGetAni>(resolve=>{resolve(this._CuteStarGetAni)});
	}

	//-------------------------------------------
	public async NewCuteStarItem(add2pool:boolean = false):Promise<ViewCuteStarItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteStarItem");
			if(node) {
				return new Promise<ViewCuteStarItem>(resolve=>{resolve(node.getComponent(ViewCuteStarItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteStarItem");
			return new Promise<ViewCuteStarItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteStarItem", prefab);
				if(!this.statis["CuteStarItem"]) {
					this.statis["CuteStarItem"] = 0;
				}
				this.statis["CuteStarItem"]++;
				let view = node.addComponent("ViewCuteStarItem");
				try {
					node.addComponent("LogicCuteStarItem");
				} catch(e){
					AntLog.Warn("prefab CuteStarItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteStarItem");
			return new Promise<ViewCuteStarItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteStarItem"]) {
					this.statis["CuteStarItem"] = 0;
				}
				this.statis["CuteStarItem"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteStarItem");
				try {
					node.addComponent("LogicCuteStarItem");
				} catch(e){
					AntLog.Warn("prefab CuteStarItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteStarItem(add2pool:boolean = true):Promise<ViewCuteStarItem>{
		if(!this._CuteStarItem){
			this._CuteStarItem = await this.NewCuteStarItem();
		}

		return new Promise<ViewCuteStarItem>(resolve=>{resolve(this._CuteStarItem)});
	}

	//-------------------------------------------
	public async NewCuteTimeLimitBtn(add2pool:boolean = false):Promise<ViewCuteTimeLimitBtn>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteTimeLimitBtn");
			if(node) {
				return new Promise<ViewCuteTimeLimitBtn>(resolve=>{resolve(node.getComponent(ViewCuteTimeLimitBtn))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteTimeLimitBtn");
			return new Promise<ViewCuteTimeLimitBtn>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteTimeLimitBtn", prefab);
				if(!this.statis["CuteTimeLimitBtn"]) {
					this.statis["CuteTimeLimitBtn"] = 0;
				}
				this.statis["CuteTimeLimitBtn"]++;
				let view = node.addComponent("ViewCuteTimeLimitBtn");
				try {
					node.addComponent("LogicCuteTimeLimitBtn");
				} catch(e){
					AntLog.Warn("prefab CuteTimeLimitBtn has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteTimeLimitBtn");
			return new Promise<ViewCuteTimeLimitBtn>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteTimeLimitBtn"]) {
					this.statis["CuteTimeLimitBtn"] = 0;
				}
				this.statis["CuteTimeLimitBtn"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteTimeLimitBtn");
				try {
					node.addComponent("LogicCuteTimeLimitBtn");
				} catch(e){
					AntLog.Warn("prefab CuteTimeLimitBtn has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteTimeLimitBtn(add2pool:boolean = true):Promise<ViewCuteTimeLimitBtn>{
		if(!this._CuteTimeLimitBtn){
			this._CuteTimeLimitBtn = await this.NewCuteTimeLimitBtn();
		}

		return new Promise<ViewCuteTimeLimitBtn>(resolve=>{resolve(this._CuteTimeLimitBtn)});
	}

	//-------------------------------------------
	public async NewCuteTrySkinDialog(add2pool:boolean = false):Promise<ViewCuteTrySkinDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteTrySkinDialog");
			if(node) {
				return new Promise<ViewCuteTrySkinDialog>(resolve=>{resolve(node.getComponent(ViewCuteTrySkinDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteTrySkinDialog");
			return new Promise<ViewCuteTrySkinDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteTrySkinDialog", prefab);
				if(!this.statis["CuteTrySkinDialog"]) {
					this.statis["CuteTrySkinDialog"] = 0;
				}
				this.statis["CuteTrySkinDialog"]++;
				let view = node.addComponent("ViewCuteTrySkinDialog");
				try {
					node.addComponent("LogicCuteTrySkinDialog");
				} catch(e){
					AntLog.Warn("prefab CuteTrySkinDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteTrySkinDialog");
			return new Promise<ViewCuteTrySkinDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteTrySkinDialog"]) {
					this.statis["CuteTrySkinDialog"] = 0;
				}
				this.statis["CuteTrySkinDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteTrySkinDialog");
				try {
					node.addComponent("LogicCuteTrySkinDialog");
				} catch(e){
					AntLog.Warn("prefab CuteTrySkinDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteTrySkinDialog(add2pool:boolean = true):Promise<ViewCuteTrySkinDialog>{
		if(!this._CuteTrySkinDialog){
			this._CuteTrySkinDialog = await this.NewCuteTrySkinDialog();
		}

		return new Promise<ViewCuteTrySkinDialog>(resolve=>{resolve(this._CuteTrySkinDialog)});
	}

	//-------------------------------------------
	public async NewCuteWheel(add2pool:boolean = false):Promise<ViewCuteWheel>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteWheel");
			if(node) {
				return new Promise<ViewCuteWheel>(resolve=>{resolve(node.getComponent(ViewCuteWheel))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteWheel");
			return new Promise<ViewCuteWheel>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteWheel", prefab);
				if(!this.statis["CuteWheel"]) {
					this.statis["CuteWheel"] = 0;
				}
				this.statis["CuteWheel"]++;
				let view = node.addComponent("ViewCuteWheel");
				try {
					node.addComponent("LogicCuteWheel");
				} catch(e){
					AntLog.Warn("prefab CuteWheel has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/CuteWheel");
			return new Promise<ViewCuteWheel>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteWheel"]) {
					this.statis["CuteWheel"] = 0;
				}
				this.statis["CuteWheel"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteWheel");
				try {
					node.addComponent("LogicCuteWheel");
				} catch(e){
					AntLog.Warn("prefab CuteWheel has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteWheel(add2pool:boolean = true):Promise<ViewCuteWheel>{
		if(!this._CuteWheel){
			this._CuteWheel = await this.NewCuteWheel();
		}

		return new Promise<ViewCuteWheel>(resolve=>{resolve(this._CuteWheel)});
	}

	//-------------------------------------------
	public async NewCuteExportPageQY(add2pool:boolean = false):Promise<ViewCuteExportPageQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteExportPageQY");
			if(node) {
				return new Promise<ViewCuteExportPageQY>(resolve=>{resolve(node.getComponent(ViewCuteExportPageQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteExportPageQY");
			return new Promise<ViewCuteExportPageQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteExportPageQY", prefab);
				if(!this.statis["CuteExportPageQY"]) {
					this.statis["CuteExportPageQY"] = 0;
				}
				this.statis["CuteExportPageQY"]++;
				let view = node.addComponent("ViewCuteExportPageQY");
				try {
					node.addComponent("LogicCuteExportPageQY");
				} catch(e){
					AntLog.Warn("prefab CuteExportPageQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteExportPageQY");
			return new Promise<ViewCuteExportPageQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteExportPageQY"]) {
					this.statis["CuteExportPageQY"] = 0;
				}
				this.statis["CuteExportPageQY"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteExportPageQY");
				try {
					node.addComponent("LogicCuteExportPageQY");
				} catch(e){
					AntLog.Warn("prefab CuteExportPageQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteExportPageQY(add2pool:boolean = true):Promise<ViewCuteExportPageQY>{
		if(!this._CuteExportPageQY){
			this._CuteExportPageQY = await this.NewCuteExportPageQY();
		}

		return new Promise<ViewCuteExportPageQY>(resolve=>{resolve(this._CuteExportPageQY)});
	}

	//-------------------------------------------
	public async NewCuteMainViewAdvQY(add2pool:boolean = false):Promise<ViewCuteMainViewAdvQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteMainViewAdvQY");
			if(node) {
				return new Promise<ViewCuteMainViewAdvQY>(resolve=>{resolve(node.getComponent(ViewCuteMainViewAdvQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteMainViewAdvQY");
			return new Promise<ViewCuteMainViewAdvQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteMainViewAdvQY", prefab);
				if(!this.statis["CuteMainViewAdvQY"]) {
					this.statis["CuteMainViewAdvQY"] = 0;
				}
				this.statis["CuteMainViewAdvQY"]++;
				let view = node.addComponent("ViewCuteMainViewAdvQY");
				try {
					node.addComponent("LogicCuteMainViewAdvQY");
				} catch(e){
					AntLog.Warn("prefab CuteMainViewAdvQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteMainViewAdvQY");
			return new Promise<ViewCuteMainViewAdvQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteMainViewAdvQY"]) {
					this.statis["CuteMainViewAdvQY"] = 0;
				}
				this.statis["CuteMainViewAdvQY"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteMainViewAdvQY");
				try {
					node.addComponent("LogicCuteMainViewAdvQY");
				} catch(e){
					AntLog.Warn("prefab CuteMainViewAdvQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteMainViewAdvQY(add2pool:boolean = true):Promise<ViewCuteMainViewAdvQY>{
		if(!this._CuteMainViewAdvQY){
			this._CuteMainViewAdvQY = await this.NewCuteMainViewAdvQY();
		}

		return new Promise<ViewCuteMainViewAdvQY>(resolve=>{resolve(this._CuteMainViewAdvQY)});
	}

	//-------------------------------------------
	public async NewCuteResultDialogQY(add2pool:boolean = false):Promise<ViewCuteResultDialogQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteResultDialogQY");
			if(node) {
				return new Promise<ViewCuteResultDialogQY>(resolve=>{resolve(node.getComponent(ViewCuteResultDialogQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteResultDialogQY");
			return new Promise<ViewCuteResultDialogQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteResultDialogQY", prefab);
				if(!this.statis["CuteResultDialogQY"]) {
					this.statis["CuteResultDialogQY"] = 0;
				}
				this.statis["CuteResultDialogQY"]++;
				let view = node.addComponent("ViewCuteResultDialogQY");
				try {
					node.addComponent("LogicCuteResultDialogQY");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialogQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteResultDialogQY");
			return new Promise<ViewCuteResultDialogQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteResultDialogQY"]) {
					this.statis["CuteResultDialogQY"] = 0;
				}
				this.statis["CuteResultDialogQY"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteResultDialogQY");
				try {
					node.addComponent("LogicCuteResultDialogQY");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialogQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteResultDialogQY(add2pool:boolean = true):Promise<ViewCuteResultDialogQY>{
		if(!this._CuteResultDialogQY){
			this._CuteResultDialogQY = await this.NewCuteResultDialogQY();
		}

		return new Promise<ViewCuteResultDialogQY>(resolve=>{resolve(this._CuteResultDialogQY)});
	}

	//-------------------------------------------
	public async NewCuteReviveDialogQY(add2pool:boolean = false):Promise<ViewCuteReviveDialogQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteReviveDialogQY");
			if(node) {
				return new Promise<ViewCuteReviveDialogQY>(resolve=>{resolve(node.getComponent(ViewCuteReviveDialogQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteReviveDialogQY");
			return new Promise<ViewCuteReviveDialogQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteReviveDialogQY", prefab);
				if(!this.statis["CuteReviveDialogQY"]) {
					this.statis["CuteReviveDialogQY"] = 0;
				}
				this.statis["CuteReviveDialogQY"]++;
				let view = node.addComponent("ViewCuteReviveDialogQY");
				try {
					node.addComponent("LogicCuteReviveDialogQY");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialogQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quyou/CuteReviveDialogQY");
			return new Promise<ViewCuteReviveDialogQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteReviveDialogQY"]) {
					this.statis["CuteReviveDialogQY"] = 0;
				}
				this.statis["CuteReviveDialogQY"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteReviveDialogQY");
				try {
					node.addComponent("LogicCuteReviveDialogQY");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialogQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteReviveDialogQY(add2pool:boolean = true):Promise<ViewCuteReviveDialogQY>{
		if(!this._CuteReviveDialogQY){
			this._CuteReviveDialogQY = await this.NewCuteReviveDialogQY();
		}

		return new Promise<ViewCuteReviveDialogQY>(resolve=>{resolve(this._CuteReviveDialogQY)});
	}

	//-------------------------------------------
	public async NewCuteRecordDialogQM(add2pool:boolean = false):Promise<ViewCuteRecordDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteRecordDialogQM");
			if(node) {
				return new Promise<ViewCuteRecordDialogQM>(resolve=>{resolve(node.getComponent(ViewCuteRecordDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteRecordDialogQM");
			return new Promise<ViewCuteRecordDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteRecordDialogQM", prefab);
				if(!this.statis["CuteRecordDialogQM"]) {
					this.statis["CuteRecordDialogQM"] = 0;
				}
				this.statis["CuteRecordDialogQM"]++;
				let view = node.addComponent("ViewCuteRecordDialogQM");
				try {
					node.addComponent("LogicCuteRecordDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteRecordDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteRecordDialogQM");
			return new Promise<ViewCuteRecordDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteRecordDialogQM"]) {
					this.statis["CuteRecordDialogQM"] = 0;
				}
				this.statis["CuteRecordDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteRecordDialogQM");
				try {
					node.addComponent("LogicCuteRecordDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteRecordDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteRecordDialogQM(add2pool:boolean = true):Promise<ViewCuteRecordDialogQM>{
		if(!this._CuteRecordDialogQM){
			this._CuteRecordDialogQM = await this.NewCuteRecordDialogQM();
		}

		return new Promise<ViewCuteRecordDialogQM>(resolve=>{resolve(this._CuteRecordDialogQM)});
	}

	//-------------------------------------------
	public async NewCuteResultDialogQM(add2pool:boolean = false):Promise<ViewCuteResultDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteResultDialogQM");
			if(node) {
				return new Promise<ViewCuteResultDialogQM>(resolve=>{resolve(node.getComponent(ViewCuteResultDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteResultDialogQM");
			return new Promise<ViewCuteResultDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteResultDialogQM", prefab);
				if(!this.statis["CuteResultDialogQM"]) {
					this.statis["CuteResultDialogQM"] = 0;
				}
				this.statis["CuteResultDialogQM"]++;
				let view = node.addComponent("ViewCuteResultDialogQM");
				try {
					node.addComponent("LogicCuteResultDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteResultDialogQM");
			return new Promise<ViewCuteResultDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteResultDialogQM"]) {
					this.statis["CuteResultDialogQM"] = 0;
				}
				this.statis["CuteResultDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteResultDialogQM");
				try {
					node.addComponent("LogicCuteResultDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteResultDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteResultDialogQM(add2pool:boolean = true):Promise<ViewCuteResultDialogQM>{
		if(!this._CuteResultDialogQM){
			this._CuteResultDialogQM = await this.NewCuteResultDialogQM();
		}

		return new Promise<ViewCuteResultDialogQM>(resolve=>{resolve(this._CuteResultDialogQM)});
	}

	//-------------------------------------------
	public async NewCuteReviveDialogQM(add2pool:boolean = false):Promise<ViewCuteReviveDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteReviveDialogQM");
			if(node) {
				return new Promise<ViewCuteReviveDialogQM>(resolve=>{resolve(node.getComponent(ViewCuteReviveDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteReviveDialogQM");
			return new Promise<ViewCuteReviveDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteReviveDialogQM", prefab);
				if(!this.statis["CuteReviveDialogQM"]) {
					this.statis["CuteReviveDialogQM"] = 0;
				}
				this.statis["CuteReviveDialogQM"]++;
				let view = node.addComponent("ViewCuteReviveDialogQM");
				try {
					node.addComponent("LogicCuteReviveDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteReviveDialogQM");
			return new Promise<ViewCuteReviveDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteReviveDialogQM"]) {
					this.statis["CuteReviveDialogQM"] = 0;
				}
				this.statis["CuteReviveDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteReviveDialogQM");
				try {
					node.addComponent("LogicCuteReviveDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteReviveDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteReviveDialogQM(add2pool:boolean = true):Promise<ViewCuteReviveDialogQM>{
		if(!this._CuteReviveDialogQM){
			this._CuteReviveDialogQM = await this.NewCuteReviveDialogQM();
		}

		return new Promise<ViewCuteReviveDialogQM>(resolve=>{resolve(this._CuteReviveDialogQM)});
	}

	//-------------------------------------------
	public async NewCuteTrySkinDialogQM(add2pool:boolean = false):Promise<ViewCuteTrySkinDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewCuteTrySkinDialogQM");
			if(node) {
				return new Promise<ViewCuteTrySkinDialogQM>(resolve=>{resolve(node.getComponent(ViewCuteTrySkinDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteTrySkinDialogQM");
			return new Promise<ViewCuteTrySkinDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewCuteTrySkinDialogQM", prefab);
				if(!this.statis["CuteTrySkinDialogQM"]) {
					this.statis["CuteTrySkinDialogQM"] = 0;
				}
				this.statis["CuteTrySkinDialogQM"]++;
				let view = node.addComponent("ViewCuteTrySkinDialogQM");
				try {
					node.addComponent("LogicCuteTrySkinDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteTrySkinDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("cute/prefab/quanmin/CuteTrySkinDialogQM");
			return new Promise<ViewCuteTrySkinDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["CuteTrySkinDialogQM"]) {
					this.statis["CuteTrySkinDialogQM"] = 0;
				}
				this.statis["CuteTrySkinDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewCuteTrySkinDialogQM");
				try {
					node.addComponent("LogicCuteTrySkinDialogQM");
				} catch(e){
					AntLog.Warn("prefab CuteTrySkinDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetCuteTrySkinDialogQM(add2pool:boolean = true):Promise<ViewCuteTrySkinDialogQM>{
		if(!this._CuteTrySkinDialogQM){
			this._CuteTrySkinDialogQM = await this.NewCuteTrySkinDialogQM();
		}

		return new Promise<ViewCuteTrySkinDialogQM>(resolve=>{resolve(this._CuteTrySkinDialogQM)});
	}

	//-------------------------------------------
	public async NewAntGameInfo(add2pool:boolean = false):Promise<ViewAntGameInfo>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewAntGameInfo");
			if(node) {
				return new Promise<ViewAntGameInfo>(resolve=>{resolve(node.getComponent(ViewAntGameInfo))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("common/prefab/AntGameInfo");
			return new Promise<ViewAntGameInfo>(resolve=>{
				node = AntPoolObject.Instantiate("ViewAntGameInfo", prefab);
				if(!this.statis["AntGameInfo"]) {
					this.statis["AntGameInfo"] = 0;
				}
				this.statis["AntGameInfo"]++;
				let view = node.addComponent("ViewAntGameInfo");
				try {
					node.addComponent("LogicAntGameInfo");
				} catch(e){
					AntLog.Warn("prefab AntGameInfo has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("common/prefab/AntGameInfo");
			return new Promise<ViewAntGameInfo>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["AntGameInfo"]) {
					this.statis["AntGameInfo"] = 0;
				}
				this.statis["AntGameInfo"]++;
				node.active = true;
				let view = node.addComponent("ViewAntGameInfo");
				try {
					node.addComponent("LogicAntGameInfo");
				} catch(e){
					AntLog.Warn("prefab AntGameInfo has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetAntGameInfo(add2pool:boolean = true):Promise<ViewAntGameInfo>{
		if(!this._AntGameInfo){
			this._AntGameInfo = await this.NewAntGameInfo();
		}

		return new Promise<ViewAntGameInfo>(resolve=>{resolve(this._AntGameInfo)});
	}

	//-------------------------------------------
	public async NewAntTestCaseUI(add2pool:boolean = false):Promise<ViewAntTestCaseUI>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewAntTestCaseUI");
			if(node) {
				return new Promise<ViewAntTestCaseUI>(resolve=>{resolve(node.getComponent(ViewAntTestCaseUI))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("common/prefab/AntTestCaseUI");
			return new Promise<ViewAntTestCaseUI>(resolve=>{
				node = AntPoolObject.Instantiate("ViewAntTestCaseUI", prefab);
				if(!this.statis["AntTestCaseUI"]) {
					this.statis["AntTestCaseUI"] = 0;
				}
				this.statis["AntTestCaseUI"]++;
				let view = node.addComponent("ViewAntTestCaseUI");
				try {
					node.addComponent("LogicAntTestCaseUI");
				} catch(e){
					AntLog.Warn("prefab AntTestCaseUI has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("common/prefab/AntTestCaseUI");
			return new Promise<ViewAntTestCaseUI>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["AntTestCaseUI"]) {
					this.statis["AntTestCaseUI"] = 0;
				}
				this.statis["AntTestCaseUI"]++;
				node.active = true;
				let view = node.addComponent("ViewAntTestCaseUI");
				try {
					node.addComponent("LogicAntTestCaseUI");
				} catch(e){
					AntLog.Warn("prefab AntTestCaseUI has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetAntTestCaseUI(add2pool:boolean = true):Promise<ViewAntTestCaseUI>{
		if(!this._AntTestCaseUI){
			this._AntTestCaseUI = await this.NewAntTestCaseUI();
		}

		return new Promise<ViewAntTestCaseUI>(resolve=>{resolve(this._AntTestCaseUI)});
	}

	//-------------------------------------------
	public async NewBrickAlert(add2pool:boolean = false):Promise<ViewBrickAlert>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickAlert");
			if(node) {
				return new Promise<ViewBrickAlert>(resolve=>{resolve(node.getComponent(ViewBrickAlert))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickAlert");
			return new Promise<ViewBrickAlert>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickAlert", prefab);
				if(!this.statis["BrickAlert"]) {
					this.statis["BrickAlert"] = 0;
				}
				this.statis["BrickAlert"]++;
				let view = node.addComponent("ViewBrickAlert");
				try {
					node.addComponent("LogicBrickAlert");
				} catch(e){
					AntLog.Warn("prefab BrickAlert has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickAlert");
			return new Promise<ViewBrickAlert>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickAlert"]) {
					this.statis["BrickAlert"] = 0;
				}
				this.statis["BrickAlert"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickAlert");
				try {
					node.addComponent("LogicBrickAlert");
				} catch(e){
					AntLog.Warn("prefab BrickAlert has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickAlert(add2pool:boolean = true):Promise<ViewBrickAlert>{
		if(!this._BrickAlert){
			this._BrickAlert = await this.NewBrickAlert();
		}

		return new Promise<ViewBrickAlert>(resolve=>{resolve(this._BrickAlert)});
	}

	//-------------------------------------------
	public async NewBrickAlertRelive(add2pool:boolean = false):Promise<ViewBrickAlertRelive>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickAlertRelive");
			if(node) {
				return new Promise<ViewBrickAlertRelive>(resolve=>{resolve(node.getComponent(ViewBrickAlertRelive))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickAlertRelive");
			return new Promise<ViewBrickAlertRelive>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickAlertRelive", prefab);
				if(!this.statis["BrickAlertRelive"]) {
					this.statis["BrickAlertRelive"] = 0;
				}
				this.statis["BrickAlertRelive"]++;
				let view = node.addComponent("ViewBrickAlertRelive");
				try {
					node.addComponent("LogicBrickAlertRelive");
				} catch(e){
					AntLog.Warn("prefab BrickAlertRelive has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickAlertRelive");
			return new Promise<ViewBrickAlertRelive>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickAlertRelive"]) {
					this.statis["BrickAlertRelive"] = 0;
				}
				this.statis["BrickAlertRelive"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickAlertRelive");
				try {
					node.addComponent("LogicBrickAlertRelive");
				} catch(e){
					AntLog.Warn("prefab BrickAlertRelive has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickAlertRelive(add2pool:boolean = true):Promise<ViewBrickAlertRelive>{
		if(!this._BrickAlertRelive){
			this._BrickAlertRelive = await this.NewBrickAlertRelive();
		}

		return new Promise<ViewBrickAlertRelive>(resolve=>{resolve(this._BrickAlertRelive)});
	}

	//-------------------------------------------
	public async NewBrickGame(add2pool:boolean = false):Promise<ViewBrickGame>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickGame");
			if(node) {
				return new Promise<ViewBrickGame>(resolve=>{resolve(node.getComponent(ViewBrickGame))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGame");
			return new Promise<ViewBrickGame>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickGame", prefab);
				if(!this.statis["BrickGame"]) {
					this.statis["BrickGame"] = 0;
				}
				this.statis["BrickGame"]++;
				let view = node.addComponent("ViewBrickGame");
				try {
					node.addComponent("LogicBrickGame");
				} catch(e){
					AntLog.Warn("prefab BrickGame has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGame");
			return new Promise<ViewBrickGame>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickGame"]) {
					this.statis["BrickGame"] = 0;
				}
				this.statis["BrickGame"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickGame");
				try {
					node.addComponent("LogicBrickGame");
				} catch(e){
					AntLog.Warn("prefab BrickGame has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickGame(add2pool:boolean = true):Promise<ViewBrickGame>{
		if(!this._BrickGame){
			this._BrickGame = await this.NewBrickGame();
		}

		return new Promise<ViewBrickGame>(resolve=>{resolve(this._BrickGame)});
	}

	//-------------------------------------------
	public async NewBrickGameResult(add2pool:boolean = false):Promise<ViewBrickGameResult>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickGameResult");
			if(node) {
				return new Promise<ViewBrickGameResult>(resolve=>{resolve(node.getComponent(ViewBrickGameResult))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGameResult");
			return new Promise<ViewBrickGameResult>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickGameResult", prefab);
				if(!this.statis["BrickGameResult"]) {
					this.statis["BrickGameResult"] = 0;
				}
				this.statis["BrickGameResult"]++;
				let view = node.addComponent("ViewBrickGameResult");
				try {
					node.addComponent("LogicBrickGameResult");
				} catch(e){
					AntLog.Warn("prefab BrickGameResult has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGameResult");
			return new Promise<ViewBrickGameResult>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickGameResult"]) {
					this.statis["BrickGameResult"] = 0;
				}
				this.statis["BrickGameResult"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickGameResult");
				try {
					node.addComponent("LogicBrickGameResult");
				} catch(e){
					AntLog.Warn("prefab BrickGameResult has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickGameResult(add2pool:boolean = true):Promise<ViewBrickGameResult>{
		if(!this._BrickGameResult){
			this._BrickGameResult = await this.NewBrickGameResult();
		}

		return new Promise<ViewBrickGameResult>(resolve=>{resolve(this._BrickGameResult)});
	}

	//-------------------------------------------
	public async NewBrickGameVideoResult(add2pool:boolean = false):Promise<ViewBrickGameVideoResult>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickGameVideoResult");
			if(node) {
				return new Promise<ViewBrickGameVideoResult>(resolve=>{resolve(node.getComponent(ViewBrickGameVideoResult))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGameVideoResult");
			return new Promise<ViewBrickGameVideoResult>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickGameVideoResult", prefab);
				if(!this.statis["BrickGameVideoResult"]) {
					this.statis["BrickGameVideoResult"] = 0;
				}
				this.statis["BrickGameVideoResult"]++;
				let view = node.addComponent("ViewBrickGameVideoResult");
				try {
					node.addComponent("LogicBrickGameVideoResult");
				} catch(e){
					AntLog.Warn("prefab BrickGameVideoResult has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickGameVideoResult");
			return new Promise<ViewBrickGameVideoResult>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickGameVideoResult"]) {
					this.statis["BrickGameVideoResult"] = 0;
				}
				this.statis["BrickGameVideoResult"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickGameVideoResult");
				try {
					node.addComponent("LogicBrickGameVideoResult");
				} catch(e){
					AntLog.Warn("prefab BrickGameVideoResult has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickGameVideoResult(add2pool:boolean = true):Promise<ViewBrickGameVideoResult>{
		if(!this._BrickGameVideoResult){
			this._BrickGameVideoResult = await this.NewBrickGameVideoResult();
		}

		return new Promise<ViewBrickGameVideoResult>(resolve=>{resolve(this._BrickGameVideoResult)});
	}

	//-------------------------------------------
	public async NewBrickHall(add2pool:boolean = false):Promise<ViewBrickHall>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickHall");
			if(node) {
				return new Promise<ViewBrickHall>(resolve=>{resolve(node.getComponent(ViewBrickHall))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickHall");
			return new Promise<ViewBrickHall>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickHall", prefab);
				if(!this.statis["BrickHall"]) {
					this.statis["BrickHall"] = 0;
				}
				this.statis["BrickHall"]++;
				let view = node.addComponent("ViewBrickHall");
				try {
					node.addComponent("LogicBrickHall");
				} catch(e){
					AntLog.Warn("prefab BrickHall has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickHall");
			return new Promise<ViewBrickHall>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickHall"]) {
					this.statis["BrickHall"] = 0;
				}
				this.statis["BrickHall"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickHall");
				try {
					node.addComponent("LogicBrickHall");
				} catch(e){
					AntLog.Warn("prefab BrickHall has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickHall(add2pool:boolean = true):Promise<ViewBrickHall>{
		if(!this._BrickHall){
			this._BrickHall = await this.NewBrickHall();
		}

		return new Promise<ViewBrickHall>(resolve=>{resolve(this._BrickHall)});
	}

	//-------------------------------------------
	public async NewBrickItemAccelerateBelt(add2pool:boolean = false):Promise<ViewBrickItemAccelerateBelt>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemAccelerateBelt");
			if(node) {
				return new Promise<ViewBrickItemAccelerateBelt>(resolve=>{resolve(node.getComponent(ViewBrickItemAccelerateBelt))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemAccelerateBelt");
			return new Promise<ViewBrickItemAccelerateBelt>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemAccelerateBelt", prefab);
				if(!this.statis["BrickItemAccelerateBelt"]) {
					this.statis["BrickItemAccelerateBelt"] = 0;
				}
				this.statis["BrickItemAccelerateBelt"]++;
				let view = node.addComponent("ViewBrickItemAccelerateBelt");
				try {
					node.addComponent("LogicBrickItemAccelerateBelt");
				} catch(e){
					AntLog.Warn("prefab BrickItemAccelerateBelt has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemAccelerateBelt");
			return new Promise<ViewBrickItemAccelerateBelt>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemAccelerateBelt"]) {
					this.statis["BrickItemAccelerateBelt"] = 0;
				}
				this.statis["BrickItemAccelerateBelt"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemAccelerateBelt");
				try {
					node.addComponent("LogicBrickItemAccelerateBelt");
				} catch(e){
					AntLog.Warn("prefab BrickItemAccelerateBelt has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemAccelerateBelt(add2pool:boolean = true):Promise<ViewBrickItemAccelerateBelt>{
		if(!this._BrickItemAccelerateBelt){
			this._BrickItemAccelerateBelt = await this.NewBrickItemAccelerateBelt();
		}

		return new Promise<ViewBrickItemAccelerateBelt>(resolve=>{resolve(this._BrickItemAccelerateBelt)});
	}

	//-------------------------------------------
	public async NewBrickItemBrick(add2pool:boolean = false):Promise<ViewBrickItemBrick>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemBrick");
			if(node) {
				return new Promise<ViewBrickItemBrick>(resolve=>{resolve(node.getComponent(ViewBrickItemBrick))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBrick");
			return new Promise<ViewBrickItemBrick>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemBrick", prefab);
				if(!this.statis["BrickItemBrick"]) {
					this.statis["BrickItemBrick"] = 0;
				}
				this.statis["BrickItemBrick"]++;
				let view = node.addComponent("ViewBrickItemBrick");
				try {
					node.addComponent("LogicBrickItemBrick");
				} catch(e){
					AntLog.Warn("prefab BrickItemBrick has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBrick");
			return new Promise<ViewBrickItemBrick>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemBrick"]) {
					this.statis["BrickItemBrick"] = 0;
				}
				this.statis["BrickItemBrick"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemBrick");
				try {
					node.addComponent("LogicBrickItemBrick");
				} catch(e){
					AntLog.Warn("prefab BrickItemBrick has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemBrick(add2pool:boolean = true):Promise<ViewBrickItemBrick>{
		if(!this._BrickItemBrick){
			this._BrickItemBrick = await this.NewBrickItemBrick();
		}

		return new Promise<ViewBrickItemBrick>(resolve=>{resolve(this._BrickItemBrick)});
	}

	//-------------------------------------------
	public async NewBrickItemBrickDisappearAnim(add2pool:boolean = false):Promise<ViewBrickItemBrickDisappearAnim>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemBrickDisappearAnim");
			if(node) {
				return new Promise<ViewBrickItemBrickDisappearAnim>(resolve=>{resolve(node.getComponent(ViewBrickItemBrickDisappearAnim))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBrickDisappearAnim");
			return new Promise<ViewBrickItemBrickDisappearAnim>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemBrickDisappearAnim", prefab);
				if(!this.statis["BrickItemBrickDisappearAnim"]) {
					this.statis["BrickItemBrickDisappearAnim"] = 0;
				}
				this.statis["BrickItemBrickDisappearAnim"]++;
				let view = node.addComponent("ViewBrickItemBrickDisappearAnim");
				try {
					node.addComponent("LogicBrickItemBrickDisappearAnim");
				} catch(e){
					AntLog.Warn("prefab BrickItemBrickDisappearAnim has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBrickDisappearAnim");
			return new Promise<ViewBrickItemBrickDisappearAnim>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemBrickDisappearAnim"]) {
					this.statis["BrickItemBrickDisappearAnim"] = 0;
				}
				this.statis["BrickItemBrickDisappearAnim"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemBrickDisappearAnim");
				try {
					node.addComponent("LogicBrickItemBrickDisappearAnim");
				} catch(e){
					AntLog.Warn("prefab BrickItemBrickDisappearAnim has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemBrickDisappearAnim(add2pool:boolean = true):Promise<ViewBrickItemBrickDisappearAnim>{
		if(!this._BrickItemBrickDisappearAnim){
			this._BrickItemBrickDisappearAnim = await this.NewBrickItemBrickDisappearAnim();
		}

		return new Promise<ViewBrickItemBrickDisappearAnim>(resolve=>{resolve(this._BrickItemBrickDisappearAnim)});
	}

	//-------------------------------------------
	public async NewBrickItemBuff(add2pool:boolean = false):Promise<ViewBrickItemBuff>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemBuff");
			if(node) {
				return new Promise<ViewBrickItemBuff>(resolve=>{resolve(node.getComponent(ViewBrickItemBuff))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBuff");
			return new Promise<ViewBrickItemBuff>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemBuff", prefab);
				if(!this.statis["BrickItemBuff"]) {
					this.statis["BrickItemBuff"] = 0;
				}
				this.statis["BrickItemBuff"]++;
				let view = node.addComponent("ViewBrickItemBuff");
				try {
					node.addComponent("LogicBrickItemBuff");
				} catch(e){
					AntLog.Warn("prefab BrickItemBuff has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBuff");
			return new Promise<ViewBrickItemBuff>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemBuff"]) {
					this.statis["BrickItemBuff"] = 0;
				}
				this.statis["BrickItemBuff"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemBuff");
				try {
					node.addComponent("LogicBrickItemBuff");
				} catch(e){
					AntLog.Warn("prefab BrickItemBuff has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemBuff(add2pool:boolean = true):Promise<ViewBrickItemBuff>{
		if(!this._BrickItemBuff){
			this._BrickItemBuff = await this.NewBrickItemBuff();
		}

		return new Promise<ViewBrickItemBuff>(resolve=>{resolve(this._BrickItemBuff)});
	}

	//-------------------------------------------
	public async NewBrickItemBullet(add2pool:boolean = false):Promise<ViewBrickItemBullet>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemBullet");
			if(node) {
				return new Promise<ViewBrickItemBullet>(resolve=>{resolve(node.getComponent(ViewBrickItemBullet))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBullet");
			return new Promise<ViewBrickItemBullet>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemBullet", prefab);
				if(!this.statis["BrickItemBullet"]) {
					this.statis["BrickItemBullet"] = 0;
				}
				this.statis["BrickItemBullet"]++;
				let view = node.addComponent("ViewBrickItemBullet");
				try {
					node.addComponent("LogicBrickItemBullet");
				} catch(e){
					AntLog.Warn("prefab BrickItemBullet has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemBullet");
			return new Promise<ViewBrickItemBullet>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemBullet"]) {
					this.statis["BrickItemBullet"] = 0;
				}
				this.statis["BrickItemBullet"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemBullet");
				try {
					node.addComponent("LogicBrickItemBullet");
				} catch(e){
					AntLog.Warn("prefab BrickItemBullet has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemBullet(add2pool:boolean = true):Promise<ViewBrickItemBullet>{
		if(!this._BrickItemBullet){
			this._BrickItemBullet = await this.NewBrickItemBullet();
		}

		return new Promise<ViewBrickItemBullet>(resolve=>{resolve(this._BrickItemBullet)});
	}

	//-------------------------------------------
	public async NewBrickItemPlane(add2pool:boolean = false):Promise<ViewBrickItemPlane>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemPlane");
			if(node) {
				return new Promise<ViewBrickItemPlane>(resolve=>{resolve(node.getComponent(ViewBrickItemPlane))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemPlane");
			return new Promise<ViewBrickItemPlane>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemPlane", prefab);
				if(!this.statis["BrickItemPlane"]) {
					this.statis["BrickItemPlane"] = 0;
				}
				this.statis["BrickItemPlane"]++;
				let view = node.addComponent("ViewBrickItemPlane");
				try {
					node.addComponent("LogicBrickItemPlane");
				} catch(e){
					AntLog.Warn("prefab BrickItemPlane has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemPlane");
			return new Promise<ViewBrickItemPlane>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemPlane"]) {
					this.statis["BrickItemPlane"] = 0;
				}
				this.statis["BrickItemPlane"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemPlane");
				try {
					node.addComponent("LogicBrickItemPlane");
				} catch(e){
					AntLog.Warn("prefab BrickItemPlane has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemPlane(add2pool:boolean = true):Promise<ViewBrickItemPlane>{
		if(!this._BrickItemPlane){
			this._BrickItemPlane = await this.NewBrickItemPlane();
		}

		return new Promise<ViewBrickItemPlane>(resolve=>{resolve(this._BrickItemPlane)});
	}

	//-------------------------------------------
	public async NewBrickItemSkin(add2pool:boolean = false):Promise<ViewBrickItemSkin>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemSkin");
			if(node) {
				return new Promise<ViewBrickItemSkin>(resolve=>{resolve(node.getComponent(ViewBrickItemSkin))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemSkin");
			return new Promise<ViewBrickItemSkin>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemSkin", prefab);
				if(!this.statis["BrickItemSkin"]) {
					this.statis["BrickItemSkin"] = 0;
				}
				this.statis["BrickItemSkin"]++;
				let view = node.addComponent("ViewBrickItemSkin");
				try {
					node.addComponent("LogicBrickItemSkin");
				} catch(e){
					AntLog.Warn("prefab BrickItemSkin has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemSkin");
			return new Promise<ViewBrickItemSkin>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemSkin"]) {
					this.statis["BrickItemSkin"] = 0;
				}
				this.statis["BrickItemSkin"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemSkin");
				try {
					node.addComponent("LogicBrickItemSkin");
				} catch(e){
					AntLog.Warn("prefab BrickItemSkin has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemSkin(add2pool:boolean = true):Promise<ViewBrickItemSkin>{
		if(!this._BrickItemSkin){
			this._BrickItemSkin = await this.NewBrickItemSkin();
		}

		return new Promise<ViewBrickItemSkin>(resolve=>{resolve(this._BrickItemSkin)});
	}

	//-------------------------------------------
	public async NewBrickItemSkinDesc(add2pool:boolean = false):Promise<ViewBrickItemSkinDesc>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickItemSkinDesc");
			if(node) {
				return new Promise<ViewBrickItemSkinDesc>(resolve=>{resolve(node.getComponent(ViewBrickItemSkinDesc))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemSkinDesc");
			return new Promise<ViewBrickItemSkinDesc>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickItemSkinDesc", prefab);
				if(!this.statis["BrickItemSkinDesc"]) {
					this.statis["BrickItemSkinDesc"] = 0;
				}
				this.statis["BrickItemSkinDesc"]++;
				let view = node.addComponent("ViewBrickItemSkinDesc");
				try {
					node.addComponent("LogicBrickItemSkinDesc");
				} catch(e){
					AntLog.Warn("prefab BrickItemSkinDesc has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickItemSkinDesc");
			return new Promise<ViewBrickItemSkinDesc>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickItemSkinDesc"]) {
					this.statis["BrickItemSkinDesc"] = 0;
				}
				this.statis["BrickItemSkinDesc"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickItemSkinDesc");
				try {
					node.addComponent("LogicBrickItemSkinDesc");
				} catch(e){
					AntLog.Warn("prefab BrickItemSkinDesc has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickItemSkinDesc(add2pool:boolean = true):Promise<ViewBrickItemSkinDesc>{
		if(!this._BrickItemSkinDesc){
			this._BrickItemSkinDesc = await this.NewBrickItemSkinDesc();
		}

		return new Promise<ViewBrickItemSkinDesc>(resolve=>{resolve(this._BrickItemSkinDesc)});
	}

	//-------------------------------------------
	public async NewBrickRank(add2pool:boolean = false):Promise<ViewBrickRank>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickRank");
			if(node) {
				return new Promise<ViewBrickRank>(resolve=>{resolve(node.getComponent(ViewBrickRank))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickRank");
			return new Promise<ViewBrickRank>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickRank", prefab);
				if(!this.statis["BrickRank"]) {
					this.statis["BrickRank"] = 0;
				}
				this.statis["BrickRank"]++;
				let view = node.addComponent("ViewBrickRank");
				try {
					node.addComponent("LogicBrickRank");
				} catch(e){
					AntLog.Warn("prefab BrickRank has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickRank");
			return new Promise<ViewBrickRank>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickRank"]) {
					this.statis["BrickRank"] = 0;
				}
				this.statis["BrickRank"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickRank");
				try {
					node.addComponent("LogicBrickRank");
				} catch(e){
					AntLog.Warn("prefab BrickRank has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickRank(add2pool:boolean = true):Promise<ViewBrickRank>{
		if(!this._BrickRank){
			this._BrickRank = await this.NewBrickRank();
		}

		return new Promise<ViewBrickRank>(resolve=>{resolve(this._BrickRank)});
	}

	//-------------------------------------------
	public async NewBrickSetting(add2pool:boolean = false):Promise<ViewBrickSetting>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickSetting");
			if(node) {
				return new Promise<ViewBrickSetting>(resolve=>{resolve(node.getComponent(ViewBrickSetting))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickSetting");
			return new Promise<ViewBrickSetting>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickSetting", prefab);
				if(!this.statis["BrickSetting"]) {
					this.statis["BrickSetting"] = 0;
				}
				this.statis["BrickSetting"]++;
				let view = node.addComponent("ViewBrickSetting");
				try {
					node.addComponent("LogicBrickSetting");
				} catch(e){
					AntLog.Warn("prefab BrickSetting has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickSetting");
			return new Promise<ViewBrickSetting>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickSetting"]) {
					this.statis["BrickSetting"] = 0;
				}
				this.statis["BrickSetting"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickSetting");
				try {
					node.addComponent("LogicBrickSetting");
				} catch(e){
					AntLog.Warn("prefab BrickSetting has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickSetting(add2pool:boolean = true):Promise<ViewBrickSetting>{
		if(!this._BrickSetting){
			this._BrickSetting = await this.NewBrickSetting();
		}

		return new Promise<ViewBrickSetting>(resolve=>{resolve(this._BrickSetting)});
	}

	//-------------------------------------------
	public async NewBrickSkin(add2pool:boolean = false):Promise<ViewBrickSkin>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBrickSkin");
			if(node) {
				return new Promise<ViewBrickSkin>(resolve=>{resolve(node.getComponent(ViewBrickSkin))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickSkin");
			return new Promise<ViewBrickSkin>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBrickSkin", prefab);
				if(!this.statis["BrickSkin"]) {
					this.statis["BrickSkin"] = 0;
				}
				this.statis["BrickSkin"]++;
				let view = node.addComponent("ViewBrickSkin");
				try {
					node.addComponent("LogicBrickSkin");
				} catch(e){
					AntLog.Warn("prefab BrickSkin has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("brick/prefab/BrickSkin");
			return new Promise<ViewBrickSkin>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BrickSkin"]) {
					this.statis["BrickSkin"] = 0;
				}
				this.statis["BrickSkin"]++;
				node.active = true;
				let view = node.addComponent("ViewBrickSkin");
				try {
					node.addComponent("LogicBrickSkin");
				} catch(e){
					AntLog.Warn("prefab BrickSkin has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBrickSkin(add2pool:boolean = true):Promise<ViewBrickSkin>{
		if(!this._BrickSkin){
			this._BrickSkin = await this.NewBrickSkin();
		}

		return new Promise<ViewBrickSkin>(resolve=>{resolve(this._BrickSkin)});
	}

	//-------------------------------------------
	public async NewBeanClothesView(add2pool:boolean = false):Promise<ViewBeanClothesView>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanClothesView");
			if(node) {
				return new Promise<ViewBeanClothesView>(resolve=>{resolve(node.getComponent(ViewBeanClothesView))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanClothesView");
			return new Promise<ViewBeanClothesView>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanClothesView", prefab);
				if(!this.statis["BeanClothesView"]) {
					this.statis["BeanClothesView"] = 0;
				}
				this.statis["BeanClothesView"]++;
				let view = node.addComponent("ViewBeanClothesView");
				try {
					node.addComponent("LogicBeanClothesView");
				} catch(e){
					AntLog.Warn("prefab BeanClothesView has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanClothesView");
			return new Promise<ViewBeanClothesView>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanClothesView"]) {
					this.statis["BeanClothesView"] = 0;
				}
				this.statis["BeanClothesView"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanClothesView");
				try {
					node.addComponent("LogicBeanClothesView");
				} catch(e){
					AntLog.Warn("prefab BeanClothesView has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanClothesView(add2pool:boolean = true):Promise<ViewBeanClothesView>{
		if(!this._BeanClothesView){
			this._BeanClothesView = await this.NewBeanClothesView();
		}

		return new Promise<ViewBeanClothesView>(resolve=>{resolve(this._BeanClothesView)});
	}

	//-------------------------------------------
	public async NewBeanGame(add2pool:boolean = false):Promise<ViewBeanGame>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanGame");
			if(node) {
				return new Promise<ViewBeanGame>(resolve=>{resolve(node.getComponent(ViewBeanGame))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGame");
			return new Promise<ViewBeanGame>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanGame", prefab);
				if(!this.statis["BeanGame"]) {
					this.statis["BeanGame"] = 0;
				}
				this.statis["BeanGame"]++;
				let view = node.addComponent("ViewBeanGame");
				try {
					node.addComponent("LogicBeanGame");
				} catch(e){
					AntLog.Warn("prefab BeanGame has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGame");
			return new Promise<ViewBeanGame>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanGame"]) {
					this.statis["BeanGame"] = 0;
				}
				this.statis["BeanGame"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanGame");
				try {
					node.addComponent("LogicBeanGame");
				} catch(e){
					AntLog.Warn("prefab BeanGame has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanGame(add2pool:boolean = true):Promise<ViewBeanGame>{
		if(!this._BeanGame){
			this._BeanGame = await this.NewBeanGame();
		}

		return new Promise<ViewBeanGame>(resolve=>{resolve(this._BeanGame)});
	}

	//-------------------------------------------
	public async NewBeanGetRewardDialog(add2pool:boolean = false):Promise<ViewBeanGetRewardDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanGetRewardDialog");
			if(node) {
				return new Promise<ViewBeanGetRewardDialog>(resolve=>{resolve(node.getComponent(ViewBeanGetRewardDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGetRewardDialog");
			return new Promise<ViewBeanGetRewardDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanGetRewardDialog", prefab);
				if(!this.statis["BeanGetRewardDialog"]) {
					this.statis["BeanGetRewardDialog"] = 0;
				}
				this.statis["BeanGetRewardDialog"]++;
				let view = node.addComponent("ViewBeanGetRewardDialog");
				try {
					node.addComponent("LogicBeanGetRewardDialog");
				} catch(e){
					AntLog.Warn("prefab BeanGetRewardDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGetRewardDialog");
			return new Promise<ViewBeanGetRewardDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanGetRewardDialog"]) {
					this.statis["BeanGetRewardDialog"] = 0;
				}
				this.statis["BeanGetRewardDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanGetRewardDialog");
				try {
					node.addComponent("LogicBeanGetRewardDialog");
				} catch(e){
					AntLog.Warn("prefab BeanGetRewardDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanGetRewardDialog(add2pool:boolean = true):Promise<ViewBeanGetRewardDialog>{
		if(!this._BeanGetRewardDialog){
			this._BeanGetRewardDialog = await this.NewBeanGetRewardDialog();
		}

		return new Promise<ViewBeanGetRewardDialog>(resolve=>{resolve(this._BeanGetRewardDialog)});
	}

	//-------------------------------------------
	public async NewBeanGetSkinDialog(add2pool:boolean = false):Promise<ViewBeanGetSkinDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanGetSkinDialog");
			if(node) {
				return new Promise<ViewBeanGetSkinDialog>(resolve=>{resolve(node.getComponent(ViewBeanGetSkinDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGetSkinDialog");
			return new Promise<ViewBeanGetSkinDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanGetSkinDialog", prefab);
				if(!this.statis["BeanGetSkinDialog"]) {
					this.statis["BeanGetSkinDialog"] = 0;
				}
				this.statis["BeanGetSkinDialog"]++;
				let view = node.addComponent("ViewBeanGetSkinDialog");
				try {
					node.addComponent("LogicBeanGetSkinDialog");
				} catch(e){
					AntLog.Warn("prefab BeanGetSkinDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGetSkinDialog");
			return new Promise<ViewBeanGetSkinDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanGetSkinDialog"]) {
					this.statis["BeanGetSkinDialog"] = 0;
				}
				this.statis["BeanGetSkinDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanGetSkinDialog");
				try {
					node.addComponent("LogicBeanGetSkinDialog");
				} catch(e){
					AntLog.Warn("prefab BeanGetSkinDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanGetSkinDialog(add2pool:boolean = true):Promise<ViewBeanGetSkinDialog>{
		if(!this._BeanGetSkinDialog){
			this._BeanGetSkinDialog = await this.NewBeanGetSkinDialog();
		}

		return new Promise<ViewBeanGetSkinDialog>(resolve=>{resolve(this._BeanGetSkinDialog)});
	}

	//-------------------------------------------
	public async NewBeanGuideFinger(add2pool:boolean = false):Promise<ViewBeanGuideFinger>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanGuideFinger");
			if(node) {
				return new Promise<ViewBeanGuideFinger>(resolve=>{resolve(node.getComponent(ViewBeanGuideFinger))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGuideFinger");
			return new Promise<ViewBeanGuideFinger>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanGuideFinger", prefab);
				if(!this.statis["BeanGuideFinger"]) {
					this.statis["BeanGuideFinger"] = 0;
				}
				this.statis["BeanGuideFinger"]++;
				let view = node.addComponent("ViewBeanGuideFinger");
				try {
					node.addComponent("LogicBeanGuideFinger");
				} catch(e){
					AntLog.Warn("prefab BeanGuideFinger has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanGuideFinger");
			return new Promise<ViewBeanGuideFinger>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanGuideFinger"]) {
					this.statis["BeanGuideFinger"] = 0;
				}
				this.statis["BeanGuideFinger"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanGuideFinger");
				try {
					node.addComponent("LogicBeanGuideFinger");
				} catch(e){
					AntLog.Warn("prefab BeanGuideFinger has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanGuideFinger(add2pool:boolean = true):Promise<ViewBeanGuideFinger>{
		if(!this._BeanGuideFinger){
			this._BeanGuideFinger = await this.NewBeanGuideFinger();
		}

		return new Promise<ViewBeanGuideFinger>(resolve=>{resolve(this._BeanGuideFinger)});
	}

	//-------------------------------------------
	public async NewBeanJellyItem(add2pool:boolean = false):Promise<ViewBeanJellyItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanJellyItem");
			if(node) {
				return new Promise<ViewBeanJellyItem>(resolve=>{resolve(node.getComponent(ViewBeanJellyItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanJellyItem");
			return new Promise<ViewBeanJellyItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanJellyItem", prefab);
				if(!this.statis["BeanJellyItem"]) {
					this.statis["BeanJellyItem"] = 0;
				}
				this.statis["BeanJellyItem"]++;
				let view = node.addComponent("ViewBeanJellyItem");
				try {
					node.addComponent("LogicBeanJellyItem");
				} catch(e){
					AntLog.Warn("prefab BeanJellyItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanJellyItem");
			return new Promise<ViewBeanJellyItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanJellyItem"]) {
					this.statis["BeanJellyItem"] = 0;
				}
				this.statis["BeanJellyItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanJellyItem");
				try {
					node.addComponent("LogicBeanJellyItem");
				} catch(e){
					AntLog.Warn("prefab BeanJellyItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanJellyItem(add2pool:boolean = true):Promise<ViewBeanJellyItem>{
		if(!this._BeanJellyItem){
			this._BeanJellyItem = await this.NewBeanJellyItem();
		}

		return new Promise<ViewBeanJellyItem>(resolve=>{resolve(this._BeanJellyItem)});
	}

	//-------------------------------------------
	public async NewBeanJellySkinItem(add2pool:boolean = false):Promise<ViewBeanJellySkinItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanJellySkinItem");
			if(node) {
				return new Promise<ViewBeanJellySkinItem>(resolve=>{resolve(node.getComponent(ViewBeanJellySkinItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanJellySkinItem");
			return new Promise<ViewBeanJellySkinItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanJellySkinItem", prefab);
				if(!this.statis["BeanJellySkinItem"]) {
					this.statis["BeanJellySkinItem"] = 0;
				}
				this.statis["BeanJellySkinItem"]++;
				let view = node.addComponent("ViewBeanJellySkinItem");
				try {
					node.addComponent("LogicBeanJellySkinItem");
				} catch(e){
					AntLog.Warn("prefab BeanJellySkinItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanJellySkinItem");
			return new Promise<ViewBeanJellySkinItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanJellySkinItem"]) {
					this.statis["BeanJellySkinItem"] = 0;
				}
				this.statis["BeanJellySkinItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanJellySkinItem");
				try {
					node.addComponent("LogicBeanJellySkinItem");
				} catch(e){
					AntLog.Warn("prefab BeanJellySkinItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanJellySkinItem(add2pool:boolean = true):Promise<ViewBeanJellySkinItem>{
		if(!this._BeanJellySkinItem){
			this._BeanJellySkinItem = await this.NewBeanJellySkinItem();
		}

		return new Promise<ViewBeanJellySkinItem>(resolve=>{resolve(this._BeanJellySkinItem)});
	}

	//-------------------------------------------
	public async NewBeanPlayerItem(add2pool:boolean = false):Promise<ViewBeanPlayerItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanPlayerItem");
			if(node) {
				return new Promise<ViewBeanPlayerItem>(resolve=>{resolve(node.getComponent(ViewBeanPlayerItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanPlayerItem");
			return new Promise<ViewBeanPlayerItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanPlayerItem", prefab);
				if(!this.statis["BeanPlayerItem"]) {
					this.statis["BeanPlayerItem"] = 0;
				}
				this.statis["BeanPlayerItem"]++;
				let view = node.addComponent("ViewBeanPlayerItem");
				try {
					node.addComponent("LogicBeanPlayerItem");
				} catch(e){
					AntLog.Warn("prefab BeanPlayerItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanPlayerItem");
			return new Promise<ViewBeanPlayerItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanPlayerItem"]) {
					this.statis["BeanPlayerItem"] = 0;
				}
				this.statis["BeanPlayerItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanPlayerItem");
				try {
					node.addComponent("LogicBeanPlayerItem");
				} catch(e){
					AntLog.Warn("prefab BeanPlayerItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanPlayerItem(add2pool:boolean = true):Promise<ViewBeanPlayerItem>{
		if(!this._BeanPlayerItem){
			this._BeanPlayerItem = await this.NewBeanPlayerItem();
		}

		return new Promise<ViewBeanPlayerItem>(resolve=>{resolve(this._BeanPlayerItem)});
	}

	//-------------------------------------------
	public async NewBeanPlayerSkinItem(add2pool:boolean = false):Promise<ViewBeanPlayerSkinItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanPlayerSkinItem");
			if(node) {
				return new Promise<ViewBeanPlayerSkinItem>(resolve=>{resolve(node.getComponent(ViewBeanPlayerSkinItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanPlayerSkinItem");
			return new Promise<ViewBeanPlayerSkinItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanPlayerSkinItem", prefab);
				if(!this.statis["BeanPlayerSkinItem"]) {
					this.statis["BeanPlayerSkinItem"] = 0;
				}
				this.statis["BeanPlayerSkinItem"]++;
				let view = node.addComponent("ViewBeanPlayerSkinItem");
				try {
					node.addComponent("LogicBeanPlayerSkinItem");
				} catch(e){
					AntLog.Warn("prefab BeanPlayerSkinItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanPlayerSkinItem");
			return new Promise<ViewBeanPlayerSkinItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanPlayerSkinItem"]) {
					this.statis["BeanPlayerSkinItem"] = 0;
				}
				this.statis["BeanPlayerSkinItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanPlayerSkinItem");
				try {
					node.addComponent("LogicBeanPlayerSkinItem");
				} catch(e){
					AntLog.Warn("prefab BeanPlayerSkinItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanPlayerSkinItem(add2pool:boolean = true):Promise<ViewBeanPlayerSkinItem>{
		if(!this._BeanPlayerSkinItem){
			this._BeanPlayerSkinItem = await this.NewBeanPlayerSkinItem();
		}

		return new Promise<ViewBeanPlayerSkinItem>(resolve=>{resolve(this._BeanPlayerSkinItem)});
	}

	//-------------------------------------------
	public async NewBeanRank(add2pool:boolean = false):Promise<ViewBeanRank>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanRank");
			if(node) {
				return new Promise<ViewBeanRank>(resolve=>{resolve(node.getComponent(ViewBeanRank))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanRank");
			return new Promise<ViewBeanRank>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanRank", prefab);
				if(!this.statis["BeanRank"]) {
					this.statis["BeanRank"] = 0;
				}
				this.statis["BeanRank"]++;
				let view = node.addComponent("ViewBeanRank");
				try {
					node.addComponent("LogicBeanRank");
				} catch(e){
					AntLog.Warn("prefab BeanRank has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanRank");
			return new Promise<ViewBeanRank>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanRank"]) {
					this.statis["BeanRank"] = 0;
				}
				this.statis["BeanRank"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanRank");
				try {
					node.addComponent("LogicBeanRank");
				} catch(e){
					AntLog.Warn("prefab BeanRank has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanRank(add2pool:boolean = true):Promise<ViewBeanRank>{
		if(!this._BeanRank){
			this._BeanRank = await this.NewBeanRank();
		}

		return new Promise<ViewBeanRank>(resolve=>{resolve(this._BeanRank)});
	}

	//-------------------------------------------
	public async NewBeanResultDialog(add2pool:boolean = false):Promise<ViewBeanResultDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanResultDialog");
			if(node) {
				return new Promise<ViewBeanResultDialog>(resolve=>{resolve(node.getComponent(ViewBeanResultDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanResultDialog");
			return new Promise<ViewBeanResultDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanResultDialog", prefab);
				if(!this.statis["BeanResultDialog"]) {
					this.statis["BeanResultDialog"] = 0;
				}
				this.statis["BeanResultDialog"]++;
				let view = node.addComponent("ViewBeanResultDialog");
				try {
					node.addComponent("LogicBeanResultDialog");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanResultDialog");
			return new Promise<ViewBeanResultDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanResultDialog"]) {
					this.statis["BeanResultDialog"] = 0;
				}
				this.statis["BeanResultDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanResultDialog");
				try {
					node.addComponent("LogicBeanResultDialog");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanResultDialog(add2pool:boolean = true):Promise<ViewBeanResultDialog>{
		if(!this._BeanResultDialog){
			this._BeanResultDialog = await this.NewBeanResultDialog();
		}

		return new Promise<ViewBeanResultDialog>(resolve=>{resolve(this._BeanResultDialog)});
	}

	//-------------------------------------------
	public async NewBeanReviveDialog(add2pool:boolean = false):Promise<ViewBeanReviveDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanReviveDialog");
			if(node) {
				return new Promise<ViewBeanReviveDialog>(resolve=>{resolve(node.getComponent(ViewBeanReviveDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanReviveDialog");
			return new Promise<ViewBeanReviveDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanReviveDialog", prefab);
				if(!this.statis["BeanReviveDialog"]) {
					this.statis["BeanReviveDialog"] = 0;
				}
				this.statis["BeanReviveDialog"]++;
				let view = node.addComponent("ViewBeanReviveDialog");
				try {
					node.addComponent("LogicBeanReviveDialog");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanReviveDialog");
			return new Promise<ViewBeanReviveDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanReviveDialog"]) {
					this.statis["BeanReviveDialog"] = 0;
				}
				this.statis["BeanReviveDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanReviveDialog");
				try {
					node.addComponent("LogicBeanReviveDialog");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanReviveDialog(add2pool:boolean = true):Promise<ViewBeanReviveDialog>{
		if(!this._BeanReviveDialog){
			this._BeanReviveDialog = await this.NewBeanReviveDialog();
		}

		return new Promise<ViewBeanReviveDialog>(resolve=>{resolve(this._BeanReviveDialog)});
	}

	//-------------------------------------------
	public async NewBeanRewardLine(add2pool:boolean = false):Promise<ViewBeanRewardLine>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanRewardLine");
			if(node) {
				return new Promise<ViewBeanRewardLine>(resolve=>{resolve(node.getComponent(ViewBeanRewardLine))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanRewardLine");
			return new Promise<ViewBeanRewardLine>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanRewardLine", prefab);
				if(!this.statis["BeanRewardLine"]) {
					this.statis["BeanRewardLine"] = 0;
				}
				this.statis["BeanRewardLine"]++;
				let view = node.addComponent("ViewBeanRewardLine");
				try {
					node.addComponent("LogicBeanRewardLine");
				} catch(e){
					AntLog.Warn("prefab BeanRewardLine has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanRewardLine");
			return new Promise<ViewBeanRewardLine>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanRewardLine"]) {
					this.statis["BeanRewardLine"] = 0;
				}
				this.statis["BeanRewardLine"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanRewardLine");
				try {
					node.addComponent("LogicBeanRewardLine");
				} catch(e){
					AntLog.Warn("prefab BeanRewardLine has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanRewardLine(add2pool:boolean = true):Promise<ViewBeanRewardLine>{
		if(!this._BeanRewardLine){
			this._BeanRewardLine = await this.NewBeanRewardLine();
		}

		return new Promise<ViewBeanRewardLine>(resolve=>{resolve(this._BeanRewardLine)});
	}

	//-------------------------------------------
	public async NewBeanScoreItem(add2pool:boolean = false):Promise<ViewBeanScoreItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanScoreItem");
			if(node) {
				return new Promise<ViewBeanScoreItem>(resolve=>{resolve(node.getComponent(ViewBeanScoreItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanScoreItem");
			return new Promise<ViewBeanScoreItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanScoreItem", prefab);
				if(!this.statis["BeanScoreItem"]) {
					this.statis["BeanScoreItem"] = 0;
				}
				this.statis["BeanScoreItem"]++;
				let view = node.addComponent("ViewBeanScoreItem");
				try {
					node.addComponent("LogicBeanScoreItem");
				} catch(e){
					AntLog.Warn("prefab BeanScoreItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanScoreItem");
			return new Promise<ViewBeanScoreItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanScoreItem"]) {
					this.statis["BeanScoreItem"] = 0;
				}
				this.statis["BeanScoreItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanScoreItem");
				try {
					node.addComponent("LogicBeanScoreItem");
				} catch(e){
					AntLog.Warn("prefab BeanScoreItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanScoreItem(add2pool:boolean = true):Promise<ViewBeanScoreItem>{
		if(!this._BeanScoreItem){
			this._BeanScoreItem = await this.NewBeanScoreItem();
		}

		return new Promise<ViewBeanScoreItem>(resolve=>{resolve(this._BeanScoreItem)});
	}

	//-------------------------------------------
	public async NewBeanSetting(add2pool:boolean = false):Promise<ViewBeanSetting>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanSetting");
			if(node) {
				return new Promise<ViewBeanSetting>(resolve=>{resolve(node.getComponent(ViewBeanSetting))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanSetting");
			return new Promise<ViewBeanSetting>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanSetting", prefab);
				if(!this.statis["BeanSetting"]) {
					this.statis["BeanSetting"] = 0;
				}
				this.statis["BeanSetting"]++;
				let view = node.addComponent("ViewBeanSetting");
				try {
					node.addComponent("LogicBeanSetting");
				} catch(e){
					AntLog.Warn("prefab BeanSetting has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanSetting");
			return new Promise<ViewBeanSetting>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanSetting"]) {
					this.statis["BeanSetting"] = 0;
				}
				this.statis["BeanSetting"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanSetting");
				try {
					node.addComponent("LogicBeanSetting");
				} catch(e){
					AntLog.Warn("prefab BeanSetting has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanSetting(add2pool:boolean = true):Promise<ViewBeanSetting>{
		if(!this._BeanSetting){
			this._BeanSetting = await this.NewBeanSetting();
		}

		return new Promise<ViewBeanSetting>(resolve=>{resolve(this._BeanSetting)});
	}

	//-------------------------------------------
	public async NewBeanSign(add2pool:boolean = false):Promise<ViewBeanSign>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanSign");
			if(node) {
				return new Promise<ViewBeanSign>(resolve=>{resolve(node.getComponent(ViewBeanSign))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanSign");
			return new Promise<ViewBeanSign>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanSign", prefab);
				if(!this.statis["BeanSign"]) {
					this.statis["BeanSign"] = 0;
				}
				this.statis["BeanSign"]++;
				let view = node.addComponent("ViewBeanSign");
				try {
					node.addComponent("LogicBeanSign");
				} catch(e){
					AntLog.Warn("prefab BeanSign has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanSign");
			return new Promise<ViewBeanSign>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanSign"]) {
					this.statis["BeanSign"] = 0;
				}
				this.statis["BeanSign"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanSign");
				try {
					node.addComponent("LogicBeanSign");
				} catch(e){
					AntLog.Warn("prefab BeanSign has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanSign(add2pool:boolean = true):Promise<ViewBeanSign>{
		if(!this._BeanSign){
			this._BeanSign = await this.NewBeanSign();
		}

		return new Promise<ViewBeanSign>(resolve=>{resolve(this._BeanSign)});
	}

	//-------------------------------------------
	public async NewBeanStarGetAni(add2pool:boolean = false):Promise<ViewBeanStarGetAni>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanStarGetAni");
			if(node) {
				return new Promise<ViewBeanStarGetAni>(resolve=>{resolve(node.getComponent(ViewBeanStarGetAni))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanStarGetAni");
			return new Promise<ViewBeanStarGetAni>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanStarGetAni", prefab);
				if(!this.statis["BeanStarGetAni"]) {
					this.statis["BeanStarGetAni"] = 0;
				}
				this.statis["BeanStarGetAni"]++;
				let view = node.addComponent("ViewBeanStarGetAni");
				try {
					node.addComponent("LogicBeanStarGetAni");
				} catch(e){
					AntLog.Warn("prefab BeanStarGetAni has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanStarGetAni");
			return new Promise<ViewBeanStarGetAni>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanStarGetAni"]) {
					this.statis["BeanStarGetAni"] = 0;
				}
				this.statis["BeanStarGetAni"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanStarGetAni");
				try {
					node.addComponent("LogicBeanStarGetAni");
				} catch(e){
					AntLog.Warn("prefab BeanStarGetAni has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanStarGetAni(add2pool:boolean = true):Promise<ViewBeanStarGetAni>{
		if(!this._BeanStarGetAni){
			this._BeanStarGetAni = await this.NewBeanStarGetAni();
		}

		return new Promise<ViewBeanStarGetAni>(resolve=>{resolve(this._BeanStarGetAni)});
	}

	//-------------------------------------------
	public async NewBeanStarItem(add2pool:boolean = false):Promise<ViewBeanStarItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanStarItem");
			if(node) {
				return new Promise<ViewBeanStarItem>(resolve=>{resolve(node.getComponent(ViewBeanStarItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanStarItem");
			return new Promise<ViewBeanStarItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanStarItem", prefab);
				if(!this.statis["BeanStarItem"]) {
					this.statis["BeanStarItem"] = 0;
				}
				this.statis["BeanStarItem"]++;
				let view = node.addComponent("ViewBeanStarItem");
				try {
					node.addComponent("LogicBeanStarItem");
				} catch(e){
					AntLog.Warn("prefab BeanStarItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanStarItem");
			return new Promise<ViewBeanStarItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanStarItem"]) {
					this.statis["BeanStarItem"] = 0;
				}
				this.statis["BeanStarItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanStarItem");
				try {
					node.addComponent("LogicBeanStarItem");
				} catch(e){
					AntLog.Warn("prefab BeanStarItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanStarItem(add2pool:boolean = true):Promise<ViewBeanStarItem>{
		if(!this._BeanStarItem){
			this._BeanStarItem = await this.NewBeanStarItem();
		}

		return new Promise<ViewBeanStarItem>(resolve=>{resolve(this._BeanStarItem)});
	}

	//-------------------------------------------
	public async NewBeanTimeLimitBtn(add2pool:boolean = false):Promise<ViewBeanTimeLimitBtn>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanTimeLimitBtn");
			if(node) {
				return new Promise<ViewBeanTimeLimitBtn>(resolve=>{resolve(node.getComponent(ViewBeanTimeLimitBtn))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanTimeLimitBtn");
			return new Promise<ViewBeanTimeLimitBtn>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanTimeLimitBtn", prefab);
				if(!this.statis["BeanTimeLimitBtn"]) {
					this.statis["BeanTimeLimitBtn"] = 0;
				}
				this.statis["BeanTimeLimitBtn"]++;
				let view = node.addComponent("ViewBeanTimeLimitBtn");
				try {
					node.addComponent("LogicBeanTimeLimitBtn");
				} catch(e){
					AntLog.Warn("prefab BeanTimeLimitBtn has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanTimeLimitBtn");
			return new Promise<ViewBeanTimeLimitBtn>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanTimeLimitBtn"]) {
					this.statis["BeanTimeLimitBtn"] = 0;
				}
				this.statis["BeanTimeLimitBtn"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanTimeLimitBtn");
				try {
					node.addComponent("LogicBeanTimeLimitBtn");
				} catch(e){
					AntLog.Warn("prefab BeanTimeLimitBtn has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanTimeLimitBtn(add2pool:boolean = true):Promise<ViewBeanTimeLimitBtn>{
		if(!this._BeanTimeLimitBtn){
			this._BeanTimeLimitBtn = await this.NewBeanTimeLimitBtn();
		}

		return new Promise<ViewBeanTimeLimitBtn>(resolve=>{resolve(this._BeanTimeLimitBtn)});
	}

	//-------------------------------------------
	public async NewBeanTrySkinDialog(add2pool:boolean = false):Promise<ViewBeanTrySkinDialog>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanTrySkinDialog");
			if(node) {
				return new Promise<ViewBeanTrySkinDialog>(resolve=>{resolve(node.getComponent(ViewBeanTrySkinDialog))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanTrySkinDialog");
			return new Promise<ViewBeanTrySkinDialog>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanTrySkinDialog", prefab);
				if(!this.statis["BeanTrySkinDialog"]) {
					this.statis["BeanTrySkinDialog"] = 0;
				}
				this.statis["BeanTrySkinDialog"]++;
				let view = node.addComponent("ViewBeanTrySkinDialog");
				try {
					node.addComponent("LogicBeanTrySkinDialog");
				} catch(e){
					AntLog.Warn("prefab BeanTrySkinDialog has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/BeanTrySkinDialog");
			return new Promise<ViewBeanTrySkinDialog>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanTrySkinDialog"]) {
					this.statis["BeanTrySkinDialog"] = 0;
				}
				this.statis["BeanTrySkinDialog"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanTrySkinDialog");
				try {
					node.addComponent("LogicBeanTrySkinDialog");
				} catch(e){
					AntLog.Warn("prefab BeanTrySkinDialog has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanTrySkinDialog(add2pool:boolean = true):Promise<ViewBeanTrySkinDialog>{
		if(!this._BeanTrySkinDialog){
			this._BeanTrySkinDialog = await this.NewBeanTrySkinDialog();
		}

		return new Promise<ViewBeanTrySkinDialog>(resolve=>{resolve(this._BeanTrySkinDialog)});
	}

	//-------------------------------------------
	public async NewBeanExportPageQY(add2pool:boolean = false):Promise<ViewBeanExportPageQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanExportPageQY");
			if(node) {
				return new Promise<ViewBeanExportPageQY>(resolve=>{resolve(node.getComponent(ViewBeanExportPageQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanExportPageQY");
			return new Promise<ViewBeanExportPageQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanExportPageQY", prefab);
				if(!this.statis["BeanExportPageQY"]) {
					this.statis["BeanExportPageQY"] = 0;
				}
				this.statis["BeanExportPageQY"]++;
				let view = node.addComponent("ViewBeanExportPageQY");
				try {
					node.addComponent("LogicBeanExportPageQY");
				} catch(e){
					AntLog.Warn("prefab BeanExportPageQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanExportPageQY");
			return new Promise<ViewBeanExportPageQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanExportPageQY"]) {
					this.statis["BeanExportPageQY"] = 0;
				}
				this.statis["BeanExportPageQY"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanExportPageQY");
				try {
					node.addComponent("LogicBeanExportPageQY");
				} catch(e){
					AntLog.Warn("prefab BeanExportPageQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanExportPageQY(add2pool:boolean = true):Promise<ViewBeanExportPageQY>{
		if(!this._BeanExportPageQY){
			this._BeanExportPageQY = await this.NewBeanExportPageQY();
		}

		return new Promise<ViewBeanExportPageQY>(resolve=>{resolve(this._BeanExportPageQY)});
	}

	//-------------------------------------------
	public async NewBeanMainViewAdvQY(add2pool:boolean = false):Promise<ViewBeanMainViewAdvQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanMainViewAdvQY");
			if(node) {
				return new Promise<ViewBeanMainViewAdvQY>(resolve=>{resolve(node.getComponent(ViewBeanMainViewAdvQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanMainViewAdvQY");
			return new Promise<ViewBeanMainViewAdvQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanMainViewAdvQY", prefab);
				if(!this.statis["BeanMainViewAdvQY"]) {
					this.statis["BeanMainViewAdvQY"] = 0;
				}
				this.statis["BeanMainViewAdvQY"]++;
				let view = node.addComponent("ViewBeanMainViewAdvQY");
				try {
					node.addComponent("LogicBeanMainViewAdvQY");
				} catch(e){
					AntLog.Warn("prefab BeanMainViewAdvQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanMainViewAdvQY");
			return new Promise<ViewBeanMainViewAdvQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanMainViewAdvQY"]) {
					this.statis["BeanMainViewAdvQY"] = 0;
				}
				this.statis["BeanMainViewAdvQY"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanMainViewAdvQY");
				try {
					node.addComponent("LogicBeanMainViewAdvQY");
				} catch(e){
					AntLog.Warn("prefab BeanMainViewAdvQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanMainViewAdvQY(add2pool:boolean = true):Promise<ViewBeanMainViewAdvQY>{
		if(!this._BeanMainViewAdvQY){
			this._BeanMainViewAdvQY = await this.NewBeanMainViewAdvQY();
		}

		return new Promise<ViewBeanMainViewAdvQY>(resolve=>{resolve(this._BeanMainViewAdvQY)});
	}

	//-------------------------------------------
	public async NewBeanResultDialogQY(add2pool:boolean = false):Promise<ViewBeanResultDialogQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanResultDialogQY");
			if(node) {
				return new Promise<ViewBeanResultDialogQY>(resolve=>{resolve(node.getComponent(ViewBeanResultDialogQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanResultDialogQY");
			return new Promise<ViewBeanResultDialogQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanResultDialogQY", prefab);
				if(!this.statis["BeanResultDialogQY"]) {
					this.statis["BeanResultDialogQY"] = 0;
				}
				this.statis["BeanResultDialogQY"]++;
				let view = node.addComponent("ViewBeanResultDialogQY");
				try {
					node.addComponent("LogicBeanResultDialogQY");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialogQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanResultDialogQY");
			return new Promise<ViewBeanResultDialogQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanResultDialogQY"]) {
					this.statis["BeanResultDialogQY"] = 0;
				}
				this.statis["BeanResultDialogQY"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanResultDialogQY");
				try {
					node.addComponent("LogicBeanResultDialogQY");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialogQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanResultDialogQY(add2pool:boolean = true):Promise<ViewBeanResultDialogQY>{
		if(!this._BeanResultDialogQY){
			this._BeanResultDialogQY = await this.NewBeanResultDialogQY();
		}

		return new Promise<ViewBeanResultDialogQY>(resolve=>{resolve(this._BeanResultDialogQY)});
	}

	//-------------------------------------------
	public async NewBeanReviveDialogQY(add2pool:boolean = false):Promise<ViewBeanReviveDialogQY>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanReviveDialogQY");
			if(node) {
				return new Promise<ViewBeanReviveDialogQY>(resolve=>{resolve(node.getComponent(ViewBeanReviveDialogQY))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanReviveDialogQY");
			return new Promise<ViewBeanReviveDialogQY>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanReviveDialogQY", prefab);
				if(!this.statis["BeanReviveDialogQY"]) {
					this.statis["BeanReviveDialogQY"] = 0;
				}
				this.statis["BeanReviveDialogQY"]++;
				let view = node.addComponent("ViewBeanReviveDialogQY");
				try {
					node.addComponent("LogicBeanReviveDialogQY");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialogQY has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quyou/BeanReviveDialogQY");
			return new Promise<ViewBeanReviveDialogQY>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanReviveDialogQY"]) {
					this.statis["BeanReviveDialogQY"] = 0;
				}
				this.statis["BeanReviveDialogQY"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanReviveDialogQY");
				try {
					node.addComponent("LogicBeanReviveDialogQY");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialogQY has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanReviveDialogQY(add2pool:boolean = true):Promise<ViewBeanReviveDialogQY>{
		if(!this._BeanReviveDialogQY){
			this._BeanReviveDialogQY = await this.NewBeanReviveDialogQY();
		}

		return new Promise<ViewBeanReviveDialogQY>(resolve=>{resolve(this._BeanReviveDialogQY)});
	}

	//-------------------------------------------
	public async NewBeanRecordDialogQM(add2pool:boolean = false):Promise<ViewBeanRecordDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanRecordDialogQM");
			if(node) {
				return new Promise<ViewBeanRecordDialogQM>(resolve=>{resolve(node.getComponent(ViewBeanRecordDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanRecordDialogQM");
			return new Promise<ViewBeanRecordDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanRecordDialogQM", prefab);
				if(!this.statis["BeanRecordDialogQM"]) {
					this.statis["BeanRecordDialogQM"] = 0;
				}
				this.statis["BeanRecordDialogQM"]++;
				let view = node.addComponent("ViewBeanRecordDialogQM");
				try {
					node.addComponent("LogicBeanRecordDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanRecordDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanRecordDialogQM");
			return new Promise<ViewBeanRecordDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanRecordDialogQM"]) {
					this.statis["BeanRecordDialogQM"] = 0;
				}
				this.statis["BeanRecordDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanRecordDialogQM");
				try {
					node.addComponent("LogicBeanRecordDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanRecordDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanRecordDialogQM(add2pool:boolean = true):Promise<ViewBeanRecordDialogQM>{
		if(!this._BeanRecordDialogQM){
			this._BeanRecordDialogQM = await this.NewBeanRecordDialogQM();
		}

		return new Promise<ViewBeanRecordDialogQM>(resolve=>{resolve(this._BeanRecordDialogQM)});
	}

	//-------------------------------------------
	public async NewBeanResultDialogQM(add2pool:boolean = false):Promise<ViewBeanResultDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanResultDialogQM");
			if(node) {
				return new Promise<ViewBeanResultDialogQM>(resolve=>{resolve(node.getComponent(ViewBeanResultDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanResultDialogQM");
			return new Promise<ViewBeanResultDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanResultDialogQM", prefab);
				if(!this.statis["BeanResultDialogQM"]) {
					this.statis["BeanResultDialogQM"] = 0;
				}
				this.statis["BeanResultDialogQM"]++;
				let view = node.addComponent("ViewBeanResultDialogQM");
				try {
					node.addComponent("LogicBeanResultDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanResultDialogQM");
			return new Promise<ViewBeanResultDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanResultDialogQM"]) {
					this.statis["BeanResultDialogQM"] = 0;
				}
				this.statis["BeanResultDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanResultDialogQM");
				try {
					node.addComponent("LogicBeanResultDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanResultDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanResultDialogQM(add2pool:boolean = true):Promise<ViewBeanResultDialogQM>{
		if(!this._BeanResultDialogQM){
			this._BeanResultDialogQM = await this.NewBeanResultDialogQM();
		}

		return new Promise<ViewBeanResultDialogQM>(resolve=>{resolve(this._BeanResultDialogQM)});
	}

	//-------------------------------------------
	public async NewBeanReviveDialogQM(add2pool:boolean = false):Promise<ViewBeanReviveDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanReviveDialogQM");
			if(node) {
				return new Promise<ViewBeanReviveDialogQM>(resolve=>{resolve(node.getComponent(ViewBeanReviveDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanReviveDialogQM");
			return new Promise<ViewBeanReviveDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanReviveDialogQM", prefab);
				if(!this.statis["BeanReviveDialogQM"]) {
					this.statis["BeanReviveDialogQM"] = 0;
				}
				this.statis["BeanReviveDialogQM"]++;
				let view = node.addComponent("ViewBeanReviveDialogQM");
				try {
					node.addComponent("LogicBeanReviveDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanReviveDialogQM");
			return new Promise<ViewBeanReviveDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanReviveDialogQM"]) {
					this.statis["BeanReviveDialogQM"] = 0;
				}
				this.statis["BeanReviveDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanReviveDialogQM");
				try {
					node.addComponent("LogicBeanReviveDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanReviveDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanReviveDialogQM(add2pool:boolean = true):Promise<ViewBeanReviveDialogQM>{
		if(!this._BeanReviveDialogQM){
			this._BeanReviveDialogQM = await this.NewBeanReviveDialogQM();
		}

		return new Promise<ViewBeanReviveDialogQM>(resolve=>{resolve(this._BeanReviveDialogQM)});
	}

	//-------------------------------------------
	public async NewBeanTrySkinDialogQM(add2pool:boolean = false):Promise<ViewBeanTrySkinDialogQM>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBeanTrySkinDialogQM");
			if(node) {
				return new Promise<ViewBeanTrySkinDialogQM>(resolve=>{resolve(node.getComponent(ViewBeanTrySkinDialogQM))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanTrySkinDialogQM");
			return new Promise<ViewBeanTrySkinDialogQM>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBeanTrySkinDialogQM", prefab);
				if(!this.statis["BeanTrySkinDialogQM"]) {
					this.statis["BeanTrySkinDialogQM"] = 0;
				}
				this.statis["BeanTrySkinDialogQM"]++;
				let view = node.addComponent("ViewBeanTrySkinDialogQM");
				try {
					node.addComponent("LogicBeanTrySkinDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanTrySkinDialogQM has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("bean/prefab/quanmin/BeanTrySkinDialogQM");
			return new Promise<ViewBeanTrySkinDialogQM>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BeanTrySkinDialogQM"]) {
					this.statis["BeanTrySkinDialogQM"] = 0;
				}
				this.statis["BeanTrySkinDialogQM"]++;
				node.active = true;
				let view = node.addComponent("ViewBeanTrySkinDialogQM");
				try {
					node.addComponent("LogicBeanTrySkinDialogQM");
				} catch(e){
					AntLog.Warn("prefab BeanTrySkinDialogQM has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBeanTrySkinDialogQM(add2pool:boolean = true):Promise<ViewBeanTrySkinDialogQM>{
		if(!this._BeanTrySkinDialogQM){
			this._BeanTrySkinDialogQM = await this.NewBeanTrySkinDialogQM();
		}

		return new Promise<ViewBeanTrySkinDialogQM>(resolve=>{resolve(this._BeanTrySkinDialogQM)});
	}

	//-------------------------------------------
	public async NewBalloonsArrowItem(add2pool:boolean = false):Promise<ViewBalloonsArrowItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBalloonsArrowItem");
			if(node) {
				return new Promise<ViewBalloonsArrowItem>(resolve=>{resolve(node.getComponent(ViewBalloonsArrowItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsArrowItem");
			return new Promise<ViewBalloonsArrowItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBalloonsArrowItem", prefab);
				if(!this.statis["BalloonsArrowItem"]) {
					this.statis["BalloonsArrowItem"] = 0;
				}
				this.statis["BalloonsArrowItem"]++;
				let view = node.addComponent("ViewBalloonsArrowItem");
				try {
					node.addComponent("LogicBalloonsArrowItem");
				} catch(e){
					AntLog.Warn("prefab BalloonsArrowItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsArrowItem");
			return new Promise<ViewBalloonsArrowItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BalloonsArrowItem"]) {
					this.statis["BalloonsArrowItem"] = 0;
				}
				this.statis["BalloonsArrowItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBalloonsArrowItem");
				try {
					node.addComponent("LogicBalloonsArrowItem");
				} catch(e){
					AntLog.Warn("prefab BalloonsArrowItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBalloonsArrowItem(add2pool:boolean = true):Promise<ViewBalloonsArrowItem>{
		if(!this._BalloonsArrowItem){
			this._BalloonsArrowItem = await this.NewBalloonsArrowItem();
		}

		return new Promise<ViewBalloonsArrowItem>(resolve=>{resolve(this._BalloonsArrowItem)});
	}

	//-------------------------------------------
	public async NewBalloonsBowItem(add2pool:boolean = false):Promise<ViewBalloonsBowItem>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBalloonsBowItem");
			if(node) {
				return new Promise<ViewBalloonsBowItem>(resolve=>{resolve(node.getComponent(ViewBalloonsBowItem))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsBowItem");
			return new Promise<ViewBalloonsBowItem>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBalloonsBowItem", prefab);
				if(!this.statis["BalloonsBowItem"]) {
					this.statis["BalloonsBowItem"] = 0;
				}
				this.statis["BalloonsBowItem"]++;
				let view = node.addComponent("ViewBalloonsBowItem");
				try {
					node.addComponent("LogicBalloonsBowItem");
				} catch(e){
					AntLog.Warn("prefab BalloonsBowItem has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsBowItem");
			return new Promise<ViewBalloonsBowItem>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BalloonsBowItem"]) {
					this.statis["BalloonsBowItem"] = 0;
				}
				this.statis["BalloonsBowItem"]++;
				node.active = true;
				let view = node.addComponent("ViewBalloonsBowItem");
				try {
					node.addComponent("LogicBalloonsBowItem");
				} catch(e){
					AntLog.Warn("prefab BalloonsBowItem has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBalloonsBowItem(add2pool:boolean = true):Promise<ViewBalloonsBowItem>{
		if(!this._BalloonsBowItem){
			this._BalloonsBowItem = await this.NewBalloonsBowItem();
		}

		return new Promise<ViewBalloonsBowItem>(resolve=>{resolve(this._BalloonsBowItem)});
	}

	//-------------------------------------------
	public async NewBalloonsGame(add2pool:boolean = false):Promise<ViewBalloonsGame>{
		if(add2pool) {
			let node = AntPoolObject.GetNode("ViewBalloonsGame");
			if(node) {
				return new Promise<ViewBalloonsGame>(resolve=>{resolve(node.getComponent(ViewBalloonsGame))});
			}
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsGame");
			return new Promise<ViewBalloonsGame>(resolve=>{
				node = AntPoolObject.Instantiate("ViewBalloonsGame", prefab);
				if(!this.statis["BalloonsGame"]) {
					this.statis["BalloonsGame"] = 0;
				}
				this.statis["BalloonsGame"]++;
				let view = node.addComponent("ViewBalloonsGame");
				try {
					node.addComponent("LogicBalloonsGame");
				} catch(e){
					AntLog.Warn("prefab BalloonsGame has no logic script");
				}
				resolve(view);
			});
		} else {
			let prefab = await AntResMgr.LoadRes<cc.Prefab>("balloons/prefab/BalloonsGame");
			return new Promise<ViewBalloonsGame>(resolve=>{
				let node = cc.instantiate(prefab);
				if(!this.statis["BalloonsGame"]) {
					this.statis["BalloonsGame"] = 0;
				}
				this.statis["BalloonsGame"]++;
				node.active = true;
				let view = node.addComponent("ViewBalloonsGame");
				try {
					node.addComponent("LogicBalloonsGame");
				} catch(e){
					AntLog.Warn("prefab BalloonsGame has no logic script");
				}
				resolve(view);
			});
		}
	}
	public async GetBalloonsGame(add2pool:boolean = true):Promise<ViewBalloonsGame>{
		if(!this._BalloonsGame){
			this._BalloonsGame = await this.NewBalloonsGame();
		}

		return new Promise<ViewBalloonsGame>(resolve=>{resolve(this._BalloonsGame)});
	}

}
