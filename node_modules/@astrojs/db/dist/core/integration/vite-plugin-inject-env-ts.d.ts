import type { AstroIntegrationLogger } from 'astro';
import type { VitePlugin } from '../utils.js';
export declare function vitePluginInjectEnvTs({ srcDir, root }: {
    srcDir: URL;
    root: URL;
}, logger: AstroIntegrationLogger): VitePlugin;
export declare function setUpEnvTs({ srcDir, root, logger, }: {
    srcDir: URL;
    root: URL;
    logger: AstroIntegrationLogger;
}): Promise<void>;
