
import { SketchCollector } from '../../sketchCollector';

export class JonnyFreshCollector extends SketchCollector {

    static CONFIG = {
        id: "jonny_fresh",
        name: "Jonny Fresh",
        description: "i18n.collectors.jonny_fresh.description",
        version: "0",
        website: "https://shop.jonnyfresh.com/account/my-orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777840.jpg",
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
        entryUrl: "https://shop.jonnyfresh.com/account/my-orders/",
    }

    constructor() {
        super(JonnyFreshCollector.CONFIG);
    }
}
