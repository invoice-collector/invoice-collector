
import { SketchCollector } from '../../sketchCollector';

export class _11FreundeCollector extends SketchCollector {

    static CONFIG = {
        id: "11_freunde",
        name: "11 Freunde",
        description: "i18n.collectors.11_freunde.description",
        version: "0",
        website: "https://shop.11freunde.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025516.jpg",
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
        entryUrl: "https://shop.11freunde.de/customer/account/login/",
    }

    constructor() {
        super(_11FreundeCollector.CONFIG);
    }
}
