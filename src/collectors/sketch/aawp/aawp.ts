
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AawpCollector extends SketchCollector {

    static CONFIG = {
        id: "aawp",
        name: "AAWP",
        description: "i18n.collectors.aawp.description",
        version: "0",
        website: "https://aawp.de/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778956.jpg",
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
        loginUrl: "https://aawp.de/dashboard/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AawpCollector.CONFIG);
    }
}
