// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { main } from './main';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "json2java" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('json2java.convert', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Choose a json file');
		const uri = vscode.window.activeTextEditor?.document.uri;
		vscode.window.showOpenDialog({openLabel: "Choose a json file" ,defaultUri: uri, canSelectFolders: false, canSelectMany:false, filters: {"JSON": ["json"]}})
			.then((fileURL) => {
				if(fileURL && fileURL.length) {
					vscode.window.showInformationMessage('Choose folder for your java files');
					vscode.window.showOpenDialog({defaultUri: uri, canSelectFiles: false, canSelectFolders: true, canSelectMany: false}).then((folderURL) => {
						if(folderURL && folderURL.length) {
							main(fileURL[0], folderURL[0]);
							vscode.window.showInformationMessage('Files have been generated successfully');
						}
					});
				};
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
