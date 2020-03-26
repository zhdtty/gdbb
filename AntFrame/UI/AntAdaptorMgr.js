import AntFrame from "../AntFrame";
import AntLog from "../Log/AntLog";

export enum SceneOrientation {
    None = 0,
    Landscape = 1,
    Portrait = 2,
    User = 3,
}

export default class AntAdaptorMgr {

    public static readonly HEAD_HEIGHT: number = 80;
    public static readonly BOTTOM_HEIGHT: number = 50;

    private _canvasWidth: number = .0;
    private _canvasHeight: number = .0;
    private _designWidth: number = .0;
    private _designHeight: number = .0;
    private _ratio: number = 1.0;
    private _rootPos: cc.Vec3 = cc.Vec3.ZERO;
    private _fringeFlag: boolean = false;
    private _sceneOrientation: SceneOrientation = SceneOrientation.None;
    private _fitString: string = "none";

    constructor() {
        this.Init();
    }

    public Init() {
        this._fringeFlag = false;
        this._UpdateCanvasInfo();

        if (this.IsFringe()) {
            this._HandleFringe();
            this._rootPos.y -= (AntAdaptorMgr.HEAD_HEIGHT - AntAdaptorMgr.BOTTOM_HEIGHT);
        }
    }

    private _UpdateCanvasInfo() {
        this._canvasWidth = cc.winSize.width;
        this._canvasHeight = cc.winSize.height;
        let canvas: cc.Node = cc.find("Canvas");
        this._rootPos = canvas.position;
    }

    public IsFringe(): boolean {
        return this._fringeFlag;
    }

    private _HandleFringe(): void {
        this._canvasHeight = cc.winSize.height - AntAdaptorMgr.HEAD_HEIGHT - AntAdaptorMgr.BOTTOM_HEIGHT;
        console.error("handle fringe: " + this._canvasHeight);
    }

    public ResizeNode(node: cc.Node) : void {
        node.width = AntFrame.UIMgr.view.node.width;
        node.height = AntFrame.UIMgr.view.node.height;
    }

    public get CanvasHeight(): number {
        return this._canvasHeight;
    }

    public get CanvasWidth(): number {
        return this._canvasWidth;
    }

    public get DesignHeight(): number {
        return this._designHeight;
    }

    public get DesignWidth(): number {
        return this._designWidth;
    }

    public get Ratio(): number {
        return this._ratio;
    }

    public get RootPos(): cc.Vec2 {
        return this._rootPos;
    }

    public dump(): void {
        AntLog.Debug('----------------------------------');
        AntLog.Debug('Current Scene: ' + AntFrame.SceneName);

        let cvsNode = cc.find("Canvas");
        AntLog.Debug("Canvas node size: ", cvsNode.width, cvsNode.height);

        let cvs : cc.Canvas = cvsNode.getComponent(cc.Canvas);
        AntLog.Debug("DR Info:", cvs.designResolution.toString());
        AntLog.Debug("fitHeight: ", cvs.fitHeight, "fitWidth: ", cvs.fitWidth);

        if (cvs.fitWidth || cvs.fitHeight) {
            cc.error("Scene Settings: DesignResolutionPolicy Error");
        }

        let win = cc.winSize;
        AntLog.Debug("Win: ", win.width, win.height, win.width / win.height);

        let frame = cc.view.getFrameSize();
        AntLog.Debug("frame: ", frame.width, frame.height, frame.width/frame.height);

        AntLog.Debug("FIT STRING: ", this._fitString);
    }

