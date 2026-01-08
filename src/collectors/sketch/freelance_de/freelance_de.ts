
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FreelanceDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freelance_de",
        name: "freelance.de",
        description: "i18n.collectors.freelance_de.description",
        version: "0",
        website: "https://www.freelance.de/account/edit_payment_data.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7097.jpg",
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
        loginUrl: "https://www.freelance.de/account/edit_payment_data.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreelanceDeCollector.CONFIG);
    }
}
