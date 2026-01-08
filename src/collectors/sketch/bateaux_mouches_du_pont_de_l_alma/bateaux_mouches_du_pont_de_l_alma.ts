
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BateauxMouchesDuPontDeLAlmaCollector extends SketchCollector {

    static CONFIG = {
        id: "bateaux_mouches_du_pont_de_l_alma",
        name: "Bateaux-mouches du pont de l\'Alma",
        description: "i18n.collectors.bateaux_mouches_du_pont_de_l_alma.description",
        version: "0",
        website: "https://www.bateaux-mouches.fr/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116128.jpg",
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
        loginUrl: "https://www.bateaux-mouches.fr/fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BateauxMouchesDuPontDeLAlmaCollector.CONFIG);
    }
}
