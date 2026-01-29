
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PhonemondoCollector extends SketchCollector {

    static CONFIG = {
        id: "phonemondo",
        name: "Phonemondo",
        description: "i18n.collectors.phonemondo.description",
        version: "0",
        website: "https://www.phonemondo.com/portal/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239235.jpg",
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
        loginUrl: "https://www.phonemondo.com/portal/dashboard/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PhonemondoCollector.CONFIG);
    }
}
