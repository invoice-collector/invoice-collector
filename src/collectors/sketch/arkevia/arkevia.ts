
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ArkeviaCollector extends SketchCollector {

    static CONFIG = {
        id: "arkevia",
        name: "Arkevia",
        description: "i18n.collectors.arkevia.description",
        version: "0",
        website: "https://sante.arkevia.com/safe-unsecured/welcome.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496962.jpg",
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
        loginUrl: "https://sante.arkevia.com/safe-unsecured/welcome.action",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ArkeviaCollector.CONFIG);
    }
}
