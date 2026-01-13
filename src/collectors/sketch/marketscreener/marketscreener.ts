
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MarketscreenerCollector extends SketchCollector {

    static CONFIG = {
        id: "marketscreener",
        name: "MarketScreener",
        description: "i18n.collectors.marketscreener.description",
        version: "0",
        website: "https://de.marketscreener.com/mein-konto/abonnements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375858.jpg",
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
        loginUrl: "https://de.marketscreener.com/mein-konto/abonnements/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarketscreenerCollector.CONFIG);
    }
}
