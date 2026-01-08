
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RelianceHomeComfortCollector extends SketchCollector {

    static CONFIG = {
        id: "reliance_home_comfort",
        name: "Reliance Home Comfort",
        description: "i18n.collectors.reliance_home_comfort.description",
        version: "0",
        website: "https://reliancehomecomfort.com/paperless-billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8834.jpg",
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
        loginUrl: "https://reliancehomecomfort.com/paperless-billing/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RelianceHomeComfortCollector.CONFIG);
    }
}
