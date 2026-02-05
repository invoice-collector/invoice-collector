
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InternationalMarketCentersCollector extends SketchCollector {

    static CONFIG = {
        id: "international_market_centers",
        name: "INTERNATIONAL MARKET CENTERS",
        description: "i18n.collectors.international_market_centers.description",
        version: "0",
        website: "https://billing.imcenters.com/Account/Login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/836185.jpg",
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
        loginUrl: "https://billing.imcenters.com/Account/Login?ReturnUrl=%2f",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InternationalMarketCentersCollector.CONFIG);
    }
}
