
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FinanceadsCollector extends SketchCollector {

    static CONFIG = {
        id: "financeads",
        name: "financeAds",
        description: "i18n.collectors.financeads.description",
        version: "0",
        website: "https://login.financeads.net/de/index.php?module=login&msg=cookieerr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46106.jpg",
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
        loginUrl: "https://login.financeads.net/de/index.php?module=login&msg=cookieerr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FinanceadsCollector.CONFIG);
    }
}
