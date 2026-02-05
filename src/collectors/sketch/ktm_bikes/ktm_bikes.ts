
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KtmBikesCollector extends SketchCollector {

    static CONFIG = {
        id: "ktm_bikes",
        name: "ktm-bikes",
        description: "i18n.collectors.ktm_bikes.description",
        version: "0",
        website: "https://shop.ktm-bikes.at/ktm_de_de/sap_customer/listing/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2587350.jpg",
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
        loginUrl: "https://shop.ktm-bikes.at/ktm_de_de/sap_customer/listing/invoice/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KtmBikesCollector.CONFIG);
    }
}
