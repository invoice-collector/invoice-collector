
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeilleurDuChefCollector extends SketchCollector {

    static CONFIG = {
        id: "meilleur_du_chef",
        name: "Meilleur du Chef",
        description: "i18n.collectors.meilleur_du_chef.description",
        version: "0",
        website: "https://www.meilleurduchef.com/en/perso/commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732661.jpg",
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
        loginUrl: "https://www.meilleurduchef.com/en/perso/commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeilleurDuChefCollector.CONFIG);
    }
}
