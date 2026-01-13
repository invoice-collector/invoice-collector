
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EbayCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_co_uk",
        name: "ebay.co.uk",
        description: "i18n.collectors.ebay_co_uk.description",
        version: "0",
        website: "https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.co.uk%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21640.jpg",
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
        loginUrl: "https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.co.uk%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EbayCoUkCollector.CONFIG);
    }
}
