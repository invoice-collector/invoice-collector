
import { SketchCollector } from '../../sketchCollector';

export class MicrospotCollector extends SketchCollector {

    static CONFIG = {
        id: "microspot",
        name: "Microspot",
        description: "i18n.collectors.microspot.description",
        version: "0",
        website: "https://www.microspot.ch/de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155172.jpg",
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
        entryUrl: "https://www.microspot.ch/de/account",
    }

    constructor() {
        super(MicrospotCollector.CONFIG);
    }
}
