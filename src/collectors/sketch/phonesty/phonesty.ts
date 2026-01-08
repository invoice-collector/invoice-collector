
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PhonestyCollector extends SketchCollector {

    static CONFIG = {
        id: "phonesty",
        name: "Phonesty",
        description: "i18n.collectors.phonesty.description",
        version: "0",
        website: "https://www.phonesty.de/myAccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/176812.jpg",
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
        loginUrl: "https://www.phonesty.de/myAccount",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhonestyCollector.CONFIG);
    }
}
