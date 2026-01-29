
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DelpechCollector extends SketchCollector {

    static CONFIG = {
        id: "delpech",
        name: "Delpech",
        description: "i18n.collectors.delpech.description",
        version: "0",
        website: "https://pharmaciedelpech.fr/?page=Pharmacie:Accueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/501524.jpg",
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
        loginUrl: "https://pharmaciedelpech.fr/?page=Pharmacie:Accueil",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DelpechCollector.CONFIG);
    }
}
