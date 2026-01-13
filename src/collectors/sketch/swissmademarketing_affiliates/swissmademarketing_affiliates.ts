
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwissmademarketingAffiliatesCollector extends SketchCollector {

    static CONFIG = {
        id: "swissmademarketing_affiliates",
        name: "SwissMadeMarketing Affiliates",
        description: "i18n.collectors.swissmademarketing_affiliates.description",
        version: "0",
        website: "http://affiliates.swissmademarketing.com/affiliates/panel.php#Payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7664.jpg",
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
        loginUrl: "http://affiliates.swissmademarketing.com/affiliates/panel.php#Payouts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwissmademarketingAffiliatesCollector.CONFIG);
    }
}
