
import { SketchCollector } from '../../sketchCollector';

export class LenoxGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "lenox_gmbh_and_co_kg",
        name: "LENOX GmbH & Co. KG",
        description: "i18n.collectors.lenox_gmbh_and_co_kg.description",
        version: "0",
        website: "https://www.solino-coffee.com/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2710543.jpg",
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
        entryUrl: "https://www.solino-coffee.com/mein-konto/",
    }

    constructor() {
        super(LenoxGmbhAndCoKgCollector.CONFIG);
    }
}
