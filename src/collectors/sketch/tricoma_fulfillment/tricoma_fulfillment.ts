
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TricomaFulfillmentCollector extends SketchCollector {

    static CONFIG = {
        id: "tricoma_fulfillment",
        name: "tricoma fulfillment",
        description: "i18n.collectors.tricoma_fulfillment.description",
        version: "0",
        website: "https://support.tricoma-fulfillment.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/886627.jpg",
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
        loginUrl: "https://support.tricoma-fulfillment.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TricomaFulfillmentCollector.CONFIG);
    }
}
