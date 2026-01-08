
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SafecoInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "safeco_insurance",
        name: "Safeco Insurance",
        description: "i18n.collectors.safeco_insurance.description",
        version: "0",
        website: "https://customer.safeco.com/accountmanager/billing/summary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841410.jpg",
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
        loginUrl: "https://customer.safeco.com/accountmanager/billing/summary",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SafecoInsuranceCollector.CONFIG);
    }
}
