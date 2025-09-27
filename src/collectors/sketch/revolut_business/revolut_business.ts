
import { SketchCollector } from '../../sketchCollector';

export class RevolutBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "revolut_business",
        name: "Revolut Business",
        description: "i18n.collectors.revolut_business.description",
        version: "0",
        website: "https://business.revolut.com/accounts/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/174861.jpg",
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
        entryUrl: "https://business.revolut.com/accounts/transactions",
    }

    constructor() {
        super(RevolutBusinessCollector.CONFIG);
    }
}
