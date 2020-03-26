export default class AntEvent {
    protected listeners = [];
    public On(fnCallback: Function): void {
        this.listeners.push(fnCallback);
    }

    public Off(fnCallback: Function) {
        if (!fnCallback) {
            this.listeners = [];
        } else {
            let index = this.listeners.indexOf(fnCallback);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        }
    }

    public get eventCount(): number {
        return this.listeners.length;
    }

    public Emit(arg) {
        this.listeners.forEach(fn => {
            fn(arg);
        })
    }
}
