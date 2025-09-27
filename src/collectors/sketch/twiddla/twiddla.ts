
import { SketchCollector } from '../../sketchCollector';

export class TwiddlaCollector extends SketchCollector {

    static CONFIG = {
        id: "twiddla",
        name: "twiddla",
        description: "i18n.collectors.twiddla.description",
        version: "0",
        website: "http://www.twiddla.com/Account/Billing.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131009.jpg",
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
        entryUrl: "http://www.twiddla.com/Account/Billing.aspx",
    }

    constructor() {
        super(TwiddlaCollector.CONFIG);
    }
}
