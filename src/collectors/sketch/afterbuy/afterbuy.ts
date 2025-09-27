
import { SketchCollector } from '../../sketchCollector';

export class AfterbuyCollector extends SketchCollector {

    static CONFIG = {
        id: "afterbuy",
        name: "Afterbuy",
        description: "i18n.collectors.afterbuy.description",
        version: "0",
        website: "https://login.afterbuy.de/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3359.jpg",
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
        entryUrl: "https://login.afterbuy.de/Account/Login",
    }

    constructor() {
        super(AfterbuyCollector.CONFIG);
    }
}
