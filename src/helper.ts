import lodashCamelCase = require("lodash.camelcase");
import lodashUpperFirst = require("lodash.upperfirst");

export const pascalCase = (str: string): string => {
  return lodashUpperFirst(camelCase(str));
};

export const camelCase = (str: string): string => {
  return lodashCamelCase(str);
};