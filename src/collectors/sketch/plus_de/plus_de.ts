
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlusDeCollector extends SketchCollector {

    static CONFIG = {
        id: "plus_de",
        name: "Plus.de",
        description: "i18n.collectors.plus_de.description",
        version: "0",
        website: "https://www.plus.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44609.jpg",
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
        loginUrl: "https://www.plus.de/mein-konto/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PlusDeCollector.CONFIG);
    }
}
