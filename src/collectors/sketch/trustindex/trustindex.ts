
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TrustindexCollector extends SketchCollector {

    static CONFIG = {
        id: "trustindex",
        name: "Trustindex",
        description: "i18n.collectors.trustindex.description",
        version: "0",
        website: "https://admin.trustindex.io/payment/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3110550.jpg",
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
        loginUrl: "https://admin.trustindex.io/payment/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TrustindexCollector.CONFIG);
    }
}
