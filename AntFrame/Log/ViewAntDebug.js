
//auto gen

const {ccclass,property} = cc._decorator;
import UIBase from '../UI/AntUIBase';
@ccclass
export default class ViewAntDebug extends UIBase
{

	private _root:cc.Node;
	private _PingLabel:cc.Node;
	private _PingLabelLabel:cc.Label;
	private _DebugView:cc.Node;
	private _scrollViewWin:cc.Node;
	private _scrollViewWinSprite:cc.Sprite;
	private _scrollViewWinScrollView:cc.ScrollView;
	private _content:cc.Node;
	private _contentLayout:cc.Layout;
	private _buttonBar:cc.Node;
	private _buttonBarSprite:cc.Sprite;
	private _btnInfo:cc.Node;
	private _btnInfoSprite:cc.Sprite;
	private _btnInfoButton:cc.Button;
	private _btnDebug:cc.Node;
	private _btnDebugSprite:cc.Sprite;
	private _btnDebugButton:cc.Button;
	private _btnWarning:cc.Node;
	private _btnWarningSprite:cc.Sprite;
	private _btnWarningButton:cc.Button;
	private _btnError:cc.Node;
	private _btnErrorSprite:cc.Sprite;
	private _btnErrorButton:cc.Button;
	private _btnPing:cc.Node;
	private _btnPingSprite:cc.Sprite;
	private _btnPingButton:cc.Button;
	private _Reset:cc.Node;
	private _ResetSprite:cc.Sprite;
	private _ResetButton:cc.Button;
	private _btnClear:cc.Node;
	private _btnClearSprite:cc.Sprite;
	private _btnClearButton:cc.Button;
	private _Hide:cc.Node;
	private _HideSprite:cc.Sprite;
	private _HideButton:cc.Button;
	private _AntMenu:cc.Node;
	private _searchBlock:cc.Node;
	private _searchBlockSprite:cc.Sprite;
	private _searchBlockBlockInputEvents:cc.BlockInputEvents;
	private _labelSearchTitle:cc.Node;
	private _labelSearchTitleLabel:cc.Label;
	private _editBoxCmd:cc.Node;
	private _editBoxCmdEditBox:cc.EditBox;
	private _buttonGo:cc.Node;
	private _buttonGoSprite:cc.Sprite;
	private _buttonGoButton:cc.Button;
	private _labelSceneTitle:cc.Node;
	private _labelSceneTitleLabel:cc.Label;
	private _readmeNode:cc.Node;
	private _readmeNodeScrollView:cc.ScrollView;
	private _btnBack:cc.Node;
	private _btnBackSprite:cc.Sprite;
	private _btnBackButton:cc.Button;
	private _btnSearch:cc.Node;
	private _btnSearchSprite:cc.Sprite;
	private _btnSearchButton:cc.Button;
	private _btnInfoInMenu:cc.Node;
	private _btnInfoInMenuSprite:cc.Sprite;
	private _btnInfoInMenuButton:cc.Button;
	private _btnEject:cc.Node;
	private _btnEjectSprite:cc.Sprite;
	private _btnEjectButton:cc.Button;
	private _btnGC:cc.Node;
	private _btnGCSprite:cc.Sprite;
	private _btnGCButton:cc.Button;
	private _btnRestart:cc.Node;
	private _btnRestartSprite:cc.Sprite;
	private _btnRestartButton:cc.Button;
	private _btnNext:cc.Node;
	private _btnNextSprite:cc.Sprite;
	private _btnNextButton:cc.Button;
	private _btnPrev:cc.Node;
	private _btnPrevSprite:cc.Sprite;
	private _btnPrevButton:cc.Button;
	private _DebugBtn:cc.Node;
	private _DebugBtnSprite:cc.Sprite;
	private _DebugBtnButton:cc.Button;

	public get root():cc.Node{
		if(this._root){
			return this._root;
		}
		this._root=this.node;
		return this._root;
	}

	public get PingLabel():cc.Node{
		if(this._PingLabel){
			return this._PingLabel;
		}
		this._PingLabel=this.node.getChildByName("w_PingLabel");
		return this._PingLabel;
	}

	public get PingLabelLabel():cc.Label{
		if(this._PingLabelLabel){
			return this._PingLabelLabel;
		}
		this._PingLabelLabel=this.PingLabel.getComponent(cc.Label)
		return this._PingLabelLabel;
	}

	public get DebugView():cc.Node{
		if(this._DebugView){
			return this._DebugView;
		}
		this._DebugView=this.node.getChildByName("w_DebugView");
		return this._DebugView;
	}

