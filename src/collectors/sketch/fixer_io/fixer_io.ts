
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FixerIoCollector extends SketchCollector {

    static CONFIG = {
        id: "fixer_io",
        name: "Fixer.io",
        description: "i18n.collectors.fixer_io.description",
        version: "0",
        website: "https://fixer.io/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79441.jpg",
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
        loginUrl: "https://fixer.io/payment",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FixerIoCollector.CONFIG);
    }
}
