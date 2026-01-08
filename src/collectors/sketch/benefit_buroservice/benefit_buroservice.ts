
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BenefitBuroserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "benefit_buroservice",
        name: "Benefit Buroservice",
        description: "i18n.collectors.benefit_buroservice.description",
        version: "0",
        website: "https://service.benefit-bueroservice.at/mein-bueroservice#g_benefit_tab_bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409687.jpg",
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
        loginUrl: "https://service.benefit-bueroservice.at/mein-bueroservice#g_benefit_tab_bills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BenefitBuroserviceCollector.CONFIG);
    }
}
