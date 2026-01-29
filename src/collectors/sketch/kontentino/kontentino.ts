
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KontentinoCollector extends SketchCollector {

    static CONFIG = {
        id: "kontentino",
        name: "Kontentino",
        description: "i18n.collectors.kontentino.description",
        version: "0",
        website: "https://combyne.kontentino.com/billing/payments/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203069.jpg",
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
        loginUrl: "https://combyne.kontentino.com/billing/payments/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KontentinoCollector.CONFIG);
    }
}
