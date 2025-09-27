
import { SketchCollector } from '../../sketchCollector';

export class FreedomMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "freedom_mobile",
        name: "Freedom Mobile",
        description: "i18n.collectors.freedom_mobile.description",
        version: "0",
        website: "https://myaccount.freedommobile.ca/selfcare/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9311.jpg",
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
        entryUrl: "https://myaccount.freedommobile.ca/selfcare/#/login",
    }

    constructor() {
        super(FreedomMobileCollector.CONFIG);
    }
}
