
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KometDentalCollector extends SketchCollector {

    static CONFIG = {
        id: "komet_dental",
        name: "Komet Dental",
        description: "i18n.collectors.komet_dental.description",
        version: "0",
        website: "https://www.kometstore.de/de-de/special-pages/my-account.aspx?page=orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445883.jpg",
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
        loginUrl: "https://www.kometstore.de/de-de/special-pages/my-account.aspx?page=orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KometDentalCollector.CONFIG);
    }
}
