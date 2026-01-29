
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiraklAutodocMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_autodoc_marketplace",
        name: "Mirakl - Autodoc Marketplace",
        description: "i18n.collectors.mirakl_autodoc_marketplace.description",
        version: "0",
        website: "https://autodocde-prod.mirakl.net/sellerpayment/shop/transaction?select-search=ORDER_NUMBER_REF&limit=25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693706.jpg",
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
        loginUrl: "https://autodocde-prod.mirakl.net/sellerpayment/shop/transaction?select-search=ORDER_NUMBER_REF&limit=25",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MiraklAutodocMarketplaceCollector.CONFIG);
    }
}
