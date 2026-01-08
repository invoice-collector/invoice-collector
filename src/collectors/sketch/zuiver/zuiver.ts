import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZuiverCollector extends SketchCollector {

    static CONFIG = {
        id: "zuiver",
        name: "Zuiver",
        description: "i18n.collectors.zuiver.description",
        version: "0",
        website: "https://www.zuiver.com",
        logo: "https://www.zuiver.com/static/version1762859140/frontend/Zuiver/default/nl_NL/images/logo.svg",
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
        loginUrl: "https://www.zuiver.com/en/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZuiverCollector.CONFIG);
    }
}
