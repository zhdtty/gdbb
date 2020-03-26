import Resources from "../../scripts/api/Resources";

export class AudioMgr {
    private static _instance: AudioMgr = null;
    private _bgmVolume: number = 1.0;
    private _sfxVolume: number = 1.0;
    private _bgmAudioId: number = 0;

    public static getInstance(): AudioMgr {
        if (!this._instance) {
            this._instance = new AudioMgr();
            this._instance.init();
        }
        return this._instance;
    }

    public init() {
    }

    async playBGM(soundName: string) {
        if (this._bgmVolume <= 0) {
            return;
        }

        let cbName = "Sound_" + soundName;
        if (Resources.Sound.__proto__[cbName]) {
            if (this._bgmAudioId > 0) {
                cc.audioEngine.stop(this._bgmAudioId);
            }
            let soundObj: cc.AudioClip = await Resources.Sound.__proto__[cbName].call(Resources.Sound);
            this._bgmAudioId = cc.audioEngine.play(soundObj, true, this._bgmVolume);
        }
    }

    stopBGM() {
        cc.audioEngine.pause(this._bgmAudioId);
    }

    async playSFX(soundName: string) {
        if (this._sfxVolume <= 0) {
            return;
        }
        let cbName = "Sound_" + soundName;
        if (!Resources.Sound.__proto__[cbName]) {
            return;
        }
        let soundObj: cc.AudioClip = await Resources.Sound.__proto__[cbName].call(Resources.Sound);
        cc.audioEngine.play(soundObj, false, this._sfxVolume);
    }

    public setBGMVolume(v: number) {
        if (this._bgmVolume == v) {
            return;
        }
        this._bgmVolume = v;
    }

    public setSFXVolume(v: number) {
        if (this._sfxVolume == v) {
            return;
        }
        this._sfxVolume = v;
    }

    public get BgmVolume(): number {
        return this._bgmVolume;
    }

    public get SfxVolume(): number {
        return this._sfxVolume;
    }

    public pauseBgm() {
        cc.audioEngine.pauseAll();
    }

    public resumeBgm() {
        cc.audioEngine.resumeAll();
    }

    public pauseAll() {
        cc.audioEngine.pauseAll();
    }

    public resumeAll() {
        cc.audioEngine.resumeAll();
    }
}

// export class AudioMgr {
//     private static _instance: AudioMgr = null;
//     private _bgmVolume: number = 1.0;
//     private _sfxVolume: number = 1.0;
//     private _bgmSource: cc.AudioSource = null;
//     private _sfxSources: Array<cc.AudioSource> = null;

//     public static getInstance(): AudioMgr {
//         if (!this._instance) {
//             this._instance = new AudioMgr();
//             this._instance.init();
//         }
//         return this._instance;
//     }

//     public init() {
//         this._bgmSource = new cc.AudioSource();
//         this._bgmSource.loop = true;
//         this._bgmSource.volume = this._bgmVolume;

//         // var t = cc.sys.localStorage.getItem('bgmVolume');
//         // if (t) {
//         //     this.bgmVolume = parseFloat(t);
//         // } else {
//         //     this.bgmVolume = parseFloat(1.0);
//         // }

//         // var t = cc.sys.localStorage.getItem('sfxVolume');
//         // if (t) {
//         //     this.sfxVolume = parseFloat(t);
//         // } else {
//         //     this.sfxVolume = parseFloat(1.0);
//         // }

//         // cc.game.on(cc.game.EVENT_HIDE, function () {
//         //     cc.audioEngine.pauseAll();
//         // });
//         // cc.game.on(cc.game.EVENT_SHOW, function () {
//         //     cc.audioEngine.resumeAll();
//         // });
//     }

//     async playBGM(soundName: string) {
//         if (this._bgmVolume <= 0) {
//             return;
//         }
//         let cbName = "Sound_" + soundName;
//         if (Resources.Sound.__proto__[cbName]) {
//             // log.debug("com:", com, ",com.__proto__:", com.__proto__)
//             let soundObj: cc.AudioClip = await Resources.Sound.__proto__[cbName].call(Resources.Sound);
//             this._bgmSource.clip = soundObj;
//             this._bgmSource.play();
//         }
//     }

//     stopBGM() {
//         this._bgmSource.stop();
//     }

//     async playSFX(soundName: string) {
//         if (this._sfxVolume <= 0) {
//             return;
//         }
//         let cbName = "Sound_" + soundName;
//         if (!Resources.Sound.__proto__[cbName]) {
//             return;
//         }

//         if (!this._sfxSources) {
//             this._sfxSources = new Array<cc.AudioSource>();
//         }
//         AntLog.Info("sfxSources len:", this._sfxSources.length);
//         let sfxSource: cc.AudioSource = null;
//         for (let i = 0; i < this._sfxSources.length; i++) {
//             if (!this._sfxSources[i].isPlaying) {
//                 sfxSource = this._sfxSources[i];
//                 let soundObj: cc.AudioClip = await Resources.Sound.__proto__[cbName].call(Resources.Sound);
//                 sfxSource.clip = soundObj;
//                 sfxSource.play();
//                 return;
//             }
//         }
//         if (!sfxSource) {
//             sfxSource = new cc.AudioSource();
//             sfxSource.loop = false;
//             sfxSource.volume = this._sfxVolume;
//             let soundObj: cc.AudioClip = await Resources.Sound.__proto__[cbName].call(Resources.Sound);
//             sfxSource.clip = soundObj;
//             sfxSource.play();
//             this._sfxSources.push(sfxSource);
//         }
//     }

//     stopSFX() {
//         if(this._sfxSources){
//             for (let i = 0; i < this._sfxSources.length; i++) {
//                 if (this._sfxSources[i].isPlaying) {
//                     this._sfxSources[i].stop();
//                 }
//             }
//         }
//     }

//     public setBGMVolume(v: number) {
//         if (this._bgmVolume == v) {
//             return;
//         }
//         this._bgmVolume = v;
//         if(this._bgmSource){
//             this._bgmSource.volume = v;
//         }
//     }

//     public setSFXVolume(v: number) {
//         if (this._sfxVolume == v) {
//             return;
//         }
//         this._sfxVolume = v;
//         if(this._sfxSources){
//             for (let i = 0; i < this._sfxSources.length; i++) {
//                 this._sfxSources[i].volume = v;
//             }
//         }
//     }

//     public get BgmVolume(): number {
//         return this._bgmVolume;
//     }

//     public get SfxVolume(): number {
//         return this._sfxVolume;
//     }

//     public pauseBgm(){
//         if(this._bgmSource){
//             this._bgmSource.pause();
//         }
//     }

//     public resumeBgm(){
//         if(this._bgmSource){
//             this._bgmSource.resume();
//         }
//     }

//     public pauseAll() {
//         if(!this._sfxSources){
//             return;
//         }

//         this._bgmSource.pause();
//         for (let i = 0; i < this._sfxSources.length; i++) {
//             this._sfxSources[i].pause();
//         }
//     }

//     public resumeAll() {
//         if(!this._sfxSources){
//             return;
//         }

//         this._bgmSource.resume();
//         for (let i = 0; i < this._sfxSources.length; i++) {
//             this._sfxSources[i].resume();
//         }
//     }
// }