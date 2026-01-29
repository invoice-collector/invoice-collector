
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShogoCollector extends SketchCollector {

    static CONFIG = {
        id: "shogo",
        name: "Shogo",
        description: "i18n.collectors.shogo.description",
        version: "0",
        website: "https://app.shogo.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/966878.jpg",
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
        loginUrl: "https://app.shogo.io/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ShogoCollector.CONFIG);
    }
}
