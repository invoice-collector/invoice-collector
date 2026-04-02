import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
const swagger_parser = require('swagger-parser');

const OPENAPI_PATH = path.join(__dirname, '../../views/openapi/openapi.yml');
const BUILD_SCRIPT = path.join(__dirname, '../../devscripts/build_openapi.js');

function runBuildScript() {
	child_process.execSync(`node "${BUILD_SCRIPT}"`, { stdio: 'inherit' });
}

function readFileContent(filePath: string): string {
	return fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
}

describe('OpenAPI CI checks', () => {
	let before: string;
    let after: string;

	it('Check for uncommited changes in openapi.yml', () => {
		before = readFileContent(OPENAPI_PATH);
		runBuildScript();
		after = readFileContent(OPENAPI_PATH);
		if (before !== after) {
		    // eslint-disable-next-line no-console
		    console.warn(`\nopenapi.yml has changed after build. Please commit the updated file.\n\nRun the following commands in your terminal (Windows):\n
	node devscripts/build_openapi.js\ngit add views/openapi/openapi.yml\ngit commit -m "Update openapi.yml"\n`);
		}
		expect(before).toBe(after);
	});

	it('Check openapi.yml is valid OpenAPI format', async () => {
		await expect(swagger_parser.validate(OPENAPI_PATH)).resolves.toBeDefined();
	});
});
