
import { SketchCollector } from '../../sketchCollector';

export class ZeitDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "zeit_digital",
        name: "ZEIT Digital",
        description: "i18n.collectors.zeit_digital.description",
        version: "0",
        website: "https://meine.zeit.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32937.jpg",
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
        entryUrl: "https://meine.zeit.de/anmelden",
    }

    constructor() {
        super(ZeitDigitalCollector.CONFIG);
    }
}
