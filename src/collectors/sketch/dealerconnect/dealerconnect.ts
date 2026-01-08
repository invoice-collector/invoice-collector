
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DealerconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "dealerconnect",
        name: "DealerCONNECT",
        description: "i18n.collectors.dealerconnect.description",
        version: "0",
        website: "https://dealerconnect.chrysler.com/portal/Controller/Portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4458795.jpg",
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
        loginUrl: "https://dealerconnect.chrysler.com/portal/Controller/Portal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DealerconnectCollector.CONFIG);
    }
}
