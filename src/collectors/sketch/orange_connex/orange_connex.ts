
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrangeConnexCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_connex",
        name: "ORANGE CONNEX",
        description: "i18n.collectors.orange_connex.description",
        version: "0",
        website: "https://fulfillment.orangeconnex.com/seller/login?redirectUrl=https%3A%2F%2Ffulfillment.orangeconnex.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/809067.jpg",
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
        loginUrl: "https://fulfillment.orangeconnex.com/seller/login?redirectUrl=https%3A%2F%2Ffulfillment.orangeconnex.com%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrangeConnexCollector.CONFIG);
    }
}
