import * as assert from 'assert';

import handleJson from "../../handleJson";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Executing handle json tests', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('string', () => {
		const classes = handleJson({ "name": "Mateus Haas" }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "name");
				assert.equal(attr.type, "String");
			});
		});
	});

	test('int', () => {
		const classes = handleJson({ "age": 123 }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "age");
				assert.equal(attr.type, "int");
			});
		});
	});

	test('float', () => {
		const classes = handleJson({ "weight": 68.5 }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "weight");
				assert.equal(attr.type, "float");
			});
		});
	});

	test('boolean', () => {
		const classes = handleJson({ "sex": true }, "pessoa");

		classes.forEach(cls => {
			assert.equal(cls.name, "pessoa");

			cls.attributes.forEach(attr => {
				assert.equal(attr.name, "sex");
				assert.equal(attr.type, "boolean");
			});
		});
	});

	test('Class', () => {
		const classes = handleJson({ "state": { "name": "Rio Grande do Sul" } }, "pessoa");

		assert.equal(classes[0].name, "pessoa");
		assert.equal(classes[0].attributes[0].name, "state");
		assert.equal(classes[0].attributes[0].type, "State");

		assert.equal(classes[1].name, "state");
		assert.equal(classes[1].attributes[0].name, "name");
		assert.equal(classes[1].attributes[0].type, "String");
	});

	test('List of Class', () => {
		const classes = handleJson({ "states": [{ "uf": "RS" }, { "uf": "SC" }] }, "pessoa");

		assert.equal(classes[0].name, "pessoa");
		assert.equal(classes[0].attributes[0].name, "states");
		assert.equal(classes[0].attributes[0].type, "States");
		assert.equal(classes[0].attributes[0].list, true);

		assert.equal(classes[1].name, "States");
		assert.equal(classes[1].attributes[0].name, "uf");
		assert.equal(classes[1].attributes[0].type, "String");
		assert.equal(classes[1].attributes[0].list, false);
	});

	test('List of natural', () => {
		const classes = handleJson({ "ages": [26, 25] }, "pessoa");

		assert.equal(classes[0].name, "pessoa");
		assert.equal(classes[0].attributes[0].name, "ages");
		assert.equal(classes[0].attributes[0].type, "int");
		assert.equal(classes[0].attributes[0].list, true);
	});
});
