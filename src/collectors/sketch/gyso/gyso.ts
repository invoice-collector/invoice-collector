
import { SketchCollector } from '../../sketchCollector';

export class GysoCollector extends SketchCollector {

    static CONFIG = {
        id: "gyso",
        name: "GYSO",
        description: "i18n.collectors.gyso.description",
        version: "0",
        website: "https://www.gyso.ch/de/letzte-rechnung.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189605.jpg",
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
        entryUrl: "https://www.gyso.ch/de/letzte-rechnung.htm",
    }

    constructor() {
        super(GysoCollector.CONFIG);
    }
}
