
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TMobileAtBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_at_business",
        name: "T-Mobile.at - Business",
        description: "i18n.collectors.t_mobile_at_business.description",
        version: "0",
        website: "https://rechnung.t-mobile.at/vpn/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9445.jpg",
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
        loginUrl: "https://rechnung.t-mobile.at/vpn/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TMobileAtBusinessCollector.CONFIG);
    }
}
