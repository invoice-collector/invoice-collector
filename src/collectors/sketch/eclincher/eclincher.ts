
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EclincherCollector extends SketchCollector {

    static CONFIG = {
        id: "eclincher",
        name: "eClincher",
        description: "i18n.collectors.eclincher.description",
        version: "0",
        website: "https://app.eclincher.com/ec/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173156.jpg",
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
        loginUrl: "https://app.eclincher.com/ec/login?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EclincherCollector.CONFIG);
    }
}
