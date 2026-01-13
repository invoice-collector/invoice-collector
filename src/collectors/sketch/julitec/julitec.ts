
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JulitecCollector extends SketchCollector {

    static CONFIG = {
        id: "julitec",
        name: "julitec",
        description: "i18n.collectors.julitec.description",
        version: "0",
        website: "https://app.billwerk.com/portal/account.html#/WoCt0G6hy8rks2vESZWvgQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197393.jpg",
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
        loginUrl: "https://app.billwerk.com/portal/account.html#/WoCt0G6hy8rks2vESZWvgQ",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JulitecCollector.CONFIG);
    }
}
