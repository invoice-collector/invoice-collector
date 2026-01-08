
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WoltlabCollector extends SketchCollector {

    static CONFIG = {
        id: "woltlab",
        name: "Woltlab",
        description: "i18n.collectors.woltlab.description",
        version: "0",
        website: "https://www.woltlab.com/order-list/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3313926.jpg",
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
        loginUrl: "https://www.woltlab.com/order-list/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoltlabCollector.CONFIG);
    }
}
