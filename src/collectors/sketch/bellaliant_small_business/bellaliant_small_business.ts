
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BellaliantSmallBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "bellaliant_small_business",
        name: "BellAliant Small Business",
        description: "i18n.collectors.bellaliant_small_business.description",
        version: "0",
        website: "https://productsandservice.bellaliant.ca/BillPresenter/BusinessBill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396882.jpg",
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
        loginUrl: "https://productsandservice.bellaliant.ca/BillPresenter/BusinessBill",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BellaliantSmallBusinessCollector.CONFIG);
    }
}
