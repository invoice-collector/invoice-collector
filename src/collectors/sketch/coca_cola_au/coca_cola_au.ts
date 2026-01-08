
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CocaColaAuCollector extends SketchCollector {

    static CONFIG = {
        id: "coca_cola_au",
        name: "Coca Cola AU",
        description: "i18n.collectors.coca_cola_au.description",
        version: "0",
        website: "https://www.mycca.com.au/login?returnUrl=%2FDashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/227377.jpg",
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
        loginUrl: "https://www.mycca.com.au/login?returnUrl=%2FDashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CocaColaAuCollector.CONFIG);
    }
}
