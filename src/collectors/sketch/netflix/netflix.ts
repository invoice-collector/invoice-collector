
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetflixCollector extends SketchCollector {

    static CONFIG = {
        id: "netflix",
        name: "Netflix",
        description: "i18n.collectors.netflix.description",
        version: "0",
        website: "https://www.netflix.com/BillingActivity",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8819.jpg",
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
        loginUrl: "https://www.netflix.com/BillingActivity",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetflixCollector.CONFIG);
    }
}
