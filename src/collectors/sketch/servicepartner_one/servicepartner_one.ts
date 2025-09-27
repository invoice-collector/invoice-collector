
import { SketchCollector } from '../../sketchCollector';

export class ServicepartnerOneCollector extends SketchCollector {

    static CONFIG = {
        id: "servicepartner_one",
        name: "ServicePartner One",
        description: "i18n.collectors.servicepartner_one.description",
        version: "0",
        website: "https://web.servicepartner.one/invoices-orders/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18242.jpg",
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
        entryUrl: "https://web.servicepartner.one/invoices-orders/invoices",
    }

    constructor() {
        super(ServicepartnerOneCollector.CONFIG);
    }
}
