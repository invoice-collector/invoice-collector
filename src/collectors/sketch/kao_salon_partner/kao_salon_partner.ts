
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KaoSalonPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "kao_salon_partner",
        name: "Kao Salon Partner",
        description: "i18n.collectors.kao_salon_partner.description",
        version: "0",
        website: "https://www.kaosalonpartner.at/salon-at/de/EUR/my-account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1357513.jpg",
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
        loginUrl: "https://www.kaosalonpartner.at/salon-at/de/EUR/my-account/orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KaoSalonPartnerCollector.CONFIG);
    }
}
