
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeamretroCollector extends SketchCollector {

    static CONFIG = {
        id: "teamretro",
        name: "TeamRetro",
        description: "i18n.collectors.teamretro.description",
        version: "0",
        website: "https://instamotion.teamretro.com/billing/transactions/dqabm989",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/228718.jpg",
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
        loginUrl: "https://instamotion.teamretro.com/billing/transactions/dqabm989",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeamretroCollector.CONFIG);
    }
}
