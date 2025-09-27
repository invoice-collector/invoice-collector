
import { SketchCollector } from '../../sketchCollector';

export class TravelcardNlCollector extends SketchCollector {

    static CONFIG = {
        id: "travelcard_nl",
        name: "travelcard.nl",
        description: "i18n.collectors.travelcard_nl.description",
        version: "0",
        website: "https://portal.travelcard.eu/cas/login?locale=nl&service=https://portal.travelcard.eu/portal/initiatessologin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32382.jpg",
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
        entryUrl: "https://portal.travelcard.eu/cas/login?locale=nl&service=https://portal.travelcard.eu/portal/initiatessologin",
    }

    constructor() {
        super(TravelcardNlCollector.CONFIG);
    }
}
