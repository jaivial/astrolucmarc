import { readFileSync } from "node:fs";
const PACKAGE_NAME = JSON.parse(
  readFileSync(new URL("../../package.json", import.meta.url), "utf8")
).name;
const RUNTIME_IMPORT = JSON.stringify(`${PACKAGE_NAME}/runtime`);
const RUNTIME_VIRTUAL_IMPORT = JSON.stringify(`${PACKAGE_NAME}/dist/runtime/virtual.js`);
const DB_TYPES_FILE = "db-types.d.ts";
const VIRTUAL_MODULE_ID = "astro:db";
const DB_PATH = ".astro/content.db";
const CONFIG_FILE_NAMES = ["config.ts", "config.js", "config.mts", "config.mjs"];
const MIGRATION_VERSION = "2024-03-12";
export {
  CONFIG_FILE_NAMES,
  DB_PATH,
  DB_TYPES_FILE,
  MIGRATION_VERSION,
  PACKAGE_NAME,
  RUNTIME_IMPORT,
  RUNTIME_VIRTUAL_IMPORT,
  VIRTUAL_MODULE_ID
};
