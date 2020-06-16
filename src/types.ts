export type attributeType = "String" | "int" | "float" | "boolean" | "object" | "list" | null;

export type javaAttribute = {
  name: string,
  type: attributeType
};

export type javaClass = {
  name: string,
  attributes: javaAttribute[]
};

export type rawData = {
  name: string,
  rawData: any
};

export type javaClassBody = {
  name: string,
  textBody: string
};