
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UberCollector extends SketchCollector {

    static CONFIG = {
        id: "uber",
        name: "Uber",
        description: "i18n.collectors.uber.description",
        version: "0",
        website: "https://riders.uber.com/trips",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6564.jpg",
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
        loginUrl: "https://riders.uber.com/trips",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberCollector.CONFIG);
    }
}
