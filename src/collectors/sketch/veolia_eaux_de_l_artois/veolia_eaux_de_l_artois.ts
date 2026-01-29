
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VeoliaEauxDeLArtoisCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_eaux_de_l_artois",
        name: "Veolia - Eaux de l'Artois",
        description: "i18n.collectors.veolia_eaux_de_l_artois.description",
        version: "0",
        website: "https://www.service.eau.veolia.fr/files/live/sites/veolia/files/EDA.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837756.jpg",
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
        loginUrl: "https://www.service.eau.veolia.fr/files/live/sites/veolia/files/EDA.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VeoliaEauxDeLArtoisCollector.CONFIG);
    }
}
