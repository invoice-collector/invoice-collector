
import { SketchCollector } from '../../sketchCollector';

export class SuezEauDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "suez_eau_de_france",
        name: "Suez Eau de France",
        description: "i18n.collectors.suez_eau_de_france.description",
        version: "0",
        website: "https://www.toutsurmoneau.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778932.jpg",
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
        entryUrl: "https://www.toutsurmoneau.fr/",
    }

    constructor() {
        super(SuezEauDeFranceCollector.CONFIG);
    }
}
