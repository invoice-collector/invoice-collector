
import { SketchCollector } from '../../sketchCollector';

export class AirfranceFrCollector extends SketchCollector {

    static CONFIG = {
        id: "airfrance_fr",
        name: "Airfrance (.fr)",
        description: "i18n.collectors.airfrance_fr.description",
        version: "0",
        website: "https://wwws.airfrance.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761352.jpg",
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
        entryUrl: "https://wwws.airfrance.fr/",
    }

    constructor() {
        super(AirfranceFrCollector.CONFIG);
    }
}
