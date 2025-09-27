import { SketchCollector } from '../../sketchCollector';

export class PaypalCollector extends SketchCollector {

    static CONFIG = {
        id: "paypal",
        name: "Paypal",
        description: "i18n.collectors.paypal.description",
        version: "0",
        website: "https://paypal.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
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
        entryUrl: "https://www.paypal.com/signin",
    }

    constructor() {
        super(PaypalCollector.CONFIG);
    }
}
