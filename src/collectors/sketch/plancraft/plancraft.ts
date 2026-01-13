
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlancraftCollector extends SketchCollector {

    static CONFIG = {
        id: "plancraft",
        name: "Plancraft",
        description: "i18n.collectors.plancraft.description",
        version: "0",
        website: "https://plancraft.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246689.jpg",
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
        loginUrl: "https://plancraft.de/anmelden",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlancraftCollector.CONFIG);
    }
}
