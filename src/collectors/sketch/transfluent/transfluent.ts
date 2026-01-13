
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TransfluentCollector extends SketchCollector {

    static CONFIG = {
        id: "transfluent",
        name: "Transfluent",
        description: "i18n.collectors.transfluent.description",
        version: "0",
        website: "https://www.transfluent.com/en/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778103.jpg",
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
        loginUrl: "https://www.transfluent.com/en/my-account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransfluentCollector.CONFIG);
    }
}
