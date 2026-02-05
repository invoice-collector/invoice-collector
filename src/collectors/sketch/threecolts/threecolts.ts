
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThreecoltsCollector extends SketchCollector {

    static CONFIG = {
        id: "threecolts",
        name: "Threecolts",
        description: "i18n.collectors.threecolts.description",
        version: "0",
        website: "https://manager.threecolts.com/v2/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222550.jpg",
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
        loginUrl: "https://manager.threecolts.com/v2/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ThreecoltsCollector.CONFIG);
    }
}
