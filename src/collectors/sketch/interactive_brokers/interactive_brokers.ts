
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InteractiveBrokersCollector extends SketchCollector {

    static CONFIG = {
        id: "interactive_brokers",
        name: "Interactive Brokers",
        description: "i18n.collectors.interactive_brokers.description",
        version: "0",
        website: "https://ndcdyn.interactivebrokers.com/sso/Login?RL=1&locale=en_US",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132298.jpg",
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
        loginUrl: "https://ndcdyn.interactivebrokers.com/sso/Login?RL=1&locale=en_US",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InteractiveBrokersCollector.CONFIG);
    }
}
