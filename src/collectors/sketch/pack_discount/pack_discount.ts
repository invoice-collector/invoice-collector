
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PackDiscountCollector extends SketchCollector {

    static CONFIG = {
        id: "pack_discount",
        name: "Pack Discount",
        description: "i18n.collectors.pack_discount.description",
        version: "0",
        website: "https://www.packdiscount.com/invoice/index/list/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210565.jpg",
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
        loginUrl: "https://www.packdiscount.com/invoice/index/list/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PackDiscountCollector.CONFIG);
    }
}
