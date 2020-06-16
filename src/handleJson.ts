import { javaClass, rawDataEntity, attributeType } from "./types";

const jsonToJava = (data: any, fileName: string): javaClass[] => {
  const classes: javaClass[] = [];
  const queue: rawDataEntity[] = [];

  queue.push({ name: fileName, rawData: data });

  while (queue.length) {
    const entity: rawDataEntity = queue.shift() as rawDataEntity;
    const javaClass: javaClass = { name: entity.name, attributes: [] };

    Object.keys(entity.rawData)
      .forEach((key: string) => {
        const value: any = entity.rawData[key];
        const type: attributeType = discoverTypeFromValue(value);

        //push attribute into the class
        javaClass.attributes.push({ name: key, type });

        //if (type === "list" || type === "object")
        if (type === "object") {
          queue.push({ name: key, rawData: value });
        }
      });

    classes.push(javaClass);
  }

  return classes;
};

/*const parseListToRawData = (rawData: any[]) => {
  if (!rawData.length)
    return {};

  let newUnifiedRawData = {};
  const firstValueType = discoverTypeFromValue(rawData[0]);

  if (firstValueType !== "object")
    return { value: rawData[0] };

  rawData.forEach(data => {
    newUnifiedRawData = { ...data, ...newUnifiedRawData };
  });

  return newUnifiedRawData;
}*/

const discoverTypeFromValue = (value: any): attributeType => {
  if (Array.isArray(value)) {
    return "list";
  }

  switch (typeof value) {
    case "object":
      return "object";

    case "number":
      return (value % 1 === 0) ? "int" : "float";

    case "string":
      return "String";

    case "boolean":
      return "boolean";
  }

  return null;
};

export default jsonToJava;