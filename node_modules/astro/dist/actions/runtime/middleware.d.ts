import type { APIContext } from '../../@types/astro.js';
export type Locals = {
    _actionsInternal: {
        getActionResult: APIContext['getActionResult'];
    };
};
export declare const onRequest: import("../../@types/astro.js").MiddlewareHandler;
