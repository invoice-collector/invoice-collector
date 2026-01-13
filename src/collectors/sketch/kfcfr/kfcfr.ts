import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KfcFrCollector extends SketchCollector {

    static CONFIG = {
        id: "kfcfr",
        name: "KFC",
        description: "i18n.collectors.kfcfr.description",
        version: "0",
        website: "https://kfc.fr",
        logo: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
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
        loginUrl: "https://www.kfc.fr/mon-compte/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KfcFrCollector.CONFIG);
    }
}