	public get scrollViewWin():cc.Node{
		if(this._scrollViewWin){
			return this._scrollViewWin;
		}
		this._scrollViewWin=this.node.getChildByName("w_DebugView").getChildByName("w_scrollViewWin");
		return this._scrollViewWin;
	}

	public get scrollViewWinSprite():cc.Sprite{
		if(this._scrollViewWinSprite){
			return this._scrollViewWinSprite;
		}
		this._scrollViewWinSprite=this.scrollViewWin.getComponent(cc.Sprite)
		return this._scrollViewWinSprite;
	}

	public get scrollViewWinScrollView():cc.ScrollView{
		if(this._scrollViewWinScrollView){
			return this._scrollViewWinScrollView;
		}
		this._scrollViewWinScrollView=this.scrollViewWin.getComponent(cc.ScrollView)
		return this._scrollViewWinScrollView;
	}

	public get content():cc.Node{
		if(this._content){
			return this._content;
		}
		this._content=this.node.getChildByName("w_DebugView").getChildByName("w_scrollViewWin").getChildByName("view").getChildByName("w_content");
		return this._content;
	}

	public get contentLayout():cc.Layout{
		if(this._contentLayout){
			return this._contentLayout;
		}
		this._contentLayout=this.content.getComponent(cc.Layout)
		return this._contentLayout;
	}

	public get buttonBar():cc.Node{
		if(this._buttonBar){
			return this._buttonBar;
		}
		this._buttonBar=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar");
		return this._buttonBar;
	}

	public get buttonBarSprite():cc.Sprite{
		if(this._buttonBarSprite){
			return this._buttonBarSprite;
		}
		this._buttonBarSprite=this.buttonBar.getComponent(cc.Sprite)
		return this._buttonBarSprite;
	}

	public get btnInfo():cc.Node{
		if(this._btnInfo){
			return this._btnInfo;
		}
		this._btnInfo=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnInfo");
		return this._btnInfo;
	}

	public get btnInfoSprite():cc.Sprite{
		if(this._btnInfoSprite){
			return this._btnInfoSprite;
		}
		this._btnInfoSprite=this.btnInfo.getComponent(cc.Sprite)
		return this._btnInfoSprite;
	}

	public get btnInfoButton():cc.Button{
		if(this._btnInfoButton){
			return this._btnInfoButton;
		}
		this._btnInfoButton=this.btnInfo.getComponent(cc.Button)
		return this._btnInfoButton;
	}

	public get btnDebug():cc.Node{
		if(this._btnDebug){
			return this._btnDebug;
		}
		this._btnDebug=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnDebug");
		return this._btnDebug;
	}

	public get btnDebugSprite():cc.Sprite{
		if(this._btnDebugSprite){
			return this._btnDebugSprite;
		}
		this._btnDebugSprite=this.btnDebug.getComponent(cc.Sprite)
		return this._btnDebugSprite;
	}

	public get btnDebugButton():cc.Button{
		if(this._btnDebugButton){
			return this._btnDebugButton;
		}
		this._btnDebugButton=this.btnDebug.getComponent(cc.Button)
		return this._btnDebugButton;
	}

	public get btnWarning():cc.Node{
		if(this._btnWarning){
			return this._btnWarning;
		}
		this._btnWarning=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnWarning");
		return this._btnWarning;
	}

	public get btnWarningSprite():cc.Sprite{
		if(this._btnWarningSprite){
			return this._btnWarningSprite;
		}
		this._btnWarningSprite=this.btnWarning.getComponent(cc.Sprite)
		return this._btnWarningSprite;
	}

	public get btnWarningButton():cc.Button{
		if(this._btnWarningButton){
			return this._btnWarningButton;
		}
		this._btnWarningButton=this.btnWarning.getComponent(cc.Button)
		return this._btnWarningButton;
	}

	public get btnError():cc.Node{
		if(this._btnError){
			return this._btnError;
		}
		this._btnError=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnError");
		return this._btnError;
	}

	public get btnErrorSprite():cc.Sprite{
		if(this._btnErrorSprite){
			return this._btnErrorSprite;
		}
		this._btnErrorSprite=this.btnError.getComponent(cc.Sprite)
		return this._btnErrorSprite;
	}

	public get btnErrorButton():cc.Button{
		if(this._btnErrorButton){
			return this._btnErrorButton;
		}
		this._btnErrorButton=this.btnError.getComponent(cc.Button)
		return this._btnErrorButton;
	}

	public get btnPing():cc.Node{
		if(this._btnPing){
			return this._btnPing;
		}
		this._btnPing=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnPing");
		return this._btnPing;
	}

