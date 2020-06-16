import { openJsonFile, writeJavaClasses } from "./io";
import { Uri } from "vscode";

export const main = (filePath: Uri, outputPath: Uri) => {
    const javaClasses = openJsonFile(filePath.fsPath);
    if(javaClasses) {
      writeJavaClasses(javaClasses, outputPath.fsPath);
    }
};
