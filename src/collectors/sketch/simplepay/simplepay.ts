
import { SketchCollector } from '../../sketchCollector';

export class SimplepayCollector extends SketchCollector {

    static CONFIG = {
        id: "simplepay",
        name: "SimplePay",
        description: "i18n.collectors.simplepay.description",
        version: "0",
        website: "https://www.simplepay.co.za/signup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233034.jpg",
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
        entryUrl: "https://www.simplepay.co.za/signup",
    }

    constructor() {
        super(SimplepayCollector.CONFIG);
    }
}
