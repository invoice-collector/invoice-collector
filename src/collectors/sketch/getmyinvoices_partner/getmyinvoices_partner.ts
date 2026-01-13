
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GetmyinvoicesPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "getmyinvoices_partner",
        name: "GetMyInvoices Partner",
        description: "i18n.collectors.getmyinvoices_partner.description",
        version: "0",
        website: "https://partners.getmyinvoices.com/credits.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777207.jpg",
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
        loginUrl: "https://partners.getmyinvoices.com/credits.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetmyinvoicesPartnerCollector.CONFIG);
    }
}
