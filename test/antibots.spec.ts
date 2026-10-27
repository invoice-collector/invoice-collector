import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { expect, describe, it, beforeAll, afterAll } from '@jest/globals';
import { PuppeteerDriver } from '../src/driver/puppeteer/puppeteerDriver';
import { WebCollector } from '../src/collectors/webCollector';
import {
    CollectorAuthenticationMethod,
    CollectorCaptcha,
    CollectorState,
    CollectorType,
    CompleteInvoice,
} from '../src/collectors/abstractCollector';

const ONE_MINUTE = 60 * 1000; // 1 minute in milliseconds
const RESULTS_FOLDER = path.join(__dirname, 'results', `antibots.${new Date().toISOString().replace(/[:.]/g, '-')}`);
fs.mkdirSync(RESULTS_FOLDER, { recursive: true });

class MockCollector extends WebCollector {
    constructor() {
        super({
            id: 'mock',
            name: 'Mock collector',
            description: 'Collector for browser tests',
            version: '1',
            website: 'https://bot-detector.rebrowser.net/',
            logo: '',
            type: CollectorType.WEB,
            params: {},
            state: CollectorState.DEVELOPMENT,
            loginUrl: 'https://bot-detector.rebrowser.net/',
            authenticationMethod: CollectorAuthenticationMethod.INTERACTIVE_ONLY,
            loadImages: false,
            useProxy: false,
            useProxyForLogin: false,
            captcha: CollectorCaptcha.NONE,
            remoteBrowser: false,
        });
    }

    async _collect(): Promise<CompleteInvoice[]> {
        throw new Error('MockCollector does not support invoice collection.');
    }
}

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

    let driver: PuppeteerDriver;

    beforeAll(async () => {
        driver = new PuppeteerDriver(new MockCollector());
        await driver.open('en', null);
    }, ONE_MINUTE);

    it('Rebrowser bot detector shows no red dots', async () => {
        const page = driver.page;
        if (!page) {
            throw new Error('Puppeteer page is not initialized.');
        }

        await page.goto('https://bot-detector.rebrowser.net/');
        await page.waitForSelector('#detections-table tbody tr', { visible: true, timeout: 15000 });

        // The detector includes asynchronous checks that can take up to 10 seconds.
        await new Promise(resolve => setTimeout(resolve, 10000));

        // Trigger test 1 - dummyFn
        console.log('Triggering test "dummyFn"');
        await page.evaluate(() => (window as any).dummyFn())

        // Trigger test 2 - sourceUrlLeak
        console.log('Triggering test "sourceUrlLeak"');
        await page.evaluate(() => document.getElementById("detections-json"))

        // Trigger test 3 - mainWorldExecution
        console.log('Triggering test "mainWorldExecution"');
        driver.getElement({selector: '.div'});

        // Trigger test 5 - exposeFunctionLeak
        console.log('Triggering test "exposeFunctionLeak"');
        await page.exposeFunction('exposedFn', () => { console.log('exposedFn call') })

        // Wait for the detector to process the triggered test
        await new Promise(resolve => setTimeout(resolve, 5000));

        saveToFile(await driver.pdf(), 'rebrowser.pdf');

        const results = await page.$$eval('#detections-table tbody tr', rows =>
            rows.map(row => row.textContent || '')
        );
        expect(results.length).toBeGreaterThan(0);
        const failedTests = results.filter(result => result.includes('\u{1F534}'));
        expect(failedTests).toEqual([]);
    }, ONE_MINUTE);

    afterAll(async () => {
        await driver?.close();
    }, ONE_MINUTE);
});