	public get btnPingSprite():cc.Sprite{
		if(this._btnPingSprite){
			return this._btnPingSprite;
		}
		this._btnPingSprite=this.btnPing.getComponent(cc.Sprite)
		return this._btnPingSprite;
	}

	public get btnPingButton():cc.Button{
		if(this._btnPingButton){
			return this._btnPingButton;
		}
		this._btnPingButton=this.btnPing.getComponent(cc.Button)
		return this._btnPingButton;
	}

	public get Reset():cc.Node{
		if(this._Reset){
			return this._Reset;
		}
		this._Reset=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_Reset");
		return this._Reset;
	}

	public get ResetSprite():cc.Sprite{
		if(this._ResetSprite){
			return this._ResetSprite;
		}
		this._ResetSprite=this.Reset.getComponent(cc.Sprite)
		return this._ResetSprite;
	}

	public get ResetButton():cc.Button{
		if(this._ResetButton){
			return this._ResetButton;
		}
		this._ResetButton=this.Reset.getComponent(cc.Button)
		return this._ResetButton;
	}

	public get btnClear():cc.Node{
		if(this._btnClear){
			return this._btnClear;
		}
		this._btnClear=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_btnClear");
		return this._btnClear;
	}

	public get btnClearSprite():cc.Sprite{
		if(this._btnClearSprite){
			return this._btnClearSprite;
		}
		this._btnClearSprite=this.btnClear.getComponent(cc.Sprite)
		return this._btnClearSprite;
	}

	public get btnClearButton():cc.Button{
		if(this._btnClearButton){
			return this._btnClearButton;
		}
		this._btnClearButton=this.btnClear.getComponent(cc.Button)
		return this._btnClearButton;
	}

	public get Hide():cc.Node{
		if(this._Hide){
			return this._Hide;
		}
		this._Hide=this.node.getChildByName("w_DebugView").getChildByName("w_buttonBar").getChildByName("w_Hide");
		return this._Hide;
	}

	public get HideSprite():cc.Sprite{
		if(this._HideSprite){
			return this._HideSprite;
		}
		this._HideSprite=this.Hide.getComponent(cc.Sprite)
		return this._HideSprite;
	}

	public get HideButton():cc.Button{
		if(this._HideButton){
			return this._HideButton;
		}
		this._HideButton=this.Hide.getComponent(cc.Button)
		return this._HideButton;
	}

	public get AntMenu():cc.Node{
		if(this._AntMenu){
			return this._AntMenu;
		}
		this._AntMenu=this.node.getChildByName("w_AntMenu");
		return this._AntMenu;
	}

	public get searchBlock():cc.Node{
		if(this._searchBlock){
			return this._searchBlock;
		}
		this._searchBlock=this.node.getChildByName("w_AntMenu").getChildByName("w_searchBlock");
		return this._searchBlock;
	}

	public get searchBlockSprite():cc.Sprite{
		if(this._searchBlockSprite){
			return this._searchBlockSprite;
		}
		this._searchBlockSprite=this.searchBlock.getComponent(cc.Sprite)
		return this._searchBlockSprite;
	}

	public get searchBlockBlockInputEvents():cc.BlockInputEvents{
		if(this._searchBlockBlockInputEvents){
			return this._searchBlockBlockInputEvents;
		}
		this._searchBlockBlockInputEvents=this.searchBlock.getComponent(cc.BlockInputEvents)
		return this._searchBlockBlockInputEvents;
	}

	public get labelSearchTitle():cc.Node{
		if(this._labelSearchTitle){
			return this._labelSearchTitle;
		}
		this._labelSearchTitle=this.node.getChildByName("w_AntMenu").getChildByName("w_searchBlock").getChildByName("w_labelSearchTitle");
		return this._labelSearchTitle;
	}

	public get labelSearchTitleLabel():cc.Label{
		if(this._labelSearchTitleLabel){
			return this._labelSearchTitleLabel;
		}
		this._labelSearchTitleLabel=this.labelSearchTitle.getComponent(cc.Label)
		return this._labelSearchTitleLabel;
	}

	public get editBoxCmd():cc.Node{
		if(this._editBoxCmd){
			return this._editBoxCmd;
		}
		this._editBoxCmd=this.node.getChildByName("w_AntMenu").getChildByName("w_searchBlock").getChildByName("w_editBoxCmd");
		return this._editBoxCmd;
	}

	public get editBoxCmdEditBox():cc.EditBox{
		if(this._editBoxCmdEditBox){
			return this._editBoxCmdEditBox;
		}
		this._editBoxCmdEditBox=this.editBoxCmd.getComponent(cc.EditBox)
		return this._editBoxCmdEditBox;
	}

