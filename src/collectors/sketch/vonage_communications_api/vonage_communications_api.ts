
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VonageCommunicationsApiCollector extends SketchCollector {

    static CONFIG = {
        id: "vonage_communications_api",
        name: "Vonage - Communications API",
        description: "i18n.collectors.vonage_communications_api.description",
        version: "0",
        website: "https://dashboard.nexmo.com/billing-and-payments/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4543502.jpg",
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
        loginUrl: "https://dashboard.nexmo.com/billing-and-payments/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VonageCommunicationsApiCollector.CONFIG);
    }
}
