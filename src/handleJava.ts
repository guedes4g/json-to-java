import { javaClassBody, javaClass, javaAttribute } from "./types";
import { pascalCase, camelCase, addTabPrefix as t, addNewLinePostfix as n } from "./helper";

const writeJavaClass = (javaClass: javaClass): javaClassBody => {
  let body = "";

  body += "package guedes; \n\n";
  body += n(`public class ${pascalCase(javaClass.name)} {`);

  //attributes
  javaClass.attributes.forEach(attribute => {
    body += t(n(`private ${handleJavaClassType(attribute)} ${camelCase(attribute.name)};`));
  });

  body += n("");

  //constructor
  body += t(n(`public ${pascalCase(javaClass.name)}() {`));
  body += n("");
  body += t(n(`}`));

  body += n("");

  //getter
  javaClass.attributes.forEach(attribute => {
    body += t(n(`public get${pascalCase(attribute.name)}() {`));
    body += t(t(n(`return this.${camelCase(attribute.name)};`)));
    body += t(n(n(`}`)));
  });

  //setter
  javaClass.attributes.forEach(attribute => {
    body += t(n(`public set${pascalCase(attribute.name)}(${handleJavaClassType(attribute)} value) {`));
    body += t(t(n(`this.${camelCase(attribute.name)} = value;`)));
    body += t(n(n(`}`)));
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