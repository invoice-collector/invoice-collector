
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LesmillsOnDemandCollector extends SketchCollector {

    static CONFIG = {
        id: "lesmills_on_demand",
        name: "LesMILLS ON DEMAND",
        description: "i18n.collectors.lesmills_on_demand.description",
        version: "0",
        website: "https://web.lesmillsondemand.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792835.jpg",
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
        loginUrl: "https://web.lesmillsondemand.com/sign-in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LesmillsOnDemandCollector.CONFIG);
    }
}
