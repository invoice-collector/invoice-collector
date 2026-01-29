
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigiprintSuppliesCollector extends SketchCollector {

    static CONFIG = {
        id: "digiprint_supplies",
        name: "Digiprint Supplies",
        description: "i18n.collectors.digiprint_supplies.description",
        version: "0",
        website: "https://www.digiprint-supplies.com/en/invoices/index/list/order_id/333694/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170844.jpg",
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
        loginUrl: "https://www.digiprint-supplies.com/en/invoices/index/list/order_id/333694/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DigiprintSuppliesCollector.CONFIG);
    }
}
