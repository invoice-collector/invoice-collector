
import { SketchCollector } from '../../sketchCollector';

export class BayAlarmCollector extends SketchCollector {

    static CONFIG = {
        id: "bay_alarm",
        name: "Bay Alarm",
        description: "i18n.collectors.bay_alarm.description",
        version: "0",
        website: "https://baynet.bayalarm.com/billing/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740507.jpg",
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
        entryUrl: "https://baynet.bayalarm.com/billing/invoices/",
    }

    constructor() {
        super(BayAlarmCollector.CONFIG);
    }
}
