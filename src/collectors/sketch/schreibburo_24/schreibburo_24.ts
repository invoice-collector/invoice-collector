
import { SketchCollector } from '../../sketchCollector';

export class Schreibburo24Collector extends SketchCollector {

    static CONFIG = {
        id: "schreibburo_24",
        name: "Schreibburo 24",
        description: "i18n.collectors.schreibburo_24.description",
        version: "0",
        website: "https://www.schreibbuero-24.com/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173534.jpg",
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
        entryUrl: "https://www.schreibbuero-24.com/anmelden",
    }

    constructor() {
        super(Schreibburo24Collector.CONFIG);
    }
}
