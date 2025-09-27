
import { SketchCollector } from '../../sketchCollector';

export class RacetoolsFrCollector extends SketchCollector {

    static CONFIG = {
        id: "racetools_fr",
        name: "RACETOOLS.FR",
        description: "i18n.collectors.racetools_fr.description",
        version: "0",
        website: "https://www.racetools.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/798181.jpg",
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
        entryUrl: "https://www.racetools.fr/",
    }

    constructor() {
        super(RacetoolsFrCollector.CONFIG);
    }
}
