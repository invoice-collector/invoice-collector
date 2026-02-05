
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvouryCollector extends SketchCollector {

    static CONFIG = {
        id: "avoury",
        name: "Avoury",
        description: "i18n.collectors.avoury.description",
        version: "0",
        website: "https://www.avoury.com/de/de/account/orders/00136961",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654415.jpg",
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
        loginUrl: "https://www.avoury.com/de/de/account/orders/00136961",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvouryCollector.CONFIG);
    }
}
