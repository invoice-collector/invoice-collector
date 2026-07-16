import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class RadiusFuelCollector extends SketchCollector {

    static CONFIG = {
        id: "radiusfuel",
        name: "Radius Fuel",
        description: "i18n.collectors.radiusfuel.description",
        version: "0",
        website: "https://www.radiusfuelsolutions.com",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8_og-5R0TyNTSImEECDOIyo6yV62_o2Nd0vl-B0MnA&s=10",
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
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RadiusFuelCollector.CONFIG);
    }
}
