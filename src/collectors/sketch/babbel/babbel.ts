
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BabbelCollector extends SketchCollector {

    static CONFIG = {
        id: "babbel",
        name: "Babbel",
        description: "i18n.collectors.babbel.description",
        version: "0",
        website: "https://babbel.com/users/payments?locale=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9588.jpg",
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
        loginUrl: "https://babbel.com/users/payments?locale=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BabbelCollector.CONFIG);
    }
}
