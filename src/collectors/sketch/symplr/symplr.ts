
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SymplrCollector extends SketchCollector {

    static CONFIG = {
        id: "symplr",
        name: "symplr",
        description: "i18n.collectors.symplr.description",
        version: "0",
        website: "https://cockpit.symplr.de/credits/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022440.jpg",
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
        loginUrl: "https://cockpit.symplr.de/credits/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SymplrCollector.CONFIG);
    }
}
