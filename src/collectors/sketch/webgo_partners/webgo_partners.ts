
import { SketchCollector } from '../../sketchCollector';

export class WebgoPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "webgo_partners",
        name: "webgo Partners",
        description: "i18n.collectors.webgo_partners.description",
        version: "0",
        website: "https://wpp.webgo.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2193915.jpg",
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
        entryUrl: "https://wpp.webgo.de/user-billings.do",
    }

    constructor() {
        super(WebgoPartnersCollector.CONFIG);
    }
}
