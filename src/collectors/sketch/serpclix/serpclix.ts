
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SerpclixCollector extends SketchCollector {

    static CONFIG = {
        id: "serpclix",
        name: "SerpClix",
        description: "i18n.collectors.serpclix.description",
        version: "0",
        website: "https://serpclix.com/buyers/profile/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/987507.jpg",
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
        loginUrl: "https://serpclix.com/buyers/profile/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SerpclixCollector.CONFIG);
    }
}
