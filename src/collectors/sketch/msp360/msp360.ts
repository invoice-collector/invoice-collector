
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Msp360Collector extends SketchCollector {

    static CONFIG = {
        id: "msp360",
        name: "MSP360",
        description: "i18n.collectors.msp360.description",
        version: "0",
        website: "https://console.msp360.com/AP/LicensesSubscriptionHistory.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297681.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://console.msp360.com/AP/LicensesSubscriptionHistory.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Msp360Collector.CONFIG);
    }
}
