import { gql } from "@apollo/client";
const set = require("lodash.set");

const agColumnsToGqlQuery = (queryName, agColumns = [], args) => {
  // TODO: args
  const _args = args ? "" : ``;
  let query = `{\n${queryName}${_args}${buildGqlObj(agColumns)}\n}`;
  return gql`
    ${query}
  `;
};

const buildGqlObj = agColumns => {
  let obj = {};
  agColumns.filter(c => c.field).forEach(({ field }) => set(obj, field, field));

  const buildGqlString = (obj, str = "") => {
    const all = Object.keys(obj).map(key => {
      if (typeof obj[key] !== "object") return key;
      else return `${buildGqlString(obj[key], key)}`;
    });
    str += `{\n${all.join(`\n`)}\n}`;
    return str;
  };
  return buildGqlString(obj, "");
};

export default { agColumnsToGqlQuery };
