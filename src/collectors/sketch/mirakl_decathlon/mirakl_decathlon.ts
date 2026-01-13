
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiraklDecathlonCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_decathlon",
        name: "mirakl decathlon",
        description: "i18n.collectors.mirakl_decathlon.description",
        version: "0",
        website: "https://marketplace-decathlon-eu.mirakl.net/sellerpayment/shop/shop-billing-cycles",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881919.jpg",
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
        loginUrl: "https://marketplace-decathlon-eu.mirakl.net/sellerpayment/shop/shop-billing-cycles",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiraklDecathlonCollector.CONFIG);
    }
}
