
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WewashCollector extends SketchCollector {

    static CONFIG = {
        id: "wewash",
        name: "WeWash",
        description: "i18n.collectors.wewash.description",
        version: "0",
        website: "https://partner.we-wash.com/#/turnover?_k=43h9l3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/228717.jpg",
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
        loginUrl: "https://partner.we-wash.com/#/turnover?_k=43h9l3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WewashCollector.CONFIG);
    }
}
