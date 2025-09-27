
import { SketchCollector } from '../../sketchCollector';

export class VersapayCollector extends SketchCollector {

    static CONFIG = {
        id: "versapay",
        name: "Versapay",
        description: "i18n.collectors.versapay.description",
        version: "0",
        website: "https://secure.versapay.com/payables/boston/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385095.jpg",
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
        entryUrl: "https://secure.versapay.com/payables/boston/login",
    }

    constructor() {
        super(VersapayCollector.CONFIG);
    }
}
