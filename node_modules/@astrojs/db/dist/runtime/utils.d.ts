import { LibsqlError } from '@libsql/client';
import { AstroError } from 'astro/errors';
/**
 * Small wrapper around fetch that throws an error if the response is not OK. Allows for custom error handling as well through the onNotOK callback.
 */
export declare function safeFetch(url: Parameters<typeof fetch>[0], options?: Parameters<typeof fetch>[1], onNotOK?: (response: Response) => void | Promise<void>): Promise<Response>;
export declare class AstroDbError extends AstroError {
    name: string;
}
export declare class DetailedLibsqlError extends LibsqlError {
    name: string;
    hint?: string;
    constructor({ message, code, hint, rawCode, cause, }: {
        message: string;
        code: string;
        hint?: string;
        rawCode?: number;
        cause?: Error;
    });
}
export declare function pathToFileURL(path: string): URL;
