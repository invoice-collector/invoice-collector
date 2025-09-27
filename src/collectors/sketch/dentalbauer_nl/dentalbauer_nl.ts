
import { SketchCollector } from '../../sketchCollector';

export class DentalbauerNlCollector extends SketchCollector {

    static CONFIG = {
        id: "dentalbauer_nl",
        name: "dentalbauer.nl",
        description: "i18n.collectors.dentalbauer_nl.description",
        version: "0",
        website: "http://www.dentalbauer.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32722.jpg",
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
        entryUrl: "http://www.dentalbauer.nl",
    }

    constructor() {
        super(DentalbauerNlCollector.CONFIG);
    }
}
