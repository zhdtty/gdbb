import AntEvent from "./AntEvent";
export default class AntEventMgr {
    private static defIns: AntEventMgr;
    protected listenMap: Map<string, AntEvent>;
    constructor() {
        this.listenMap = new Map<string, AntEvent>();
    }

    public static get Inst(): AntEventMgr {
        if (!AntEventMgr.defIns) {
            AntEventMgr.defIns = new AntEventMgr();
        }
        return AntEventMgr.defIns;
    }

    public Emit(iEventId: string, arg: any): void {
        let event: AntEvent = this.listenMap.get(iEventId);
        if (event) {
            event.Emit(arg);
        }
    }

    public On(iEventId: string, fnCallback: Function): void {
        let event: AntEvent = this.listenMap.get(iEventId);
        if (!event) {
            event = new AntEvent();
            this.listenMap.set(iEventId, event);
        }
        event.On(fnCallback);
    }

    public Off(iEventId: string, fnCallback: Function): void {
        let event: AntEvent = this.listenMap.get(iEventId);
        if (event) {
            event.Off(fnCallback);
        }
    }
}
