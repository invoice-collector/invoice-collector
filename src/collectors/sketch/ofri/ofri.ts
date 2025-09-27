
import { SketchCollector } from '../../sketchCollector';

export class OfriCollector extends SketchCollector {

    static CONFIG = {
        id: "ofri",
        name: "Ofri",
        description: "i18n.collectors.ofri.description",
        version: "0",
        website: "https://www.ofri.ch/users/123580/account_balances",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189603.jpg",
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
        entryUrl: "https://www.ofri.ch/users/123580/account_balances",
    }

    constructor() {
        super(OfriCollector.CONFIG);
    }
}
