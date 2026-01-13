
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EcotelCollector extends SketchCollector {

    static CONFIG = {
        id: "ecotel",
        name: "ecotel",
        description: "i18n.collectors.ecotel.description",
        version: "0",
        website: "https://www.ecotel.de/index.php/login-link",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9197.jpg",
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
        loginUrl: "https://www.ecotel.de/index.php/login-link",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EcotelCollector.CONFIG);
    }
}
