
import { SketchCollector } from '../../sketchCollector';

export class GoproPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "gopro_plus",
        name: "Gopro plus",
        description: "i18n.collectors.gopro_plus.description",
        version: "0",
        website: "https://gopro.com/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396018.jpg",
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
        entryUrl: "https://gopro.com/account/subscription",
    }

    constructor() {
        super(GoproPlusCollector.CONFIG);
    }
}
