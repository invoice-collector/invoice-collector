
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AwistaCollector extends SketchCollector {

    static CONFIG = {
        id: "awista",
        name: "AWISTA",
        description: "i18n.collectors.awista.description",
        version: "0",
        website: "https://portal.awista.de/portal/invoice-duplicate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417149.jpg",
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
        loginUrl: "https://portal.awista.de/portal/invoice-duplicate",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AwistaCollector.CONFIG);
    }
}
