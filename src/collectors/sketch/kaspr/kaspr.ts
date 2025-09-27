
import { SketchCollector } from '../../sketchCollector';

export class KasprCollector extends SketchCollector {

    static CONFIG = {
        id: "kaspr",
        name: "Kaspr",
        description: "i18n.collectors.kaspr.description",
        version: "0",
        website: "https://app.kaspr.io/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416010.jpg",
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
        entryUrl: "https://app.kaspr.io/billing",
    }

    constructor() {
        super(KasprCollector.CONFIG);
    }
}
