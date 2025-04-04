import fs from 'fs';
import path from 'path';
import { expect, describe, beforeAll, afterAll } from '@jest/globals';
import dotenv from 'dotenv';
import { OxylabProxy } from '../src/proxy/oxylabProxy';
import { Driver } from '../src/driver/driver';
import { LeroyMerlinCollector } from '../src/collectors/leroy_merlin/leroy_merlin';
dotenv.config();

const ONE_MINUTE = 60 * 1000; // 1 minute in milliseconds
const RESULTS_FOLDER = path.join(__dirname, 'results', new Date().toISOString().replace(/[:.]/g, '-'));
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

describe(`Test fingerprints`, () => {

    let driver: Driver;

    beforeAll(async () => {
        const proxy = new OxylabProxy().get(null);
        driver = new Driver(new LeroyMerlinCollector());
        await driver.open(proxy);
    });
    
    // See also https://fingerprint.com/products/bot-detection/
    it('fingerprintjs', async () => {
        // Get score and fingerprint
        await driver.goto("https://fingerprintjs.github.io/fingerprintjs/");
        const scoreElement = await driver.wait_for_element({selector: '.output pre:nth-child(6)'});
        expect(scoreElement).not.toBeNull();
        const score = await scoreElement?.evaluate(el => Number(el.textContent));
        const fingerprintELement = await driver.wait_for_element({selector: '.output pre:last-child'});
        expect(fingerprintELement).not.toBeNull();
        const fingerprint = await fingerprintELement?.evaluate(el => el.textContent);
        expect(fingerprint).not.toBeNull();

        // Set height to 15000px to avoid scrollbars
        const outputElement = await driver.wait_for_element({selector: '.output'});
        await outputElement?.evaluate(el => {
            el.setAttribute('style', 'height:15000px');
        });

        // Save fingerprint to file
        saveToFile(fingerprint || "", 'fingerprintjs.json');

        // Save pdf to file
        saveToFile(await driver.pdf(), 'fingerprintjs.pdf');

        // Check if the score is higher than 0.6
        expect(score).toBeGreaterThanOrEqual(0.6);
    }, ONE_MINUTE);

    // See also https://deviceandbrowserinfo.com/info_device
    it('Device and browser info', async () => {
        // Get fingerprint
        const request = await driver.goto("https://deviceandbrowserinfo.com/are_you_a_bot", "/fingerprint_bot_test");
        expect(request).not.toBeNull();

        // Save fingerprint to file
        saveToFile(request.requestBody, 'deviceandbrowserinfo.json');

        // Save pdf to file
        saveToFile(await driver.pdf(), 'deviceandbrowserinfo.pdf');

        // Check if the request is a bot
        expect(request.responseBody.isBot).toBe(false);
    }, ONE_MINUTE);

    it('Bot sannysoft', async () => {
        // Get results
        await driver.goto("https://bot.sannysoft.com/");
        const failedElements = await driver.get_all_elements({selector: '.result.failed'});

        // Save pdf to file
        saveToFile(await driver.pdf(), 'sannysoft.pdf');

        // Check if all tests passed
        expect(failedElements.length).toBe(0);
    }, ONE_MINUTE);

    it('Bot detector rebrowser', async () => {
        // Get results
        await driver.goto("https://bot-detector.rebrowser.net/");

        // Trigger tests
        driver.page?.evaluateHandle("window.dummyFn()");
        driver.page?.evaluateHandle("document.getElementById('detections-json')");
        driver.page?.evaluateHandle("document.getElementsByClassName('div')");
        await driver.page?.exposeFunction('exposedFn', () => {});

        // Save pdf to file
        saveToFile(await driver.pdf(), 'rebrowser.pdf');

        // Check if all tests passed
        const testElements = await driver.get_all_attributes({selector: '#detections-table tr td:first-child'}, "textContent");
        const failedTests = testElements.filter((el) => el.includes('🔴'));
        expect(failedTests.length).toBe(0);
    }, ONE_MINUTE);

    it('CreepJS', async () => {
        // Get score
        await driver.goto("https://abrahamjuliot.github.io/creepjs/");
        const scoreElement = await driver.wait_for_element({selector: '.visitor-info .flex-grid.relative .col-six:first-of-type div:nth-child(2) .unblurred'});
        const scoreString = await scoreElement?.evaluate(el => el.textContent);
        expect(scoreString).not.toBeNull();
        const score = parseFloat(scoreString?.replace(/[^\d.]/g, '') || '0');

        // Save pdf to file
        saveToFile(await driver.pdf(), 'creepjs.pdf');

        // Check if all tests passed
        expect(score).toBeGreaterThanOrEqual(50);
    }, ONE_MINUTE);

    it('Am I unique', async () => {
        // Get result
        await driver.page?.goto("https://amiunique.org/fingerprint", {waitUntil: 'networkidle0', timeout: 60000})
        const resultElement = await driver.wait_for_element({selector: '.pb-0'});
        const result = await resultElement?.evaluate(el => el.textContent);

        // Reject cookies
        await driver.left_click({selector: 'body > div > div > div > div > div:last-child > div > div button:first-of-type'}, {raise_exception: false});

        // Download fingerprint
        await driver.left_click({selector: 'main button'});
        await driver.left_click({selector: 'body > div > div > div > div:nth-child(2) > div > div'});
        let fingerprint = await driver.waitForFileToDownload(true) || "";
        if (fingerprint) {
            fingerprint = JSON.parse(Buffer.from(fingerprint, 'base64').toString('utf-8'));
        }

        // Save fingerprint to file
        saveToFile(fingerprint, 'amiunique.json');

        // Save pdf to file
        saveToFile(await driver.pdf(), 'amiunique.pdf');

        // Check if tests passed
        expect(result?.includes('Yes!')).toBe(true);
    }, ONE_MINUTE*2);

    it('Pixelscan', async () => {
        // Get result
        await driver.goto("https://pixelscan.net/");
        const resultElement = await driver.wait_for_element({selector: '.consistent-box, .inconsistent-box'}, false);
        const consistentElement = await resultElement?.evaluate(el => el.textContent);

        // Save pdf to file
        saveToFile(await driver.pdf(), 'pixelscan.pdf');

        // Check if the test is consistent
        expect(consistentElement).toBe("Consistent");

    }, ONE_MINUTE);

    /*it('Iphey', async () => {
        // Get result
        await driver.goto("https://iphey.com/");
    }, ONE_MINUTE);*/

    afterAll(async () => {
        await driver.close();
    });
});
