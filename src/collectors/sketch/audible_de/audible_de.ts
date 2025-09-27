
import { SketchCollector } from '../../sketchCollector';

export class AudibleDeCollector extends SketchCollector {

    static CONFIG = {
        id: "audible_de",
        name: "Audible.de",
        description: "i18n.collectors.audible_de.description",
        version: "0",
        website: "https://www.audible.de/purchase-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/521.jpg",
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
        entryUrl: "https://www.audible.de/purchase-history",
    }

    constructor() {
        super(AudibleDeCollector.CONFIG);
    }
}
