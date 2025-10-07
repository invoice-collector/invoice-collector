
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IngenicoPaymentServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "ingenico_payment_services",
        name: "Ingenico Payment Services",
        description: "i18n.collectors.ingenico_payment_services.description",
        version: "0",
        website: "https://www.ingenico-payment-services-customerportal.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/97119.jpg",
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
        entryUrl: "https://www.ingenico-payment-services-customerportal.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IngenicoPaymentServicesCollector.CONFIG);
    }
}
