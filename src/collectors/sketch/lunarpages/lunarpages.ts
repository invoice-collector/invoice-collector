
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LunarpagesCollector extends SketchCollector {

    static CONFIG = {
        id: "lunarpages",
        name: "Lunarpages",
        description: "i18n.collectors.lunarpages.description",
        version: "0",
        website: "https://account.lunarpages.com/login.php?ref=L2luZGV4LnBocA%3D%3D",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8981.jpg",
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
        loginUrl: "https://account.lunarpages.com/login.php?ref=L2luZGV4LnBocA%3D%3D",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LunarpagesCollector.CONFIG);
    }
}
