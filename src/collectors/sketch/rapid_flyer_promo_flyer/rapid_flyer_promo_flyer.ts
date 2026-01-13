
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RapidFlyerPromoFlyerCollector extends SketchCollector {

    static CONFIG = {
        id: "rapid_flyer_promo_flyer",
        name: "Rapid-flyer - Promo-flyer",
        description: "i18n.collectors.rapid_flyer_promo_flyer.description",
        version: "0",
        website: "https://www.rapid-flyer.com/authentification?back=https://www.rapid-flyer.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122462.jpg",
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
        loginUrl: "https://www.rapid-flyer.com/authentification?back=https://www.rapid-flyer.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RapidFlyerPromoFlyerCollector.CONFIG);
    }
}
