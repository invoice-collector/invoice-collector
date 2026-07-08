import { AbstractAnalytics } from './abstractAnalytics';
import { HttpAnalytics } from './httpAnalytics';
import { MockAnalytics } from './mockAnalytics';
import * as utils from '../utils';

export class AnalyticsFactory {
    static instance: AbstractAnalytics;

    static getInstance(): AbstractAnalytics {
        if (!AnalyticsFactory.instance) {
            const analyticsServerEndpoint = utils.getEnvVar("ANALYTICS_SERVER_ENDPOINT", "");
            if (typeof analyticsServerEndpoint === 'string' && analyticsServerEndpoint.startsWith('http')) {
                AnalyticsFactory.instance = new HttpAnalytics(analyticsServerEndpoint);
            } else {
                AnalyticsFactory.instance = new MockAnalytics();
            }
        }
        return AnalyticsFactory.instance;
    }
}
