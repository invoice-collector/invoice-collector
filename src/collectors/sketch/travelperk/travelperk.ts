
import { SketchCollector } from '../../sketchCollector';

export class TravelperkCollector extends SketchCollector {

    static CONFIG = {
        id: "travelperk",
        name: "TravelPerk",
        description: "i18n.collectors.travelperk.description",
        version: "0",
        website: "https://app.travelperk.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47823.jpg",
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
        entryUrl: "https://app.travelperk.com/login",
    }

    constructor() {
        super(TravelperkCollector.CONFIG);
    }
}
