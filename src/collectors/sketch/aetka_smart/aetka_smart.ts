
import { SketchCollector } from '../../sketchCollector';

export class AetkaSmartCollector extends SketchCollector {

    static CONFIG = {
        id: "aetka_smart",
        name: "Aetka Smart",
        description: "i18n.collectors.aetka_smart.description",
        version: "0",
        website: "https://www.aetkasmart.de/mein-aetkasmart.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223733.jpg",
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
        entryUrl: "https://www.aetkasmart.de/mein-aetkasmart.aspx",
    }

    constructor() {
        super(AetkaSmartCollector.CONFIG);
    }
}
