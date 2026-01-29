
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigitaloCollector extends SketchCollector {

    static CONFIG = {
        id: "digitalo",
        name: "digitalo",
        description: "i18n.collectors.digitalo.description",
        version: "0",
        website: "https://www.digitalo.de/my/orders.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8666.jpg",
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
        loginUrl: "https://www.digitalo.de/my/orders.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DigitaloCollector.CONFIG);
    }
}
