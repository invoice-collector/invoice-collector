
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaqatoCollector extends SketchCollector {

    static CONFIG = {
        id: "paqato",
        name: "Paqato",
        description: "i18n.collectors.paqato.description",
        version: "0",
        website: "https://myadmin.paqato.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144292.jpg",
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
        loginUrl: "https://myadmin.paqato.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaqatoCollector.CONFIG);
    }
}
