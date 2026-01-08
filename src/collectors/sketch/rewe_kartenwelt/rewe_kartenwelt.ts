
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReweKartenweltCollector extends SketchCollector {

    static CONFIG = {
        id: "rewe_kartenwelt",
        name: "Rewe Kartenwelt",
        description: "i18n.collectors.rewe_kartenwelt.description",
        version: "0",
        website: "https://kartenwelt.rewe.de/sales/order/invoice/order_id/762116/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727892.jpg",
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
        loginUrl: "https://kartenwelt.rewe.de/sales/order/invoice/order_id/762116/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReweKartenweltCollector.CONFIG);
    }
}
