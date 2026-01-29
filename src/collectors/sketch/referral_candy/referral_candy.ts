
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReferralCandyCollector extends SketchCollector {

    static CONFIG = {
        id: "referral_candy",
        name: "Referral Candy",
        description: "i18n.collectors.referral_candy.description",
        version: "0",
        website: "https://my.referralcandy.com/current_bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777343.jpg",
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
        loginUrl: "https://my.referralcandy.com/current_bill",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ReferralCandyCollector.CONFIG);
    }
}
