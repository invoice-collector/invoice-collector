
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YabloCollector extends SketchCollector {

    static CONFIG = {
        id: "yablo",
        name: "Yablo",
        description: "i18n.collectors.yablo.description",
        version: "0",
        website: "https://app.yablo.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4506975.jpg",
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
        loginUrl: "https://app.yablo.io/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YabloCollector.CONFIG);
    }
}
