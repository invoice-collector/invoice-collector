
import { SketchCollector } from '../../sketchCollector';

export class AdsimpleCollector extends SketchCollector {

    static CONFIG = {
        id: "adsimple",
        name: "AdSimple",
        description: "i18n.collectors.adsimple.description",
        version: "0",
        website: "https://www.adsimple.at/mein-benutzerkonto/bestellungen-liste/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027050.jpg",
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
        entryUrl: "https://www.adsimple.at/mein-benutzerkonto/bestellungen-liste/",
    }

    constructor() {
        super(AdsimpleCollector.CONFIG);
    }
}
