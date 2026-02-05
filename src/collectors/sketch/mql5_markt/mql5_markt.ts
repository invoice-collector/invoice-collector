
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Mql5MarktCollector extends SketchCollector {

    static CONFIG = {
        id: "mql5_markt",
        name: "MQL5 Markt",
        description: "i18n.collectors.mql5_markt.description",
        version: "0",
        website: "https://www.mql5.com/de/users/cbanalyse/accounting",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779010.jpg",
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
        loginUrl: "https://www.mql5.com/de/users/cbanalyse/accounting",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Mql5MarktCollector.CONFIG);
    }
}
