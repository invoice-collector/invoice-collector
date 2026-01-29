
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RoastmarketCollector extends SketchCollector {

    static CONFIG = {
        id: "roastmarket",
        name: "Roastmarket",
        description: "i18n.collectors.roastmarket.description",
        version: "0",
        website: "https://www.roastmarket.de/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37391.jpg",
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
        loginUrl: "https://www.roastmarket.de/customer/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RoastmarketCollector.CONFIG);
    }
}
