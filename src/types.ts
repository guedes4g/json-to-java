export type attributeType = "String" | "int" | "float" | "boolean" | "object" | "list" | null;

export type javaAttribute = {
  name: string,
  type: attributeType,
  list: boolean
};

export type javaClass = {
  name: string,
  attributes: javaAttribute[]
};

export type rawDataEntity = {
  name: string,
  rawData: any
};

export type javaClassBody = {
  name: string,
  textBody: string
};