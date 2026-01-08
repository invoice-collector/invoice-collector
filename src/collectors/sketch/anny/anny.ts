
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AnnyCollector extends SketchCollector {

    static CONFIG = {
        id: "anny",
        name: "anny",
        description: "i18n.collectors.anny.description",
        version: "0",
        website: "https://app.anny.co",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1266401.jpg",
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
        loginUrl: "https://app.anny.co",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnnyCollector.CONFIG);
    }
}
