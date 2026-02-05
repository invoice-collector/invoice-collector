
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllStarCardCollector extends SketchCollector {

    static CONFIG = {
        id: "all_star_card",
        name: "All Star Card",
        description: "i18n.collectors.all_star_card.description",
        version: "0",
        website: "https://www.allstaronline.co.uk/OpenBankingAuthUI/Pages/Public/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230380.jpg",
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
        loginUrl: "https://www.allstaronline.co.uk/OpenBankingAuthUI/Pages/Public/Login.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AllStarCardCollector.CONFIG);
    }
}
