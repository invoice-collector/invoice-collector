
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SefeCollector extends SketchCollector {

    static CONFIG = {
        id: "sefe",
        name: "SEFE",
        description: "i18n.collectors.sefe.description",
        version: "0",
        website: "https://portail-client.sefe-energy.fr/CPVFP00_CustomLoginPage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179122.jpg",
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
        loginUrl: "https://portail-client.sefe-energy.fr/CPVFP00_CustomLoginPage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SefeCollector.CONFIG);
    }
}
