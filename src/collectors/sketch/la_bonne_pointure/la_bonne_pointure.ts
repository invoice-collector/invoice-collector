
import { SketchCollector } from '../../sketchCollector';

export class LaBonnePointureCollector extends SketchCollector {

    static CONFIG = {
        id: "la_bonne_pointure",
        name: "La Bonne Pointure",
        description: "i18n.collectors.la_bonne_pointure.description",
        version: "0",
        website: "https://www.labonnepointure.fr/?view=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120861.jpg",
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
        entryUrl: "https://www.labonnepointure.fr/?view=login",
    }

    constructor() {
        super(LaBonnePointureCollector.CONFIG);
    }
}
