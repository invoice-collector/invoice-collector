
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GooglePaymentsCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "google_payments_center",
        name: "Google Payments Center",
        description: "i18n.collectors.google_payments_center.description",
        version: "0",
        website: "https://pay.google.com/payments/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8202.jpg",
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
        loginUrl: "https://pay.google.com/payments/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GooglePaymentsCenterCollector.CONFIG);
    }
}
