
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PipedreamCollector extends SketchCollector {

    static CONFIG = {
        id: "pipedream",
        name: "Pipedream",
        description: "i18n.collectors.pipedream.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xREFMaUpCU1pzb2x0R2ZDLF9NUWxFRWl6ZUVCMHpiY0pqSFJ1Q0R6Q2dYaXJBMWts0100JFXBsEdX",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374713.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xREFMaUpCU1pzb2x0R2ZDLF9NUWxFRWl6ZUVCMHpiY0pqSFJ1Q0R6Q2dYaXJBMWts0100JFXBsEdX",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PipedreamCollector.CONFIG);
    }
}
