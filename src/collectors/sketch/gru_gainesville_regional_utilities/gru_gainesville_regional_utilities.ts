
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GruGainesvilleRegionalUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "gru_gainesville_regional_utilities",
        name: "GRU - Gainesville Regional Utilities",
        description: "i18n.collectors.gru_gainesville_regional_utilities.description",
        version: "0",
        website: "https://myaccount.gru.com/BillingAndUsageHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723581.jpg",
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
        loginUrl: "https://myaccount.gru.com/BillingAndUsageHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GruGainesvilleRegionalUtilitiesCollector.CONFIG);
    }
}
