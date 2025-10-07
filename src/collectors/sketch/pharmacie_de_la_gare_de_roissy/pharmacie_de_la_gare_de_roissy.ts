
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PharmacieDeLaGareDeRoissyCollector extends SketchCollector {

    static CONFIG = {
        id: "pharmacie_de_la_gare_de_roissy",
        name: "Pharmacie de la Gare de Roissy",
        description: "i18n.collectors.pharmacie_de_la_gare_de_roissy.description",
        version: "0",
        website: "https://pharmacie-gare-roissy.fr/index.php/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122631.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://pharmacie-gare-roissy.fr/index.php/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PharmacieDeLaGareDeRoissyCollector.CONFIG);
    }
}
