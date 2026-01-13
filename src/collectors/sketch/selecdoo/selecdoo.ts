
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SelecdooCollector extends SketchCollector {

    static CONFIG = {
        id: "selecdoo",
        name: "Selecdoo",
        description: "i18n.collectors.selecdoo.description",
        version: "0",
        website: "https://work.selecdoo.com/affiliates/login.php#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2521233.jpg",
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
        loginUrl: "https://work.selecdoo.com/affiliates/login.php#login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SelecdooCollector.CONFIG);
    }
}
