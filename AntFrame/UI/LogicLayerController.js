import AntFrame from "../../AntFrame/AntFrame";
import AntPoolObject from "../../AntFrame/Resource/AntPoolObject";
import UIBase from "../../AntFrame/UI/AntUIBase";
import ViewLayerController from '../../AntFrame/UI/ViewLayerController';
import AntLogConfig from "../AntLogConfig";
import AntLog from "../Log/AntLog";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LogicLayerController extends cc.Component {
    public view: ViewLayerController = null;
    private _stack: cc.Node[] = [];
    private _netMaskTimeout: any;
    private _uiIndexTemp = 0;

    onLoad() {
        this.view = this.getComponent(ViewLayerController);
        this.initClickEvents();
        cc.game.addPersistRootNode(this.view.node);
        this.view.node.zIndex = 0;
        this.UIAdapter();
        this.Block.active = false;
        this.Debug.active = false && AntLogConfig.OPEN_ALL;
    }

    public UIAdapter(): void {
        let canvas = cc.find('Canvas');
        this.view.node.anchorX = this.view.node.anchorY = 0.5;
        this.view.node.setPosition(canvas.position.x, canvas.position.y);
        this.view.node.setContentSize(cc.winSize);
    }

    start() {
    }

    onEnable() {
    }

    initClickEvents() {
    }

    public ShowNetMask(timeout: number = 2000) {
        clearTimeout(this._netMaskTimeout);
        if (timeout && timeout > 0) {
            this._netMaskTimeout = setTimeout(() => {
                this.view.layerNetMask.active = false;
            }, timeout);
        }
        this.view.layerNetMask.active = true;
    }

    public HideNetMask() {
        this.view.layerNetMask.active = false;
    }

    public ShowLoading() {
        this.view.layerLoading.active = true;
    }

    public HideLoading() {
        this.view.layerLoading.active = false;
    }

    private ResetBlock(): void {
        for (let i = this._stack.length - 1; i >= 0; i--) {
            if (this._stack[i].active) {
                this.Block.active = true;
                this.Block.setSiblingIndex(this._stack.length);
                this._stack[i].setSiblingIndex(this._stack.length + 1);
                return;
            }
        }
        this.Block.active = false;
    }

    public PushIntoMap(ui: cc.Node, params:any = null) {
        ui.position = cc.Vec3.ZERO;
        ui.setParent(this.Map);
    }

    public async Push(ui: cc.Node, params:any = null) {
        AntLog.Info("Logic UIMgr:#########################################");
        this.DumpStack();
        let canvas = cc.find("Canvas");
        this.view.node.setContentSize(canvas.getContentSize());
        this.view.node.position = canvas.position;
        this._uiIndexTemp ++;
        AntFrame.Adaptor.ResizeNode(ui);
        ui.position = cc.Vec3.ZERO;
        // ui.zIndex = this._uiIndexTemp;

        let index = this._stack.indexOf(ui);
        if (index != -1) {
            if (index < this._stack.length - 1) {
                this._stack.splice(index, 1);
                this._stack.push(ui);
                AntLog.Info(`Logic UIMgr push: name:${ui.name} has been in stack, index:${index}, zindex:${this._uiIndexTemp}`);
            } else {
                AntLog.Warn(`Logic UIMgr index error, index:${index}`);
            }
        } else {
            AntLog.Info(`Logic UIMgr push: name:${ui.name} into stack at first, zindex:${this._uiIndexTemp}`);
            this._stack.push(ui);
            ui.setParent(this.view.layerUI);
        }

        if (!ui.active) {
            ui.active = true;
        }

        if(!params || (params && params.needBlock !== false)){
            this.Block.active = true;
            this.ResetBlock();
        }

        if(params && params.needAnim){
            cc.tween(ui).to(0.1, {scale : 1.2}).to(0.1, {scale : 1}).start();
        }

        AntLog.Info(`Logic UIMgr push name:${ui.name} zindex:${this._uiIndexTemp} stack:${this._stack.length}`);

        this.DumpStack();
    }

    public async PopAll() {
        let len = this._stack.length;
        for (let index = 0; index < len; index++) {
            this.Pop();
        }
    }

    public async Pop(arg: any = null, destroy: boolean = false) {
        AntLog.Info("Logic UIMgr:#########################################");
        this.DumpStack();
        let ui = this._stack[this._stack.length - 1];
        if (ui) {
            let uiBase = ui.getComponent(UIBase);
            if (uiBase) {
                if (uiBase.__waitEvent) {
                    uiBase.__waitEvent.Emit(arg);
                }
            }

            ui.active = false;
            ui.removeFromParent(false);
            if (destroy) {
                ui.destroy();
            }
            this._stack.splice(this._stack.length - 1, 1);
        }

        this.ResetBlock();
        AntLog.Info(`Logic UIMgr pop name:${ui.name} stack:${this._stack.length}`);
        this.DumpStack();
    }

    public async PopDelay(arg: any = null, destroy: boolean = false) : Promise<void> {
        setTimeout(function () {
            this.Pop(arg, destroy);
            return new Promise(resolve => resolve());
        }.bind(this), 0.0001);
    }

    public ShowToast(data: string) {
        let toastNode = this.view.layerToast.getChildByName("Toast");
        let node = AntPoolObject.Instantiate("AntFrameToast", toastNode);
        let parent = toastNode.getParent();
        node.setParent(parent);
        node.setSiblingIndex(parent.childrenCount);
        node.getComponentInChildren(cc.RichText).string = "<outline color=282f35 width=2>" + data + "</outline>";
        let ani = node.getComponent(cc.Animation);
        ani.play();
        ani.on('stop', (e) => {
            node.active = false;
        })
    }

    public get Root(): cc.Node {
        return this.view.node;
    }

    public get Block(): cc.Node {
        return this.view.layerBlock;
    }

    // 地图层
    public get Map(): cc.Node {
        return this.view.layerMap;
    }

    // 界面层
    public get UI(): cc.Node {
        return this.view.layerUI;
    }

    // 弹出层
    public get PopUp(): cc.Node {
        return this.view.layerPopUp;
    }

    // 加载层
    public get Loading(): cc.Node {
        return this.view.layerLoading;
    }

    // 网络提示层
    public get NetMask(): cc.Node {
        return this.view.layerNetMask;
    }

    // 消息提示层
    public get Toast(): cc.Node {
        return this.view.layerToast;
    }

    // 确认窗
    public get Alert(): cc.Node {
        return this.view.layerAlert;
    }

    // 引导层
    public get Guide(): cc.Node {
        return this.view.layerGuide;
    }

    // 调试工具层
    public get Debug(): cc.Node {
        return this.view.layerDebug;
    }

    public DumpStack() {
        for (let index = 0; index < this._stack.length; index++) {
            const ui = this._stack[index];
            AntLog.Debug(`Logic UIMgr DUMP name:${ui.name}, index:${index}, zorder:${ui.zIndex}， id:${ui.uuid}`);
        }
    }
}
