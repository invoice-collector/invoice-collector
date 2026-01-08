
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LiquidPlannerCollector extends SketchCollector {

    static CONFIG = {
        id: "liquid_planner",
        name: "Liquid Planner",
        description: "i18n.collectors.liquid_planner.description",
        version: "0",
        website: "https://app.liquidplanner.com/login?_ga=2.149206070.1614711150.1523347147-1211154284.1523347147",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6422.jpg",
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
        loginUrl: "https://app.liquidplanner.com/login?_ga=2.149206070.1614711150.1523347147-1211154284.1523347147",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LiquidPlannerCollector.CONFIG);
    }
}
