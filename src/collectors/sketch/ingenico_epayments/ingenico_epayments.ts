
import { SketchCollector } from '../../sketchCollector';

export class IngenicoEpaymentsCollector extends SketchCollector {

    static CONFIG = {
        id: "ingenico_epayments",
        name: "Ingenico ePayments",
        description: "i18n.collectors.ingenico_epayments.description",
        version: "0",
        website: "https://www.ingenico-payment-services-customerportal.com/public/de/advantages.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70089.jpg",
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
        entryUrl: "https://www.ingenico-payment-services-customerportal.com/public/de/advantages.html",
    }

    constructor() {
        super(IngenicoEpaymentsCollector.CONFIG);
    }
}