    public Adapt(dr : cc.Size) {
        this._UpdateCanvasInfo();
        let cvs : cc.Canvas = cc.find("Canvas").getComponent(cc.Canvas);
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        if((rw/rh) > (dr.width / dr.height)){
            //!#zh: 是否优先将设计分辨率高度撑满视图高度。 */
            //cvs.fitHeight = true;
            //如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw/rh;
        }
        else{
            /*!#zh: 是否优先将设计分辨率宽度撑满视图宽度。 */
            //cvs.fitWidth = true;
            //如果更短，则用定宽
            finalW = dr.width;
            finalH = rh/rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
        cvs.fitHeight = false;
        cvs.fitWidth = false;

        AntLog.Debug(AntFrame.UIMgr.view.node.name);
        AntFrame.UIMgr.view.node.width = finalW;
        AntFrame.UIMgr.view.node.height = finalH;
        AntFrame.UIMgr.view.node.x = cvs.node.x;
        AntFrame.UIMgr.view.node.y = cvs.node.y;

        cvs.node.emit('resize');
        AntFrame.UIMgr.view.node.emit('resize');
    }

    public ChangeOrientation(ori: SceneOrientation): void {
        AntLog.Debug("ChangeOrientation entry");
        if(this._sceneOrientation == ori) {
            return;
        }

        AntLog.Debug("ChangeOrientation begin");
        this._sceneOrientation = ori;
        if (cc.sys.OS_ANDROID == cc.sys.os && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jsInvoke/jsInvoke", "changeOrientation", "(I)V", ori);
        } else if (cc.sys.OS_IOS == cc.sys.os && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("AppController", 'setOrientation:', ori);
        }

        {
            if (ori == SceneOrientation.Portrait) {
                AntLog.Debug("ChangeOrientation web portrait");
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            } else if (ori == SceneOrientation.Landscape) {
                AntLog.Debug("ChangeOrientation web landscape");
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
        }

        let frameSize = cc.view.getFrameSize();
        if (this._sceneOrientation == SceneOrientation.Portrait) {
            if (frameSize.width > frameSize.height) {
                cc.view.setFrameSize(frameSize.height, frameSize.width);
            }
        } else {
            if (frameSize.height > frameSize.width) {
                cc.view.setFrameSize(frameSize.height, frameSize.width);
            }
        }
    }

    public ResizeScene(designWidth: number, designHeight: number): void {
        this.dump();
        let frameSize = cc.view.getFrameSize();
        if (this._sceneOrientation == SceneOrientation.Portrait) {
            cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            if (frameSize.width > frameSize.height) {
                cc.view.setFrameSize(frameSize.height, frameSize.width);
            }
        } else {
            cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            if (frameSize.height > frameSize.width) {
                cc.view.setFrameSize(frameSize.height, frameSize.width);
            }
        }

        let canvas = cc.find("Canvas");
        AntLog.Error("node name : ", AntFrame.UIMgr.view.node.name);
        AntFrame.UIMgr.view.node.width = canvas.width;
        AntFrame.UIMgr.view.node.height = canvas.height;
        AntFrame.UIMgr.view.node.x = canvas.x;
        AntFrame.UIMgr.view.node.y = canvas.y;

        return

        frameSize = cc.view.getFrameSize();
        this._designWidth = designWidth;
        this._designHeight = designHeight;

        if ((designWidth / designHeight) >= (frameSize.width / frameSize.height)) {
            // cc.view.setDesignResolutionSize(designWidth, designHeight, cc.ResolutionPolicy.FIXED_WIDTH);
            this._ratio = frameSize.height / designHeight;
            this._fitString = "FIXED_WIDTH";
        } else {
            // cc.view.setDesignResolutionSize(designWidth, designHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
            this._ratio = frameSize.width / designWidth;
            this._fitString = "FIXED_HEIGHT";
        }

        this.dump();

        this._canvasWidth = designWidth * this._ratio;
        this._canvasWidth = designHeight * this._ratio;

        cc.log(frameSize.width, frameSize.height, this._canvasWidth, this._canvasHeight);

        if (cc.sys.isNative) {
            let eTmp: any = new cc.Event.EventCustom("resize", true);
            let e: Event = eTmp as Event;
            window.dispatchEvent(e);
        }
    }
}
