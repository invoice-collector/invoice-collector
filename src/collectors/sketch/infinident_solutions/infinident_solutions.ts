
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InfinidentSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "infinident_solutions",
        name: "Infinident Solutions",
        description: "i18n.collectors.infinident_solutions.description",
        version: "0",
        website: "https://erp.infinidentsolutions.com/Infinident_myo/web/Portal-infinident_sol_myo-1/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214174.jpg",
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
        loginUrl: "https://erp.infinidentsolutions.com/Infinident_myo/web/Portal-infinident_sol_myo-1/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfinidentSolutionsCollector.CONFIG);
    }
}
