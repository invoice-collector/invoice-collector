
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RealisaprintCollector extends SketchCollector {

    static CONFIG = {
        id: "realisaprint",
        name: "Realisaprint",
        description: "i18n.collectors.realisaprint.description",
        version: "0",
        website: "https://www.realisaprint.com/boutique/compte_commande.php#tabs-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170811.jpg",
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
        loginUrl: "https://www.realisaprint.com/boutique/compte_commande.php#tabs-commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RealisaprintCollector.CONFIG);
    }
}
