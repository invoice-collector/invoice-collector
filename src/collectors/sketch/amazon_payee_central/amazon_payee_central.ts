
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonPayeeCentralCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_payee_central",
        name: "Amazon Payee Central",
        description: "i18n.collectors.amazon_payee_central.description",
        version: "0",
        website: "https://payeecentral.amazon.com/Payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246693.jpg",
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
        loginUrl: "https://payeecentral.amazon.com/Payments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonPayeeCentralCollector.CONFIG);
    }
}
