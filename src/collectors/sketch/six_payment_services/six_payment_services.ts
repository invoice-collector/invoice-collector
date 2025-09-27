
import { SketchCollector } from '../../sketchCollector';

export class SixPaymentServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "six_payment_services",
        name: "Six Payment Services",
        description: "i18n.collectors.six_payment_services.description",
        version: "0",
        website: "https://mypayments.six-payment-services.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71494.jpg",
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
        entryUrl: "https://mypayments.six-payment-services.com/",
    }

    constructor() {
        super(SixPaymentServicesCollector.CONFIG);
    }
}
