import { AbstractDriver } from './abstractDriver';
import { PuppeteerDriver } from './puppeteerDriver';
import { WebCollector } from '../collectors/webCollector';

export class DriverFactory {

    /**
     * Gets the appropriate driver instance for the given web collector.
     * @param collector The web collector instance for which to get the driver.
     * @returns The appropriate driver instance for the given web collector.
     */
    static getDriver(collector: WebCollector): AbstractDriver {
        return new PuppeteerDriver(collector);
    }
}
