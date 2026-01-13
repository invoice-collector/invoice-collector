
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RocketLinkCollector extends SketchCollector {

    static CONFIG = {
        id: "rocket_link",
        name: "Rocket Link",
        description: "i18n.collectors.rocket_link.description",
        version: "0",
        website: "https://www.rocketlinks.net/wallet/deposits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2449939.jpg",
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
        loginUrl: "https://www.rocketlinks.net/wallet/deposits",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RocketLinkCollector.CONFIG);
    }
}
