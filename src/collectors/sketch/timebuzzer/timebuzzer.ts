
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TimebuzzerCollector extends SketchCollector {

    static CONFIG = {
        id: "timebuzzer",
        name: "timeBuzzer",
        description: "i18n.collectors.timebuzzer.description",
        version: "0",
        website: "https://store.timebuzzer.com/my-account/view-order/4006955407/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297682.jpg",
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
        loginUrl: "https://store.timebuzzer.com/my-account/view-order/4006955407/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TimebuzzerCollector.CONFIG);
    }
}
