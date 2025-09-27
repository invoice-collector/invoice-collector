
import { SketchCollector } from '../../sketchCollector';

export class JImprimeEnFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "j_imprime_en_france",
        name: "J\'imprime en France",
        description: "i18n.collectors.j_imprime_en_france.description",
        version: "0",
        website: "https://www.jimprimeenfrance.fr/Orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863213.jpg",
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
        entryUrl: "https://www.jimprimeenfrance.fr/Orders",
    }

    constructor() {
        super(JImprimeEnFranceCollector.CONFIG);
    }
}
