
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlagscanCollector extends SketchCollector {

    static CONFIG = {
        id: "plagscan",
        name: "PlagScan",
        description: "i18n.collectors.plagscan.description",
        version: "0",
        website: "https://www.plagscan.com/login?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54359.jpg",
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
        loginUrl: "https://www.plagscan.com/login?lang=en",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlagscanCollector.CONFIG);
    }
}