	public get buttonGo():cc.Node{
		if(this._buttonGo){
			return this._buttonGo;
		}
		this._buttonGo=this.node.getChildByName("w_AntMenu").getChildByName("w_searchBlock").getChildByName("w_buttonGo");
		return this._buttonGo;
	}

	public get buttonGoSprite():cc.Sprite{
		if(this._buttonGoSprite){
			return this._buttonGoSprite;
		}
		this._buttonGoSprite=this.buttonGo.getComponent(cc.Sprite)
		return this._buttonGoSprite;
	}

	public get buttonGoButton():cc.Button{
		if(this._buttonGoButton){
			return this._buttonGoButton;
		}
		this._buttonGoButton=this.buttonGo.getComponent(cc.Button)
		return this._buttonGoButton;
	}

	public get labelSceneTitle():cc.Node{
		if(this._labelSceneTitle){
			return this._labelSceneTitle;
		}
		this._labelSceneTitle=this.node.getChildByName("w_AntMenu").getChildByName("w_labelSceneTitle");
		return this._labelSceneTitle;
	}

	public get labelSceneTitleLabel():cc.Label{
		if(this._labelSceneTitleLabel){
			return this._labelSceneTitleLabel;
		}
		this._labelSceneTitleLabel=this.labelSceneTitle.getComponent(cc.Label)
		return this._labelSceneTitleLabel;
	}

	public get readmeNode():cc.Node{
		if(this._readmeNode){
			return this._readmeNode;
		}
		this._readmeNode=this.node.getChildByName("w_AntMenu").getChildByName("w_readmeNode");
		return this._readmeNode;
	}

	public get readmeNodeScrollView():cc.ScrollView{
		if(this._readmeNodeScrollView){
			return this._readmeNodeScrollView;
		}
		this._readmeNodeScrollView=this.readmeNode.getComponent(cc.ScrollView)
		return this._readmeNodeScrollView;
	}

	public get btnBack():cc.Node{
		if(this._btnBack){
			return this._btnBack;
		}
		this._btnBack=this.node.getChildByName("w_AntMenu").getChildByName("LeftMenu").getChildByName("w_btnBack");
		return this._btnBack;
	}

	public get btnBackSprite():cc.Sprite{
		if(this._btnBackSprite){
			return this._btnBackSprite;
		}
		this._btnBackSprite=this.btnBack.getComponent(cc.Sprite)
		return this._btnBackSprite;
	}

	public get btnBackButton():cc.Button{
		if(this._btnBackButton){
			return this._btnBackButton;
		}
		this._btnBackButton=this.btnBack.getComponent(cc.Button)
		return this._btnBackButton;
	}

	public get btnSearch():cc.Node{
		if(this._btnSearch){
			return this._btnSearch;
		}
		this._btnSearch=this.node.getChildByName("w_AntMenu").getChildByName("RightMenu").getChildByName("Slider").getChildByName("w_btnSearch");
		return this._btnSearch;
	}

	public get btnSearchSprite():cc.Sprite{
		if(this._btnSearchSprite){
			return this._btnSearchSprite;
		}
		this._btnSearchSprite=this.btnSearch.getComponent(cc.Sprite)
		return this._btnSearchSprite;
	}

	public get btnSearchButton():cc.Button{
		if(this._btnSearchButton){
			return this._btnSearchButton;
		}
		this._btnSearchButton=this.btnSearch.getComponent(cc.Button)
		return this._btnSearchButton;
	}

	public get btnInfoInMenu():cc.Node{
		if(this._btnInfoInMenu){
			return this._btnInfoInMenu;
		}
		this._btnInfoInMenu=this.node.getChildByName("w_AntMenu").getChildByName("RightMenu").getChildByName("Slider").getChildByName("w_btnInfoInMenu");
		return this._btnInfoInMenu;
	}

	public get btnInfoInMenuSprite():cc.Sprite{
		if(this._btnInfoInMenuSprite){
			return this._btnInfoInMenuSprite;
		}
		this._btnInfoInMenuSprite=this.btnInfoInMenu.getComponent(cc.Sprite)
		return this._btnInfoInMenuSprite;
	}

	public get btnInfoInMenuButton():cc.Button{
		if(this._btnInfoInMenuButton){
			return this._btnInfoInMenuButton;
		}
		this._btnInfoInMenuButton=this.btnInfoInMenu.getComponent(cc.Button)
		return this._btnInfoInMenuButton;
	}

