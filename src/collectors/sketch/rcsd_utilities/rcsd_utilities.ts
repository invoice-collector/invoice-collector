
import { SketchCollector } from '../../sketchCollector';

export class RcsdUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "rcsd_utilities",
        name: "RCSD Utilities",
        description: "i18n.collectors.rcsd_utilities.description",
        version: "0",
        website: "https://www.invoicecloud.com/portal/(S(kql2xvubnjjlcksmunpilrp3))/2/CustomerGroupLedger.aspx?mode=open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723373.jpg",
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
        entryUrl: "https://www.invoicecloud.com/portal/(S(kql2xvubnjjlcksmunpilrp3))/2/CustomerGroupLedger.aspx?mode=open",
    }

    constructor() {
        super(RcsdUtilitiesCollector.CONFIG);
    }
}
