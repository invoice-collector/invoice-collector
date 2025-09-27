
import { SketchCollector } from '../../sketchCollector';

export class PliegerNlCollector extends SketchCollector {

    static CONFIG = {
        id: "plieger_nl",
        name: "Plieger.nl",
        description: "i18n.collectors.plieger_nl.description",
        version: "0",
        website: "https://web.plieger.nl/B2B/PAGE_Start/xEMAAO1FevNLU3lMaHlOQXJCjwE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32531.jpg",
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
        entryUrl: "https://web.plieger.nl/B2B/PAGE_Start/xEMAAO1FevNLU3lMaHlOQXJCjwE",
    }

    constructor() {
        super(PliegerNlCollector.CONFIG);
    }
}
