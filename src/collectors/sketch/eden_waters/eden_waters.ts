
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdenWatersCollector extends SketchCollector {

    static CONFIG = {
        id: "eden_waters",
        name: "Eden Waters",
        description: "i18n.collectors.eden_waters.description",
        version: "0",
        website: "https://www.edensprings.de/user",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50792.jpg",
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
        loginUrl: "https://www.edensprings.de/user",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdenWatersCollector.CONFIG);
    }
}
