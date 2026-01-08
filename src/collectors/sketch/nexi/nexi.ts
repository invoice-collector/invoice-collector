
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NexiCollector extends SketchCollector {

    static CONFIG = {
        id: "nexi",
        name: "Nexi",
        description: "i18n.collectors.nexi.description",
        version: "0",
        website: "https://portal.nexi.de/web/Download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2161800.jpg",
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
        loginUrl: "https://portal.nexi.de/web/Download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NexiCollector.CONFIG);
    }
}
