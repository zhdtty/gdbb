import AntLog from "../../AntFrame/Log/AntLog";
import { AntRegistry } from "../Core/Registry";

declare var tt;

export class Recorder {
    private static _inst: Recorder;
    private _recorder: any = null;
    private _videoPath: string = "";
    public static get inst(): Recorder {
        if (!this._inst) {
            this._inst = new Recorder();
            this._inst.init();
        }
        return this._inst;
    }

    public init() {
        if (typeof tt != 'undefined') {
            this._recorder = tt.getGameRecorderManager();
        }

        if (this._recorder == undefined) {
            this._recorder = {}
            this._recorder.start = function () { }
            this._recorder.pause = function () { }
            this._recorder.resume = function () { }
            this._recorder.stop = function () { }
            this._recorder.onStart = function () { }
            this._recorder.onPause = function () { }
            this._recorder.onResume = function () { }
            this._recorder.onStart = function () { }
            this._recorder.onStop = function () { }
            this._recorder.onError = function () { }
            this._recorder.onInterruptionBegin = function () { }
            this._recorder.onInterruptionEnd = function () { }
        }

        let that = this;
        that._recorder.onStart(res => {
            AntLog.Info("Recorder start");
        });

        that._recorder.onPause(res => {
            AntLog.Info("Recorder pause");
        });

        that._recorder.onResume(res => {
            AntLog.Info("Recorder pause");
        });

        that._recorder.onStop(res => {
            AntLog.Info("Recorder stop");
            that._videoPath = res.videoPath;
            AntRegistry.inst.set('douyin_video_path', res.videoPath);
        });

        that._recorder.onError(res => {
            AntLog.Info("Recorder error");
        });

        that._recorder.onInterruptionBegin(res => {
            AntLog.Info("Recorder interruption begin");
        });

        that._recorder.onInterruptionEnd(res => {
            AntLog.Info("Recorder interruption end");
        });
    }

    public start(params: any = null) {
        params = params || { duration: 60 };
        this._recorder.start(params);
    }

    public pause() {
        this._recorder.pause();
    }

    public resume() {
        this._recorder.resume();
    }

    public stop() {
        this._recorder.stop();
    }

    public recordClip(params: any = null) {
        this._recorder.recordClip(params);
    }

    public clipVideo(params: any = null) {
        params = params || {};

        if (params.path == undefined) {
            params.path = this._videoPath;
        }
        AntLog.Info(`Video Recorder Clip Video : ${params.path}`);
        this._recorder.clipVideo(params);
    }

    public shareVideo(params: any = null) {
        params = params || {};
        let videoPath = AntRegistry.inst.get('douyin_video_path');
        tt.shareAppMessage({
            channel: 'video',
            title: '果冻女孩',
            desc: '魔性Q弹果冻跳一跳，完全停不下来！',
            imageUrl: '',
            templateId: '', // 替换成通过审核的分享ID
            query: '',
            extra: {
                videoPath: videoPath, // 可用录屏得到的视频地址
                videoTopics: ['果冻女孩'],
                createChallenge: true,
            },
            success: params.success || function () {
                AntLog.Info('分享视频成功');
            },
            fail: params.fail || function () {
                AntLog.Info('分享视频失败');
            },
        })
    }
}
