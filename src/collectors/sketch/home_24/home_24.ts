
import { SketchCollector } from '../../sketchCollector';

export class Home24Collector extends SketchCollector {

    static CONFIG = {
        id: "home_24",
        name: "Home 24",
        description: "i18n.collectors.home_24.description",
        version: "0",
        website: "https://partner.net.home24.com/app/index.html#/account/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119591.jpg",
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
        entryUrl: "https://partner.net.home24.com/app/index.html#/account/payments",
    }

    constructor() {
        super(Home24Collector.CONFIG);
    }
}
