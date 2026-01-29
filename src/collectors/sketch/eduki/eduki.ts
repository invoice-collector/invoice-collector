
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdukiCollector extends SketchCollector {

    static CONFIG = {
        id: "eduki",
        name: "Eduki",
        description: "i18n.collectors.eduki.description",
        version: "0",
        website: "https://eduki.com/de/honorar",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472569.jpg",
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
        loginUrl: "https://eduki.com/de/honorar",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EdukiCollector.CONFIG);
    }
}
