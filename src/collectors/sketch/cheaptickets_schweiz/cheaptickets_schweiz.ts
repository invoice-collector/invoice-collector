
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CheapticketsSchweizCollector extends SketchCollector {

    static CONFIG = {
        id: "cheaptickets_schweiz",
        name: "Cheaptickets Schweiz",
        description: "i18n.collectors.cheaptickets_schweiz.description",
        version: "0",
        website: "https://www.cheaptickets.ch/account/bookings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155168.jpg",
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
        loginUrl: "https://www.cheaptickets.ch/account/bookings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CheapticketsSchweizCollector.CONFIG);
    }
}
