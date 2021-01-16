export declare class StupidItem extends Boolean {
    static readonly IS_SURE = true;
    [Symbol.toPrimitive](): boolean;
    isSureAboutBeingSure(): boolean;
    takeSomeTimeToRethinkIsSure(): Promise<boolean>;
    takeSomeTimeToRethinkIsSureSync(): boolean;
    private static getThinkingDuration;
}
export declare class StupidFactory {
    private isStupid;
    static readonly IS_STUPID = true;
    constructor(isStupid: boolean);
    create({ wrappedBoolean }?: {
        wrappedBoolean?: false;
    }): boolean;
    create({ wrappedBoolean }: {
        wrappedBoolean?: true;
    }): StupidItem;
}
