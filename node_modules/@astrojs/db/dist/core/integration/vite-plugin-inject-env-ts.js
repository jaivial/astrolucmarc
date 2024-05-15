import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bold } from "kleur/colors";
import { normalizePath } from "vite";
import { DB_TYPES_FILE } from "../consts.js";
function vitePluginInjectEnvTs({ srcDir, root }, logger) {
  return {
    name: "db-inject-env-ts",
    enforce: "post",
    async config() {
      await setUpEnvTs({ srcDir, root, logger });
    }
  };
}
async function setUpEnvTs({
  srcDir,
  root,
  logger
}) {
  const envTsPath = getEnvTsPath({ srcDir });
  const envTsPathRelativetoRoot = normalizePath(
    path.relative(fileURLToPath(root), fileURLToPath(envTsPath))
  );
  if (existsSync(envTsPath)) {
    let typesEnvContents = await readFile(envTsPath, "utf-8");
    const dotAstroDir = new URL(".astro/", root);
    if (!existsSync(dotAstroDir)) return;
    const dbTypeReference = getDBTypeReference({ srcDir, dotAstroDir });
    if (!typesEnvContents.includes(dbTypeReference)) {
      typesEnvContents = `${dbTypeReference}
${typesEnvContents}`;
      await writeFile(envTsPath, typesEnvContents, "utf-8");
      logger.info(`Added ${bold(envTsPathRelativetoRoot)} types`);
    }
  }
}
function getDBTypeReference({ srcDir, dotAstroDir }) {
  const dbTypesFile = new URL(DB_TYPES_FILE, dotAstroDir);
  const contentTypesRelativeToSrcDir = normalizePath(
    path.relative(fileURLToPath(srcDir), fileURLToPath(dbTypesFile))
  );
  return `/// <reference path=${JSON.stringify(contentTypesRelativeToSrcDir)} />`;
}
function getEnvTsPath({ srcDir }) {
  return new URL("env.d.ts", srcDir);
}
export {
  setUpEnvTs,
  vitePluginInjectEnvTs
};
