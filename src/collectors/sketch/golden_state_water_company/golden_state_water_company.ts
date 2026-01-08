
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GoldenStateWaterCompanyCollector extends SketchCollector {

    static CONFIG = {
        id: "golden_state_water_company",
        name: "Golden State Water Company",
        description: "i18n.collectors.golden_state_water_company.description",
        version: "0",
        website: "https://www.gswater.mygswater-cap.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175957.jpg",
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
        loginUrl: "https://www.gswater.mygswater-cap.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoldenStateWaterCompanyCollector.CONFIG);
    }
}
