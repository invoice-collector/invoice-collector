
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToyotaDealerDailyCollector extends SketchCollector {

    static CONFIG = {
        id: "toyota_dealer_daily",
        name: "Toyota Dealer Daily",
        description: "i18n.collectors.toyota_dealer_daily.description",
        version: "0",
        website: "https://www.toyotaedp.standardregister.com/Pages/UserPages/SearchInvoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4582959.jpg",
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
        loginUrl: "https://www.toyotaedp.standardregister.com/Pages/UserPages/SearchInvoices.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToyotaDealerDailyCollector.CONFIG);
    }
}
