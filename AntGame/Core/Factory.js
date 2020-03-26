
/**
 * AntFrame Core Library
 */

export class AntFactory {
    public create<T>(type: (new () => T)): T {
        return new type();
    }
}
