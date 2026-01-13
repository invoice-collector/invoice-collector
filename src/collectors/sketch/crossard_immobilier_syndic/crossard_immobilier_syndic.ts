
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrossardImmobilierSyndicCollector extends SketchCollector {

    static CONFIG = {
        id: "crossard_immobilier_syndic",
        name: "Crossard Immobilier (Syndic)",
        description: "i18n.collectors.crossard_immobilier_syndic.description",
        version: "0",
        website: "https://crossard.crypto-extranet.com/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108537.jpg",
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
        loginUrl: "https://crossard.crypto-extranet.com/connexion/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrossardImmobilierSyndicCollector.CONFIG);
    }
}
