import { LibsqlError } from "@libsql/client";
import { AstroError } from "astro/errors";
const isWindows = process?.platform === "win32";
async function safeFetch(url, options = {}, onNotOK = () => {
  throw new Error(`Request to ${url} returned a non-OK status code.`);
}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    await onNotOK(response);
  }
  return response;
}
class AstroDbError extends AstroError {
  name = "Astro DB Error";
}
class DetailedLibsqlError extends LibsqlError {
  name = "Astro DB Error";
  hint;
  constructor({
    message,
    code,
    hint,
    rawCode,
    cause
  }) {
    super(message, code, rawCode, cause);
    this.hint = hint;
  }
}
function slash(path) {
  const isExtendedLengthPath = path.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, "/");
}
function pathToFileURL(path) {
  if (isWindows) {
    let slashed = slash(path);
    if (!slashed.startsWith("/")) {
      slashed = "/" + slashed;
    }
    return new URL("file://" + slashed);
  }
  return new URL("file://" + path);
}
export {
  AstroDbError,
  DetailedLibsqlError,
  pathToFileURL,
  safeFetch
};
