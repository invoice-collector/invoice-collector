
import { SketchCollector } from '../../sketchCollector';

export class HelloFreshCollector extends SketchCollector {

    static CONFIG = {
        id: "hello_fresh",
        name: "Hello Fresh",
        description: "i18n.collectors.hello_fresh.description",
        version: "0",
        website: "https://www.hellofresh.de/customer/account/login/?redirectUrl=%2Faccount-settings%2Forder-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8035.jpg",
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
        entryUrl: "https://www.hellofresh.de/customer/account/login/?redirectUrl=%2Faccount-settings%2Forder-history",
    }

    constructor() {
        super(HelloFreshCollector.CONFIG);
    }
}
