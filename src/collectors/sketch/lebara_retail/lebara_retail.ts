
import { SketchCollector } from '../../sketchCollector';

export class LebaraRetailCollector extends SketchCollector {

    static CONFIG = {
        id: "lebara_retail",
        name: "Lebara retail",
        description: "i18n.collectors.lebara_retail.description",
        version: "0",
        website: "https://retail.lebara.com/order/invoicehistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64955.jpg",
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
        entryUrl: "https://retail.lebara.com/order/invoicehistory",
    }

    constructor() {
        super(LebaraRetailCollector.CONFIG);
    }
}
