
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FraenkCollector extends SketchCollector {

    static CONFIG = {
        id: "fraenk",
        name: "fraenk",
        description: "i18n.collectors.fraenk.description",
        version: "0",
        website: "https://fraenk.de/xyz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988599.jpg",
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
        loginUrl: "https://fraenk.de/xyz",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FraenkCollector.CONFIG);
    }
}
