
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsahiPremiumBeveragesSchweppesCollector extends SketchCollector {

    static CONFIG = {
        id: "asahi_premium_beverages_schweppes",
        name: "Asahi Premium Beverages / Schweppes",
        description: "i18n.collectors.asahi_premium_beverages_schweppes.description",
        version: "0",
        website: "https://www.albconnect.com.au/storefront/sga/en/AUD/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230389.jpg",
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
        loginUrl: "https://www.albconnect.com.au/storefront/sga/en/AUD/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AsahiPremiumBeveragesSchweppesCollector.CONFIG);
    }
}
