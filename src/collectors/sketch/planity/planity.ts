
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlanityCollector extends SketchCollector {

    static CONFIG = {
        id: "planity",
        name: "Planity",
        description: "i18n.collectors.planity.description",
        version: "0",
        website: "https://www.planity.com/de-DE/mein-konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083425.jpg",
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
        loginUrl: "https://www.planity.com/de-DE/mein-konto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlanityCollector.CONFIG);
    }
}
