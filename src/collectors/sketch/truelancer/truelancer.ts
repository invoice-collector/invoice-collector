
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TruelancerCollector extends SketchCollector {

    static CONFIG = {
        id: "truelancer",
        name: "Truelancer",
        description: "i18n.collectors.truelancer.description",
        version: "0",
        website: "https://www.truelancer.com/payments/mymoney",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116951.jpg",
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
        loginUrl: "https://www.truelancer.com/payments/mymoney",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TruelancerCollector.CONFIG);
    }
}
