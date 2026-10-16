import { AbstractDriver } from './abstractDriver';
import { PuppeteerDriver } from './puppeteer/puppeteerDriver';
import { WebCollector } from '../collectors/webCollector';
import { ExtensionDriver } from './extension/extensionDriver';
import { ExtensionTransport } from './extension/extensionTransport';
import { AbstractCollector, Config } from '../collectors/abstractCollector';

export class DriverFactory {

    /**
     * Gets the appropriate driver instance for the given web collector.
     * @param collector The abstract collector instance for which to get the driver.
     * @param extension Whether to use the extension-backed browser driver.
     * @returns The appropriate driver instance for the given web collector.
     */
    static getDriver(collector: AbstractCollector<Config>, driverTransport: ExtensionTransport | undefined): AbstractDriver | undefined {
        if (!(collector instanceof WebCollector)) {
            return undefined;
        }
        if (driverTransport) {
            return new ExtensionDriver(collector, driverTransport);
        }
        return new PuppeteerDriver(collector);
    }
}
