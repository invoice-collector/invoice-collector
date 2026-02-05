
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SfrReCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_re",
        name: "SFR (.re)",
        description: "i18n.collectors.sfr_re.description",
        version: "0",
        website: "https://sso.sfr.re/login?service=https://www.sfr.re/boutique-mobile/api/secure/validate",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/SFR-2022-logo.svg",
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
        loginUrl: "https://sso.sfr.re/login?service=https://www.sfr.re/boutique-mobile/api/secure/validate",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SfrReCollector.CONFIG);
    }
}
