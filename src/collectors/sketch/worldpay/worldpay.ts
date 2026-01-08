
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WorldpayCollector extends SketchCollector {

    static CONFIG = {
        id: "worldpay",
        name: "Worldpay",
        description: "i18n.collectors.worldpay.description",
        version: "0",
        website: "https://dashboard.worldpay.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201353.jpg",
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
        loginUrl: "https://dashboard.worldpay.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WorldpayCollector.CONFIG);
    }
}
