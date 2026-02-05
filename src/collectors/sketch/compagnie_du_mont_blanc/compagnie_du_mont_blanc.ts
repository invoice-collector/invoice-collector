
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CompagnieDuMontBlancCollector extends SketchCollector {

    static CONFIG = {
        id: "compagnie_du_mont_blanc",
        name: "Compagnie du Mont-Blanc",
        description: "i18n.collectors.compagnie_du_mont_blanc.description",
        version: "0",
        website: "https://www.compagniedumontblanc.fr/en/portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117758.jpg",
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
        loginUrl: "https://www.compagniedumontblanc.fr/en/portal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CompagnieDuMontBlancCollector.CONFIG);
    }
}
