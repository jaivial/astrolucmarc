/// <reference types="node" resolution-mode="require"/>
export declare const SESSION_LOGIN_FILE: import("url").URL;
export declare const PROJECT_ID_FILE: import("url").URL;
export interface ManagedAppToken {
    token: string;
    renew(): Promise<void>;
    destroy(): Promise<void>;
}
export declare function getProjectIdFromFile(): Promise<string | undefined>;
export declare function getSessionIdFromFile(): Promise<string | undefined>;
export declare function getManagedAppTokenOrExit(token?: string): Promise<ManagedAppToken>;
