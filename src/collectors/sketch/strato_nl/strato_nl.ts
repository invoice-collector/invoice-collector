
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StratoNlCollector extends SketchCollector {

    static CONFIG = {
        id: "strato_nl",
        name: "STRATO.nl",
        description: "i18n.collectors.strato_nl.description",
        version: "0",
        website: "https://www.strato.nl/apps/CustomerService#/skl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9559.jpg",
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
        loginUrl: "https://www.strato.nl/apps/CustomerService#/skl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StratoNlCollector.CONFIG);
    }
}
