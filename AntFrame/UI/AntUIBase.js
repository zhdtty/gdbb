import AntEvent from '../Event/AntEvent';

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIBase extends cc.Component {

    public __waitEvent:AntEvent;

    public async Wait():Promise<any>{
        if(!this.__waitEvent) {
            this.__waitEvent = new AntEvent();
        }
        return new Promise<any>(resolve=>{
            this.__waitEvent.On((arg)=>{
                this.__waitEvent.Off(null);
                resolve(arg);
            })
        });
    }
}
