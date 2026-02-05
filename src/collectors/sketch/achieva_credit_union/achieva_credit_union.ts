
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AchievaCreditUnionCollector extends SketchCollector {

    static CONFIG = {
        id: "achieva_credit_union",
        name: "Achieva Credit Union",
        description: "i18n.collectors.achieva_credit_union.description",
        version: "0",
        website: "https://banking.achievacu.com/eDocs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519914.jpg",
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
        loginUrl: "https://banking.achievacu.com/eDocs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AchievaCreditUnionCollector.CONFIG);
    }
}
