
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RebuyCollector extends SketchCollector {

    static CONFIG = {
        id: "rebuy",
        name: "reBuy",
        description: "i18n.collectors.rebuy.description",
        version: "0",
        website: "https://www.rebuy.de/my/orders/blue",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14448.jpg",
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
        loginUrl: "https://www.rebuy.de/my/orders/blue",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RebuyCollector.CONFIG);
    }
}
