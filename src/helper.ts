import lodashCamelCase = require("lodash.camelcase");
import lodashUpperFirst = require("lodash.upperfirst");

export const pascalCase = (str: string): string => {
  return lodashUpperFirst(camelCase(str));
};

export const camelCase = (str: string): string => {
  return lodashCamelCase(str);
};

export const addTabPrefix = (str: string) : string => {
  return `\t${str}`;
};

export const addNewLinePostfix = (str: string) : string => {
  return `${str}\n`;
};