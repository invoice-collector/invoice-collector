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
     * @param extensionTransport The extension transport instance for the extension-backed browser driver.
     * @returns The appropriate driver instance for the given web collector.
     */
    static getDriver(collector: AbstractCollector<Config>, extensionTransport: ExtensionTransport | undefined): AbstractDriver | undefined {
        if (!(collector instanceof WebCollector)) {
            return undefined;
        }
        if (extensionTransport) {
            return new ExtensionDriver(collector, extensionTransport);
        }
        return new PuppeteerDriver(collector);
    }
}
