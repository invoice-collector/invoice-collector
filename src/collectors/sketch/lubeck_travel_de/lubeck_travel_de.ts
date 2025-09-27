
import { SketchCollector } from '../../sketchCollector';

export class LubeckTravelDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lubeck_travel_de",
        name: "Lubeck-Travel.de",
        description: "i18n.collectors.lubeck_travel_de.description",
        version: "0",
        website: "https://login.travanto.de/vermieter/login?portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126181.jpg",
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
        entryUrl: "https://login.travanto.de/vermieter/login?portal",
    }

    constructor() {
        super(LubeckTravelDeCollector.CONFIG);
    }
}
