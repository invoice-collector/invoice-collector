
import { SketchCollector } from '../../sketchCollector';

export class SimyoNlCollector extends SketchCollector {

    static CONFIG = {
        id: "simyo_nl",
        name: "Simyo.nl",
        description: "i18n.collectors.simyo_nl.description",
        version: "0",
        website: "https://mijn.simyo.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9558.jpg",
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
        entryUrl: "https://mijn.simyo.nl/inloggen",
    }

    constructor() {
        super(SimyoNlCollector.CONFIG);
    }
}
