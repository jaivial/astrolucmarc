import { type DBConfig, type DBSnapshot, type ResolvedDBTable } from '../types.js';
export declare function getMigrationQueries({ oldSnapshot, newSnapshot, reset, }: {
    oldSnapshot: DBSnapshot;
    newSnapshot: DBSnapshot;
    reset?: boolean;
}): Promise<{
    queries: string[];
    confirmations: string[];
}>;
export declare function getTableChangeQueries({ tableName, oldTable, newTable, }: {
    tableName: string;
    oldTable: ResolvedDBTable;
    newTable: ResolvedDBTable;
}): Promise<{
    queries: string[];
    confirmations: string[];
}>;
export declare function getProductionCurrentSnapshot({ appToken, }: {
    appToken: string;
}): Promise<DBSnapshot | undefined>;
export declare function createCurrentSnapshot({ tables }: DBConfig): DBSnapshot;
export declare function createEmptySnapshot(): DBSnapshot;
export declare function formatDataLossMessage(confirmations: string[], isColor?: boolean): string;
