// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AntPoolObject extends cc.Component {
    private static nodeMap:Map<string, Array<cc.Node>>= new Map<string, Array<cc.Node>>();
    private static anyMap:Map<string, Array<any>>= new Map<string, Array<any>>();
    private id:string = "";

    public static GetNode(id:string):cc.Node {
        if(id != ""){
            let array = AntPoolObject.nodeMap.get(id);
            if(array != void 0){
                let node = array.pop();
                if(node){
                    node.active = true;
                }
                return node;
            }
        }
        return null;
    }

    public static AddNode(id:string, node:cc.Node) {
        if(!node.getComponent(AntPoolObject)){
            node.addComponent(AntPoolObject).SetId(id);
        }
    }


    public static Get<T>(id:string):T {
        if(id != ""){
            let array = AntPoolObject.anyMap.get(id);
            if(array != void 0){
                return array.pop() as T;
            }
        }
        return null;
    }

    public static Add(id:string, node:any):any {
        if(id != ""){
            let array = AntPoolObject.anyMap.get(id);
            if(array == void 0){
                array = new Array<any>();
            }
            array.push(node);
        }
        return node;
    }

    public static Instantiate(id:string, prefab:cc.Node | cc.Prefab):cc.Node{
        let node = AntPoolObject.GetNode(id);
        if(!node){
            if (prefab instanceof cc.Prefab) {
                let p : cc.Prefab = prefab;
                node == cc.instantiate(p);
            }else if (prefab instanceof cc.Node) {
                let n : cc.Node = prefab;
                node = cc.instantiate(n);
            }
            node.addComponent(AntPoolObject).SetId(id);
            node.active = true;
        }
        return node;
    }

    onDisable(){
        if(this.id != ""){
            let array = AntPoolObject.nodeMap.get(this.id);
            if(array == void 0){
                array = new Array<cc.Node>();
                AntPoolObject.nodeMap.set(this.id, array);
            }
            if(array.indexOf(this.node) == -1) {
                array.push(this.node);
            }
        }
    }

    public SetId(id: string){
        this.id = id;
    }

}
