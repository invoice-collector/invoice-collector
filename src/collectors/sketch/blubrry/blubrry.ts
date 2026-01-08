
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BlubrryCollector extends SketchCollector {

    static CONFIG = {
        id: "blubrry",
        name: "Blubrry",
        description: "i18n.collectors.blubrry.description",
        version: "0",
        website: "https://www.blubrry.com/signin.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8609.jpg",
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
        loginUrl: "https://www.blubrry.com/signin.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlubrryCollector.CONFIG);
    }
}
