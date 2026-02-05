
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PayjoeCollector extends SketchCollector {

    static CONFIG = {
        id: "payjoe",
        name: "PayJoe",
        description: "i18n.collectors.payjoe.description",
        version: "0",
        website: "https://login.payjoe.de/activities?month=1&year=2021",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778938.jpg",
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
        loginUrl: "https://login.payjoe.de/activities?month=1&year=2021",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PayjoeCollector.CONFIG);
    }
}
