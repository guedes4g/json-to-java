import { javaClass, rawData, attributeType } from "./types";

const jsonToJava = (data: any, fileName: string): javaClass[] => {
  const classes: javaClass[] = [];
  const rawDataQueue: rawData[] = [];

  rawDataQueue.push({ name: fileName, rawData: data });

  while (rawDataQueue.length) {
    const rawData: rawData = rawDataQueue.shift() as rawData;
    const javaClass: javaClass = { name: rawData.name, attributes: [] };

    Object.keys(rawData.rawData)
      .forEach((key: string) => {
        const value: any = data[key];
        const type: attributeType = discoverTypeFromValue(value);

        //push attribute into the class
        javaClass.attributes.push({ name: key, type });

        //if (type === "list" || type === "object")
        if (type === "object") {
          rawDataQueue.push({ name: key, rawData: value });
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