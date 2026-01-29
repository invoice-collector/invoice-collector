
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnitoCollector extends SketchCollector {

    static CONFIG = {
        id: "unito",
        name: "Unito",
        description: "i18n.collectors.unito.description",
        version: "0",
        website: "https://app.unito.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213143.jpg",
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
        loginUrl: "https://app.unito.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UnitoCollector.CONFIG);
    }
}
