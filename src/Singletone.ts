export class Singletone{
    private static instance: Singletone;
    public timestamp: Date;
    private constructor() {}

    public static getInstance() {
        if (!Singletone.instance) {
            Singletone.instance = new Singletone();
            Singletone.instance.timestamp = new Date();
        }

        return Singletone.instance;
    }
}