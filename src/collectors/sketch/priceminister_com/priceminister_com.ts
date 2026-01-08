
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PriceministerComCollector extends SketchCollector {

    static CONFIG = {
        id: "priceminister_com",
        name: "PriceMinister.com",
        description: "i18n.collectors.priceminister_com.description",
        version: "0",
        website: "https://www.priceminister.com/connect?action=login&c=80",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27318.jpg",
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
        loginUrl: "https://www.priceminister.com/connect?action=login&c=80",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PriceministerComCollector.CONFIG);
    }
}
