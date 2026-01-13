
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlertiCollector extends SketchCollector {

    static CONFIG = {
        id: "alerti",
        name: "Alerti",
        description: "i18n.collectors.alerti.description",
        version: "0",
        website: "https://app.alerti.com/#/en/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153638.jpg",
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
        loginUrl: "https://app.alerti.com/#/en/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlertiCollector.CONFIG);
    }
}
