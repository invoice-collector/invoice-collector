
import { SketchCollector } from '../../sketchCollector';

export class SmowCollector extends SketchCollector {

    static CONFIG = {
        id: "smow",
        name: "smow",
        description: "i18n.collectors.smow.description",
        version: "0",
        website: "https://www.smow.de/kundenkonto/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20622.jpg",
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
        entryUrl: "https://www.smow.de/kundenkonto/anmelden",
    }

    constructor() {
        super(SmowCollector.CONFIG);
    }
}
