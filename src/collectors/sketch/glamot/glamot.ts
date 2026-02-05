
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GlamotCollector extends SketchCollector {

    static CONFIG = {
        id: "glamot",
        name: "Glamot",
        description: "i18n.collectors.glamot.description",
        version: "0",
        website: "https://www.glamot.de/invoice?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732359.jpg",
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
        loginUrl: "https://www.glamot.de/invoice?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GlamotCollector.CONFIG);
    }
}
