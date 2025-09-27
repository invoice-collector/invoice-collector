
import { SketchCollector } from '../../sketchCollector';

export class TrustedshopsPrivateCollector extends SketchCollector {

    static CONFIG = {
        id: "trustedshops_private",
        name: "TrustedShops Private",
        description: "i18n.collectors.trustedshops_private.description",
        version: "0",
        website: "https://my.trustedshops.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2739286.jpg",
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
        entryUrl: "https://my.trustedshops.com/",
    }

    constructor() {
        super(TrustedshopsPrivateCollector.CONFIG);
    }
}
