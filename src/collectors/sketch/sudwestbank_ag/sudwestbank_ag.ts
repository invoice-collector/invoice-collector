
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SudwestbankAgCollector extends SketchCollector {

    static CONFIG = {
        id: "sudwestbank_ag",
        name: "Sudwestbank AG",
        description: "i18n.collectors.sudwestbank_ag.description",
        version: "0",
        website: "https://www.banking-suedwestbank.de/banking-private/entry",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/662540.jpg",
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
        loginUrl: "https://www.banking-suedwestbank.de/banking-private/entry",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SudwestbankAgCollector.CONFIG);
    }
}
