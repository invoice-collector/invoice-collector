
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreditreformCollector extends SketchCollector {

    static CONFIG = {
        id: "creditreform",
        name: "Creditreform",
        description: "i18n.collectors.creditreform.description",
        version: "0",
        website: "https://meine.creditreform.de/vorgaenge/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122550.jpg",
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
        loginUrl: "https://meine.creditreform.de/vorgaenge/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreditreformCollector.CONFIG);
    }
}
