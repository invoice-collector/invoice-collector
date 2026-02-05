
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiraklShopApothekeCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_shop_apotheke",
        name: "Mirakl Shop-Apotheke",
        description: "i18n.collectors.mirakl_shop_apotheke.description",
        version: "0",
        website: "https://shopapotheke.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2134132.jpg",
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
        loginUrl: "https://shopapotheke.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MiraklShopApothekeCollector.CONFIG);
    }
}
