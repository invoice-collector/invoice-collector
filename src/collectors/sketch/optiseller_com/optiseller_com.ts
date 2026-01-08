
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OptisellerComCollector extends SketchCollector {

    static CONFIG = {
        id: "optiseller_com",
        name: "optiseller.com",
        description: "i18n.collectors.optiseller_com.description",
        version: "0",
        website: "https://app.optiseller.com/Admin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649684.jpg",
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
        loginUrl: "https://app.optiseller.com/Admin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OptisellerComCollector.CONFIG);
    }
}
