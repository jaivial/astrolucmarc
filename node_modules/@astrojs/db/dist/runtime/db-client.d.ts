import type { LibSQLDatabase } from 'drizzle-orm/libsql';
import { type SqliteRemoteDatabase } from 'drizzle-orm/sqlite-proxy';
export declare function createLocalDatabaseClient({ dbUrl }: {
    dbUrl: string;
}): LibSQLDatabase;
export declare function createRemoteDatabaseClient(appToken: string, remoteDbURL: string): SqliteRemoteDatabase<Record<string, never>>;
