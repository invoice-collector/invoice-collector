import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RadiusFuelCollector extends SketchCollector {

    static CONFIG = {
        id: "radiusfuel",
        name: "Radius Fuel",
        description: "i18n.collectors.radiusfuel.description",
        version: "0",
        website: "https://www.radiusfuelsolutions.com",
        logo: "https://www.adamphones.com/wp-content/uploads/2020/02/radius-products-radius-fuel-solutions.png",
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
        loginUrl: "https://www.velocityfleet.com/accounts/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RadiusFuelCollector.CONFIG);
    }
}
