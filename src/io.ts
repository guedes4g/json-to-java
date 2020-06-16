import fs = require("fs");
import path = require("path");

import { javaClassBody, javaClass } from "./types";
import writeJavaClass from "./handleJava";
import jsonToJava from "./handleJson";

export const writeJavaClasses = (classes: javaClass[], dirPath: string): void => {
  classes.forEach(javaClass => {
    const { name, textBody }: javaClassBody = writeJavaClass(javaClass);

    fs.writeFileSync(path.join(dirPath, `${name}.java`), textBody);
  });
};

export const openJsonFile = (filePath: string): javaClass[] | null => {
  const fileBody = fs.readFileSync(filePath, "utf8");
  const fileName = path.parse(filePath).name;

  console.log(fileName);

  try {
    const jsonRawData = JSON.parse(fileBody);

    return jsonToJava(jsonRawData, fileName);
  }
  catch (ex) {
    console.error("Error parsing file to JSON.");
    return null;
  }
}