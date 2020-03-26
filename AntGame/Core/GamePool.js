import AntLog from "../../AntFrame/Log/AntLog";

export default class GamePool {
    private static _ins : GamePool = null;
    private _size : number = 200;
    private _cache : Map<string, cc.NodePool> = null;
    private _used : Map<string, Map<string, any>> = null;
    private constructor() {
        this._cache = new Map<string, cc.NodePool>();
        this._used = new Map<string, Map<string, any>>();
    }

    public static Inst() {
        if (GamePool._ins == null) {
            GamePool._ins = new GamePool();
        }
        return GamePool._ins;
    }

    // public async Init() {
        // let com: any = await Resources.Prefab.NewBrickItemBullet(false);
        // this._used['bullet'] = new Map<string, any>();
        // this._cache['bullet'] = new cc.NodePool();
        // this._cache['bullet'].put(com.node);
        // AntLog.Debug(`bullet uuid: ${com.node.uuid}`);
        // for (let index = 0; index < (this._size - 1); index++) {
        //     let n: cc.Node = cc.instantiate(com.node);
        //     this._cache['bullet'].put(n);
        //     AntLog.Debug(`bullet uuid: ${n.uuid}`);
        // }
    // }

    public async Create(name:string, size:number, np:any) {
        this._used[name] = new Map<string, any>();
        this._cache[name] = new cc.NodePool();
        let n1: cc.Node = np;
        this._cache[name].put(n1);
        for(let index = 0; index < (size - 1); index++)
        {
            let n: cc.Node = cc.instantiate(n1);
            this._cache[name].put(n);
            AntLog.Debug(`${name} uuid: ${n.uuid}`);
        }
    }

    public CheckOut(name: string): any {
        let pool : cc.NodePool = this._cache[name];
        if(!pool || pool.size() <= 0)
        {
            AntLog.Warn(`GamePool CheckOut Exception`);
            return null;
        }

        let n = pool.get();
        this._used[name].set(`${n.uuid}`, n);
        AntLog.Debug(`GamePool CheckOut uuid[${n.uuid}], size[${pool.size()}]`);

        return n;
    }

    public CheckIn(name: string, n: cc.Node): any {
        let pool : cc.NodePool = this._cache[name];
        if(!pool || (pool.size() >= this._size) || !n || !n.isValid)
        {
            AntLog.Warn(`GamePool CheckIn Exception size[${pool.size()}]`);
            return;
        }

        pool.put(n);
        this._used[name].delete(`${n.uuid}`);
        AntLog.Debug(`GamePool CheckIn uuid[${n.uuid}], size[${pool.size()}]`);
    }

    public CheckInAll(name:string) {
        let map : Map<number, any> = this._used[name];
        AntLog.Info(`CheckInAll ${name}`);

        if (map === undefined) {
            AntLog.Error("GamePool error");
            return;
        }

        map.forEach( (v, k)=> {
            AntLog.Info(`test ${k}`);
        });

        let a = Array.from(map.values());
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            this.CheckIn(name, element);
        }
    }
}