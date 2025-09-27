
import { SketchCollector } from '../../sketchCollector';

export class ReallusionIncCollector extends SketchCollector {

    static CONFIG = {
        id: "reallusion_inc",
        name: "Reallusion Inc",
        description: "i18n.collectors.reallusion_inc.description",
        version: "0",
        website: "https://www.reallusion.com/member/#/en/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1806004.jpg",
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
        entryUrl: "https://www.reallusion.com/member/#/en/order-history",
    }

    constructor() {
        super(ReallusionIncCollector.CONFIG);
    }
}
