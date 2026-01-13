
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnlogistCollector extends SketchCollector {

    static CONFIG = {
        id: "onlogist",
        name: "Onlogist",
        description: "i18n.collectors.onlogist.description",
        version: "0",
        website: "Onlogist.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2014884.jpg",
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
        loginUrl: "Onlogist.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlogistCollector.CONFIG);
    }
}
