
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpielmaterialCollector extends SketchCollector {

    static CONFIG = {
        id: "spielmaterial",
        name: "Spielmaterial",
        description: "i18n.collectors.spielmaterial.description",
        version: "0",
        website: "https://www.spielematerial.de/de/sales/order/invoice/order_id/129376/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025541.jpg",
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
        loginUrl: "https://www.spielematerial.de/de/sales/order/invoice/order_id/129376/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SpielmaterialCollector.CONFIG);
    }
}