	public get btnEject():cc.Node{
		if(this._btnEject){
			return this._btnEject;
		}
		this._btnEject=this.node.getChildByName("w_AntMenu").getChildByName("RightMenu").getChildByName("Slider").getChildByName("w_btnEject");
		return this._btnEject;
	}

	public get btnEjectSprite():cc.Sprite{
		if(this._btnEjectSprite){
			return this._btnEjectSprite;
		}
		this._btnEjectSprite=this.btnEject.getComponent(cc.Sprite)
		return this._btnEjectSprite;
	}

	public get btnEjectButton():cc.Button{
		if(this._btnEjectButton){
			return this._btnEjectButton;
		}
		this._btnEjectButton=this.btnEject.getComponent(cc.Button)
		return this._btnEjectButton;
	}

	public get btnGC():cc.Node{
		if(this._btnGC){
			return this._btnGC;
		}
		this._btnGC=this.node.getChildByName("w_AntMenu").getChildByName("RightMenu").getChildByName("Slider").getChildByName("w_btnGC");
		return this._btnGC;
	}

	public get btnGCSprite():cc.Sprite{
		if(this._btnGCSprite){
			return this._btnGCSprite;
		}
		this._btnGCSprite=this.btnGC.getComponent(cc.Sprite)
		return this._btnGCSprite;
	}

	public get btnGCButton():cc.Button{
		if(this._btnGCButton){
			return this._btnGCButton;
		}
		this._btnGCButton=this.btnGC.getComponent(cc.Button)
		return this._btnGCButton;
	}

	public get btnRestart():cc.Node{
		if(this._btnRestart){
			return this._btnRestart;
		}
		this._btnRestart=this.node.getChildByName("w_AntMenu").getChildByName("RightMenu").getChildByName("Slider").getChildByName("w_btnRestart");
		return this._btnRestart;
	}

	public get btnRestartSprite():cc.Sprite{
		if(this._btnRestartSprite){
			return this._btnRestartSprite;
		}
		this._btnRestartSprite=this.btnRestart.getComponent(cc.Sprite)
		return this._btnRestartSprite;
	}

	public get btnRestartButton():cc.Button{
		if(this._btnRestartButton){
			return this._btnRestartButton;
		}
		this._btnRestartButton=this.btnRestart.getComponent(cc.Button)
		return this._btnRestartButton;
	}

	public get btnNext():cc.Node{
		if(this._btnNext){
			return this._btnNext;
		}
		this._btnNext=this.node.getChildByName("w_AntMenu").getChildByName("CenterMenu").getChildByName("w_btnNext");
		return this._btnNext;
	}

	public get btnNextSprite():cc.Sprite{
		if(this._btnNextSprite){
			return this._btnNextSprite;
		}
		this._btnNextSprite=this.btnNext.getComponent(cc.Sprite)
		return this._btnNextSprite;
	}

	public get btnNextButton():cc.Button{
		if(this._btnNextButton){
			return this._btnNextButton;
		}
		this._btnNextButton=this.btnNext.getComponent(cc.Button)
		return this._btnNextButton;
	}

	public get btnPrev():cc.Node{
		if(this._btnPrev){
			return this._btnPrev;
		}
		this._btnPrev=this.node.getChildByName("w_AntMenu").getChildByName("CenterMenu").getChildByName("w_btnPrev");
		return this._btnPrev;
	}

	public get btnPrevSprite():cc.Sprite{
		if(this._btnPrevSprite){
			return this._btnPrevSprite;
		}
		this._btnPrevSprite=this.btnPrev.getComponent(cc.Sprite)
		return this._btnPrevSprite;
	}

	public get btnPrevButton():cc.Button{
		if(this._btnPrevButton){
			return this._btnPrevButton;
		}
		this._btnPrevButton=this.btnPrev.getComponent(cc.Button)
		return this._btnPrevButton;
	}

	public get DebugBtn():cc.Node{
		if(this._DebugBtn){
			return this._DebugBtn;
		}
		this._DebugBtn=this.node.getChildByName("w_DebugBtn");
		return this._DebugBtn;
	}

	public get DebugBtnSprite():cc.Sprite{
		if(this._DebugBtnSprite){
			return this._DebugBtnSprite;
		}
		this._DebugBtnSprite=this.DebugBtn.getComponent(cc.Sprite)
		return this._DebugBtnSprite;
	}

	public get DebugBtnButton():cc.Button{
		if(this._DebugBtnButton){
			return this._DebugBtnButton;
		}
		this._DebugBtnButton=this.DebugBtn.getComponent(cc.Button)
		return this._DebugBtnButton;
	}

	public get nodeLogTpl():cc.Node{
		return this.node.getChildByName("templates").getChildByName("t_nodeLogTpl");
	}
}