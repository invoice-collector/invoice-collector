
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GartnerDigitalMarketsCollector extends SketchCollector {

    static CONFIG = {
        id: "gartner_digital_markets",
        name: "Gartner Digital Markets",
        description: "i18n.collectors.gartner_digital_markets.description",
        version: "0",
        website: "https://digitalmarkets.gartner.com/ppc/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4192421.jpg",
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
        loginUrl: "https://digitalmarkets.gartner.com/ppc/statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GartnerDigitalMarketsCollector.CONFIG);
    }
}
