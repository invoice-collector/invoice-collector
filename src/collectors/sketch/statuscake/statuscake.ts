
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StatuscakeCollector extends SketchCollector {

    static CONFIG = {
        id: "statuscake",
        name: "StatusCake",
        description: "i18n.collectors.statuscake.description",
        version: "0",
        website: "https://app.statuscake.com/Billing.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47169.jpg",
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
        loginUrl: "https://app.statuscake.com/Billing.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StatuscakeCollector.CONFIG);
    }
}
