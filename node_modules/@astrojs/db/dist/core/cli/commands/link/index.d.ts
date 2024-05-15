export declare function cmd(): Promise<void>;
export declare function createNewProject({ workspaceId, name, region, }: {
    workspaceId: string;
    name: string;
    region: string;
}): Promise<{
    id: string;
    idName: string;
}>;
export declare function promptExistingProjectName({ workspaceId }: {
    workspaceId: string;
}): Promise<{
    id: string;
    idName: string;
}>;
export declare function promptBegin(): Promise<void>;
export declare function promptLinkExisting(): Promise<boolean>;
export declare function promptLinkNew(): Promise<boolean>;
export declare function promptNewProjectName(): Promise<string>;
export declare function promptNewProjectRegion(): Promise<string>;
