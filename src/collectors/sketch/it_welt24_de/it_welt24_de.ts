
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ItWelt24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "it_welt24_de",
        name: "IT-Welt24.de",
        description: "i18n.collectors.it_welt24_de.description",
        version: "0",
        website: "https://www.it-welt24.de/backoffice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/671967.jpg",
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
        loginUrl: "https://www.it-welt24.de/backoffice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ItWelt24DeCollector.CONFIG);
    }
}
