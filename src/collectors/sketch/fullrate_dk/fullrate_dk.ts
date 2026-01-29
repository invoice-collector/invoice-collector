
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FullrateDkCollector extends SketchCollector {

    static CONFIG = {
        id: "fullrate_dk",
        name: "Fullrate.dk",
        description: "i18n.collectors.fullrate_dk.description",
        version: "0",
        website: "https://www.fullrate.dk/selvbetjening/fakturaoversigt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80276.jpg",
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
        loginUrl: "https://www.fullrate.dk/selvbetjening/fakturaoversigt",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FullrateDkCollector.CONFIG);
    }
}
