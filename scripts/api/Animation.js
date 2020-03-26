import AntResMgr from "../../AntFrame/Resource/AntResMgr";

// antframe auto generate tools : IMPORT POINT STUB


export default class Animation {
	// antframe auto generate tools : DECLARE POINT STUB

    private _anim_car_move:cc.AnimationClip;
    private _anim_skinGet:cc.AnimationClip;

	// antframe auto generate tools : API POINT STUB

    //-------------------------------------------
    public async Anim_car_move():Promise<cc.AnimationClip>{
        if(!this._anim_car_move) {
            this._anim_car_move = await AntResMgr.LoadRes<cc.AnimationClip>("sudoku/animation/car_move");
            return new Promise<cc.AnimationClip>(resolve=>{
                resolve(this._anim_car_move);
            })
        }
        return new Promise<cc.AnimationClip>(resolve=>{
            resolve(this._anim_car_move);
       })
    }
    //-------------------------------------------
    public async Anim_skinGet():Promise<cc.AnimationClip>{
        if(!this._anim_skinGet) {
            this._anim_skinGet = await AntResMgr.LoadRes<cc.AnimationClip>("sudoku/animation/skinGet");
            return new Promise<cc.AnimationClip>(resolve=>{
                resolve(this._anim_skinGet);
            })
        }
        return new Promise<cc.AnimationClip>(resolve=>{
            resolve(this._anim_skinGet);
       })
    }
}
