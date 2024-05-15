import { bold } from "kleur/colors";
const FOREIGN_KEY_DNE_ERROR = (tableName) => {
  return `Table ${bold(
    tableName
  )} references a table that does not exist. Did you apply the referenced table to the \`tables\` object in your db config?`;
};
const FOREIGN_KEY_REFERENCES_LENGTH_ERROR = (tableName) => {
  return `Foreign key on ${bold(
    tableName
  )} is misconfigured. \`columns\` and \`references\` must be the same length.`;
};
const FOREIGN_KEY_REFERENCES_EMPTY_ERROR = (tableName) => {
  return `Foreign key on ${bold(
    tableName
  )} is misconfigured. \`references\` array cannot be empty.`;
};
const REFERENCE_DNE_ERROR = (columnName) => {
  return `Column ${bold(
    columnName
  )} references a table that does not exist. Did you apply the referenced table to the \`tables\` object in your db config?`;
};
const SEED_DEFAULT_EXPORT_ERROR = (fileName) => {
  return `Missing default function export in ${bold(fileName)}`;
};
export {
  FOREIGN_KEY_DNE_ERROR,
  FOREIGN_KEY_REFERENCES_EMPTY_ERROR,
  FOREIGN_KEY_REFERENCES_LENGTH_ERROR,
  REFERENCE_DNE_ERROR,
  SEED_DEFAULT_EXPORT_ERROR
};
