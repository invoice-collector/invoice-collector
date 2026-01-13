
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YourfoneCollector extends SketchCollector {

    static CONFIG = {
        id: "yourfone",
        name: "yourfone",
        description: "i18n.collectors.yourfone.description",
        version: "0",
        website: "https://service.yourfone.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11277.jpg",
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
        loginUrl: "https://service.yourfone.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YourfoneCollector.CONFIG);
    }
}
