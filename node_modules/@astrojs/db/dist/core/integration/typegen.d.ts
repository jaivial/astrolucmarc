import type { AstroConfig } from 'astro';
import type { DBTables } from '../types.js';
export declare function typegen(astroConfig: Pick<AstroConfig, 'root' | 'integrations'>): Promise<void>;
export declare function typegenInternal({ tables, root }: {
    tables: DBTables;
    root: URL;
}): Promise<void>;
