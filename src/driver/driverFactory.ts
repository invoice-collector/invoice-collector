import { AbstractDriver } from './abstractDriver';
import { PuppeteerDriver } from './puppeteerDriver';
import { WebCollector } from '../collectors/webCollector';

export class DriverFactory {
    static getDriver(collector: WebCollector): AbstractDriver {
        return new PuppeteerDriver(collector);
    }
}
