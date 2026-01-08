
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class B4valueNetCollector extends SketchCollector {

    static CONFIG = {
        id: "b4value_net",
        name: "b4value.net",
        description: "i18n.collectors.b4value_net.description",
        version: "0",
        website: "http://www.b4value.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107276.jpg",
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
        loginUrl: "http://www.b4value.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(B4valueNetCollector.CONFIG);
    }
}
