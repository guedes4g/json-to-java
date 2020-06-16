import { javaClassBody, javaClass, javaAttribute } from "./types";
import { pascalCase, camelCase } from "./helper";

const writeJavaClass = (javaClass: javaClass): javaClassBody => {
  let body = "";

  body += "package guedes; \n\n";
  body += `public class ${pascalCase(javaClass.name)} { \n`;

  //attributes
  javaClass.attributes.forEach(attribute => {
    body += `private ${handleJavaClassType(attribute)} ${camelCase(attribute.name)}; \n`;
  });

  body += "\n\n";

  //constructor
  body += `public ${pascalCase(javaClass.name)}() { \n\n } \n\n`;

  //getter
  javaClass.attributes.forEach(attribute => {
    body += `public get${pascalCase(attribute.name)}() { \n`;
    body += `\t\t return this.${camelCase(attribute.name)}; \n`;
    body += `} \n\n`;
  });

  //setter
  javaClass.attributes.forEach(attribute => {
    body += `public set${pascalCase(attribute.name)}(${handleJavaClassType(attribute)} value) { \n`;
    body += `\t\t this.${camelCase(attribute.name)} = value; \n`;
    body += `} \n\n`;
  });

  body += `}`;

  return { name: pascalCase(javaClass.name), textBody: body };
};

const handleJavaClassType = (attribute: javaAttribute) => {
  if (attribute.type === "object") {
    return pascalCase(attribute.name);
  }

  return attribute.type;
};

export default writeJavaClass;