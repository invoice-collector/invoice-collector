
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DiedruckereiDeCollector extends SketchCollector {

    static CONFIG = {
        id: "diedruckerei_de",
        name: "diedruckerei.de",
        description: "i18n.collectors.diedruckerei_de.description",
        version: "0",
        website: "https://www.onlineprinters.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2359.jpg",
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
        loginUrl: "https://www.onlineprinters.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DiedruckereiDeCollector.CONFIG);
    }
}
