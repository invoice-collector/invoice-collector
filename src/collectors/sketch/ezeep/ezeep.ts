
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EzeepCollector extends SketchCollector {

    static CONFIG = {
        id: "ezeep",
        name: "ezeep",
        description: "i18n.collectors.ezeep.description",
        version: "0",
        website: "https://app.ezeep.com/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881833.jpg",
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
        loginUrl: "https://app.ezeep.com/subscription",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EzeepCollector.CONFIG);
    }
}
