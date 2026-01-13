
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QaseCollector extends SketchCollector {

    static CONFIG = {
        id: "qase",
        name: "Qase",
        description: "i18n.collectors.qase.description",
        version: "0",
        website: "https://app.qase.io/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3137493.jpg",
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
        loginUrl: "https://app.qase.io/billing/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QaseCollector.CONFIG);
    }
}
