import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KnaufIndustriesCollector extends SketchCollector {

    static CONFIG = {
        id: "knaufindustries",
        name: "Knauf Industries",
        description: "i18n.collectors.knaufindustries.description",
        version: "0",
        website: "https://www.knauf-industries.com",
        logo: "https://solarimpulse.com/files/companies/logo/2020-04-10-101511/logoKnaufIndustries.jpg",
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
        loginUrl: "https://account.knauf.com/auth/signin?callbackUrl=%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KnaufIndustriesCollector.CONFIG);
    }
}
