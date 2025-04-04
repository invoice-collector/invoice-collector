import fs from 'fs';
import path from 'path';
import { expect, describe, beforeAll, afterAll } from '@jest/globals';
import dotenv from 'dotenv';
import { OxylabProxy } from '../src/proxy/oxylabProxy';
import { Driver } from '../src/driver/driver';
import { LeroyMerlinCollector } from '../src/collectors/leroy_merlin/leroy_merlin';
import * as utils from '../src/utils';
dotenv.config();

const ONE_MINUTE = 60 * 1000; // 1 minute in milliseconds
const RESULTS_FOLDER = path.join(__dirname, 'results', `antibots.${new Date().toISOString().replace(/[:.]/g, '-')}`);
fs.mkdirSync(RESULTS_FOLDER, { recursive: true });

function saveToFile(content: string|object, filename: string) {
    const outputPath = path.join(RESULTS_FOLDER, filename);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    if(content instanceof Object) {
        content = JSON.stringify(content, null, 2);
    }
    if (filename.endsWith('.pdf')) {
        fs.writeFileSync(outputPath, content, 'base64');
    }
    else {
        fs.writeFileSync(outputPath, content);
    }
}

describe(`Test antibots`, () => {

    let driver: Driver;

    beforeAll(async () => {
        const proxy = new OxylabProxy().get(null);
        driver = new Driver(new LeroyMerlinCollector());
        await driver.open(proxy);
    });

    it('Datadome', async () => {
        await driver.goto("https://www.leroymerlin.fr/login.html");
        const element = await driver.wait_for_element({selector: 'form#js-email-form input'}, false);

        // Save pdf to file
        saveToFile(await driver.pdf(), 'leroymerlin.pdf');
        
        // Check if the login page is loaded
        expect(element).not.toBeNull();
    }, ONE_MINUTE);

    afterAll(async () => {
        await driver.close();
    });
});
