
import { SketchCollector } from '../../sketchCollector';

export class PvhOnlineBillingCollector extends SketchCollector {

    static CONFIG = {
        id: "pvh_online_billing",
        name: "PVH - Online Billing",
        description: "i18n.collectors.pvh_online_billing.description",
        version: "0",
        website: "https://secure2.billtrust.com/pvh-de/ig/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197596.jpg",
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
        entryUrl: "https://secure2.billtrust.com/pvh-de/ig/signin",
    }

    constructor() {
        super(PvhOnlineBillingCollector.CONFIG);
    }
}
