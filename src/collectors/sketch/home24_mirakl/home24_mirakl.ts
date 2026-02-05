
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Home24MiraklCollector extends SketchCollector {

    static CONFIG = {
        id: "home24_mirakl",
        name: "Home24 Mirakl",
        description: "i18n.collectors.home24_mirakl.description",
        version: "0",
        website: "https://home24.mirakl.net/sellerpayment/shop/accounting-document/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254952.jpg",
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
        loginUrl: "https://home24.mirakl.net/sellerpayment/shop/accounting-document/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Home24MiraklCollector.CONFIG);
    }
}
