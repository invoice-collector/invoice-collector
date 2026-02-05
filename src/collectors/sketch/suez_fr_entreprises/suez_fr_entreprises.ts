
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SuezFrEntreprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "suez_fr_entreprises",
        name: "Suez.fr - ENTREPRISES",
        description: "i18n.collectors.suez_fr_entreprises.description",
        version: "0",
        website: "https://espace-entreprises-rv.suez.fr/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4560902.jpg",
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
        loginUrl: "https://espace-entreprises-rv.suez.fr/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SuezFrEntreprisesCollector.CONFIG);
    }
}
