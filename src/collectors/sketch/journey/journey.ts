
import { SketchCollector } from '../../sketchCollector';

export class JourneyCollector extends SketchCollector {

    static CONFIG = {
        id: "journey",
        name: "Journey",
        description: "i18n.collectors.journey.description",
        version: "0",
        website: "https://app.journey.io/mariolueddemann/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310221.jpg",
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
        entryUrl: "https://app.journey.io/mariolueddemann/billing",
    }

    constructor() {
        super(JourneyCollector.CONFIG);
    }
}
