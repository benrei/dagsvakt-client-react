const set = require("lodash.set");
const agColumnsToGqlQuery = (queryName, agColumns = []) => {
  const _args = ``;
  const gqlObj = buildGqlObj(agColumns);
  console.log(gqlObj);

  let query = `${queryName}(${_args}) {
    ${""}
  }`;

  return query;
};

const buildGqlObj = agColumns => {
  let obj = {};
  agColumns.filter(c => c.field).forEach(({ field }) => set(obj, field, field));

  const buildGqlString = (obj, str = "") => {
    str += "{\n";
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== "object") str += key + "\n";
      else str += buildGqlString(obj[key], key);
    });
    str += "\n}";
    return str;
  };
  console.log(buildGqlString(obj, ""));

  let str = "";
  Object.keys(obj).forEach(key => {
    if (key === typeof "string") str += key + "\n";
  });
  console.log(str);

  return obj;
};

const unflatten = obj => {
  var result = {};
  for (const key in obj) {
    var keys = key.split(".");
    keys.reduce(function(acc, curVal, i) {
      return (
        acc[curVal] ||
        (acc[curVal] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 == i
            ? obj[key]
            : {}
          : [])
      );
    }, result);
  }
  return result;
};

const unflattenMany = data => data.map(obj => unflatten(obj));

export default { agColumnsToGqlQuery };
