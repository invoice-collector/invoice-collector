
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MicrosoftPartnerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_partner_portal",
        name: "Microsoft Partner Portal",
        description: "i18n.collectors.microsoft_partner_portal.description",
        version: "0",
        website: "https://partner.microsoft.com/dashboard/payouts/reports/incentivepayments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777219.jpg",
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
        loginUrl: "https://partner.microsoft.com/dashboard/payouts/reports/incentivepayments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MicrosoftPartnerPortalCollector.CONFIG);
    }
}
