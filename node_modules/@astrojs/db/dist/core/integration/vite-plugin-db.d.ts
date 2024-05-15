import type { AstroConfig, AstroIntegrationLogger } from 'astro';
import type { DBTables } from '../types.js';
import { type VitePlugin } from '../utils.js';
export declare const resolved: {
    module: string;
    importedFromSeedFile: string;
};
export type LateTables = {
    get: () => DBTables;
};
export type LateSeedFiles = {
    get: () => Array<string | URL>;
};
export type SeedHandler = {
    inProgress: boolean;
    execute: (fileUrl: URL) => Promise<void>;
};
type VitePluginDBParams = {
    connectToStudio: false;
    tables: LateTables;
    seedFiles: LateSeedFiles;
    srcDir: URL;
    root: URL;
    logger?: AstroIntegrationLogger;
    output: AstroConfig['output'];
    seedHandler: SeedHandler;
} | {
    connectToStudio: true;
    tables: LateTables;
    appToken: string;
    srcDir: URL;
    root: URL;
    output: AstroConfig['output'];
    seedHandler: SeedHandler;
};
export declare function vitePluginDb(params: VitePluginDBParams): VitePlugin;
export declare function getConfigVirtualModContents(): string;
export declare function getLocalVirtualModContents({ tables, root, }: {
    tables: DBTables;
    root: URL;
}): string;
export declare function getStudioVirtualModContents({ tables, appToken, isBuild, output, }: {
    tables: DBTables;
    appToken: string;
    isBuild: boolean;
    output: AstroConfig['output'];
}): string;
export {};
