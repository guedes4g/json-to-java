import * as assert from 'assert';

import handleJson from "../../handleJson";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Executing handle json tests', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Only string', () => {
		const classes = handleJson({ "name": "Mateus Haas" }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "name");
				assert.equal(attr.type, "String");
			});
		});
	});

	test('Only int', () => {
		const classes = handleJson({ "age": 123 }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "age");
				assert.equal(attr.type, "int");
			});
		});
	});

	test('Only float', () => {
		const classes = handleJson({ "weight": 68.5 }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "weight");
				assert.equal(attr.type, "float");
			});
		});
	});

	test('Only boolean', () => {
		const classes = handleJson({ "sex": true }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "sex");
				assert.equal(attr.type, "boolean");
			});
		});
	});
});
