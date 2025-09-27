
import { SketchCollector } from '../../sketchCollector';

export class SalzburgAgCollector extends SketchCollector {

    static CONFIG = {
        id: "salzburg_ag",
        name: "Salzburg AG",
        description: "i18n.collectors.salzburg_ag.description",
        version: "0",
        website: "https://shop.salzburg-ag.at/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9440.jpg",
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
        entryUrl: "https://shop.salzburg-ag.at/customer/account/login/",
    }

    constructor() {
        super(SalzburgAgCollector.CONFIG);
    }
}
