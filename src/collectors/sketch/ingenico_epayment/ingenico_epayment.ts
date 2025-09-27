
import { SketchCollector } from '../../sketchCollector';

export class IngenicoEpaymentCollector extends SketchCollector {

    static CONFIG = {
        id: "ingenico_epayment",
        name: "ingenico epayment",
        description: "i18n.collectors.ingenico_epayment.description",
        version: "0",
        website: "https://secure.ogone.com/Ncol/Prod/Invoices.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131141.jpg",
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
        entryUrl: "https://secure.ogone.com/Ncol/Prod/Invoices.asp",
    }

    constructor() {
        super(IngenicoEpaymentCollector.CONFIG);
    }
}
