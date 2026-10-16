import { AbstractDriver } from './abstractDriver';
import { PuppeteerDriver } from './puppeteer/puppeteerDriver';
import { WebCollector } from '../collectors/webCollector';
import { ExtensionDriver } from './extension/extensionDriver';

export class DriverFactory {

    /**
     * Gets the appropriate driver instance for the given web collector.
     * @param collector The web collector instance for which to get the driver.
     * @param extension Whether to use the extension-backed browser driver.
     * @returns The appropriate driver instance for the given web collector.
     */
    static getDriver(collector: WebCollector, extension: boolean): AbstractDriver {
        if (extension) {
            if (!collector.driverTransport) {
                throw new Error('Extension transport is required for ExtensionDriver.');
            }
            return new ExtensionDriver(collector, collector.driverTransport);
        }
        return new PuppeteerDriver(collector);
    }
}
