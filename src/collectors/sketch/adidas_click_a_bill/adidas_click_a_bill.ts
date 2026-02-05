
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdidasClickABillCollector extends SketchCollector {

    static CONFIG = {
        id: "adidas_click_a_bill",
        name: "Adidas - CLICK-A-BILL",
        description: "i18n.collectors.adidas_click_a_bill.description",
        version: "0",
        website: "https://click-a-bill.adidas-group.com/irj/portal/bd-we",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356084.jpg",
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
        loginUrl: "https://click-a-bill.adidas-group.com/irj/portal/bd-we",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdidasClickABillCollector.CONFIG);
    }
}
