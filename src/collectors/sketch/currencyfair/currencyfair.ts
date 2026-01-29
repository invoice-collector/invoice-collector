
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CurrencyfairCollector extends SketchCollector {

    static CONFIG = {
        id: "currencyfair",
        name: "CurrencyFair",
        description: "i18n.collectors.currencyfair.description",
        version: "0",
        website: "https://app.currencyfair.com/accounts/statements/ALL/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120346.jpg",
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
        loginUrl: "https://app.currencyfair.com/accounts/statements/ALL/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CurrencyfairCollector.CONFIG);
    }
}
