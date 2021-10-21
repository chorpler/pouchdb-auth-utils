export declare class AuthError extends Error {
    status: number;
    name: string;
    error: string | boolean;
    taken: boolean;
    reason?: string;
    toJSON: Function;
    toJson: Function;
    constructor(msg: string, ...params: any[]);
}
//# sourceMappingURL=AuthError.d.ts.map