import AntLog from "../Log/AntLog";
import AntPoolObject from "./AntPoolObject";
/**
 * 资源描述
 */
export class AntResStruct
{
    public url: string;
    public autoRelease: boolean;
    /**返回的资源 */
    private data: any;
    constructor()
    {
        this.autoRelease = false;
        this.url = "";
    }

    public GetData<T>(): T
    {
        return this.data as T;
    }

    public Reset(): void
    {
        this.url = "";
        this.autoRelease = false;
        this.data = null;
        AntPoolObject.Add("ResStruct", this);
    }

    public SetData(data: any): void
    {
        if(data instanceof cc.Texture2D){
            this.data = new cc.SpriteFrame(data);
        } else if(data instanceof cc.TextAsset){
            this.data = data.text;
        } else if(data instanceof cc.JsonAsset){
            this.data = data.json;
        } else {
            this.data = data;
        }
    }

    /**
     *
     * @param url 路径
     * @param auto 是否在场景切换时销毁，默认不销毁
     * @param isNetWork 是否从网络加载，如腾讯的头像
     */
    public static Create(url: string, auto: boolean = false): AntResStruct
    {
        let res: AntResStruct = AntPoolObject.Get<AntResStruct>("ResStruct") || new AntResStruct() ;
        res.data = null;
        res.url = url;
        res.autoRelease = auto;
        return res;
    }
}

export default class AntResMgr {
    private static resMap:Map<string, AntResStruct> = new Map<string, AntResStruct> ();

    public static async LoadRes<T>(url:string="", auto:boolean = false):Promise<T>{
        return new Promise<T>(resolve=>{
            let res = AntResMgr.resMap.get(url);
            if(res) {
                resolve(res.GetData<T>());
                return;
            }

            if(url.indexOf('/prefab/') > 0) {
                cc.loader.loadRes(url, cc.Prefab, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    resolve(res.GetData<T>());
                });
            }else if(url.indexOf('/sound/') > 0) {
                cc.loader.loadRes(url, cc.AudioClip, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    resolve(res.GetData<T>());
                });
            }else if(url.indexOf('/texture/') > 0) {
                cc.loader.loadRes(url, cc.SpriteFrame, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    resolve(res.GetData<T>());
                });
            }else if(url.indexOf('/animation/') > 0) {
                cc.loader.loadRes(url, cc.AnimationClip, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    resolve(res.GetData<T>());
                });
            } else if(url.indexOf('/atlas/') > 0) {
                cc.loader.loadRes(url, cc.SpriteAtlas, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    resolve(res.GetData<T>());
                });
            } else if(url.indexOf('/json/') > 0) {
                cc.loader.loadRes(url, function (err, data) {
                    res = AntResStruct.Create(url, auto);
                    res.SetData(data);
                    AntResMgr.resMap.set(url, res);
                    resolve(res.GetData<T>());
                });
            } else {
                AntLog.Error(`loadres failed dir not match: ${url}`);
            }
        });
    }

    public static async LoadUrl<T>(url:string="", type:string="png", auto:boolean = false):Promise<T>{
        return new Promise<T>(resolve=>{
            let res = AntResMgr.resMap.get(url);
            if(res){
                resolve(res.GetData<T>());
                return;
            }
            cc.loader.load({url: url, type: type}, function (err, data) {
                if (err) {
                    AntLog.Error("AntResMgr LoadUrl Error: " + err);
                    resolve(null);
                    return;
                }
		        res = AntResStruct.Create(url, auto);
                res.SetData(data);
                resolve(res.GetData<T>());
		    });
        });
    }

    /*
    private static async LoadResArray<T>(url:string=""):Promise<T>{
        return new Promise<T>(resolve=>{
            cc.loader.loadResArray(url, function (err, xnode) {
                if(!(xnode instanceof Text)){
                    resolve(null);
                }
                resolve(xnode);
            });
        });
    }*/

    //预加载文件夹下资源
    public static async PreLoadResDir(url:string="", progressCb:any = null, completeCb:any = null):Promise<boolean>{
        return new Promise(resolve=>{
            cc.loader.loadResDir(url, function(cpCount, totalCount, item:any){
                progressCb && progressCb(cpCount, totalCount);
            },function (err, assets) {
                completeCb && completeCb();
                resolve(true);
            });
        });
    };

    public static PreloadResSync(url:string="", progressCb:any = null, completeCb:any = null){
        cc.loader.loadResDir(url, function(cpCount, totalCount, item:any){
            progressCb && progressCb(cpCount, totalCount);
        },function (err, assets) {
            completeCb && completeCb();
        });
    }
}
