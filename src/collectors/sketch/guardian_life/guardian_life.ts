
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GuardianLifeCollector extends SketchCollector {

    static CONFIG = {
        id: "guardian_life",
        name: "Guardian Life",
        description: "i18n.collectors.guardian_life.description",
        version: "0",
        website: "https://signin.guardianlife.com/signin/precheck/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409741.jpg",
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
        loginUrl: "https://signin.guardianlife.com/signin/precheck/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GuardianLifeCollector.CONFIG);
    }
}
