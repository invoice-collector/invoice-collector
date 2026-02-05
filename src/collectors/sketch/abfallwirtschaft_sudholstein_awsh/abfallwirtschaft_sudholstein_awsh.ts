
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AbfallwirtschaftSudholsteinAwshCollector extends SketchCollector {

    static CONFIG = {
        id: "abfallwirtschaft_sudholstein_awsh",
        name: "Abfallwirtschaft Sudholstein - AWSH",
        description: "i18n.collectors.abfallwirtschaft_sudholstein_awsh.description",
        version: "0",
        website: "https://www.awsh.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778194.jpg",
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
        loginUrl: "https://www.awsh.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AbfallwirtschaftSudholsteinAwshCollector.CONFIG);
    }
}
