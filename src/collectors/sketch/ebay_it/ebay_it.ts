
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EbayItCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_it",
        name: "Ebay.it",
        description: "i18n.collectors.ebay_it.description",
        version: "0",
        website: "https://www.ebay.it/sh/fin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2769511.jpg",
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
        loginUrl: "https://www.ebay.it/sh/fin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EbayItCollector.CONFIG);
    }
}
