
import { SketchCollector } from '../../sketchCollector';

export class HelloFreshUkCollector extends SketchCollector {

    static CONFIG = {
        id: "hello_fresh_uk",
        name: "Hello Fresh UK",
        description: "i18n.collectors.hello_fresh_uk.description",
        version: "0",
        website: "https://www.hellofresh.co.uk/account-settings/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187232.jpg",
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
        entryUrl: "https://www.hellofresh.co.uk/account-settings/order-history",
    }

    constructor() {
        super(HelloFreshUkCollector.CONFIG);
    }
}
