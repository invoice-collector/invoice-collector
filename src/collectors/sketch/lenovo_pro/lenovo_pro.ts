
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LenovoProCollector extends SketchCollector {

    static CONFIG = {
        id: "lenovo_pro",
        name: "Lenovo Pro",
        description: "i18n.collectors.lenovo_pro.description",
        version: "0",
        website: "https://account.lenovo.com/de/lenovopro/de/smbaccount/gatekeeper/showpage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131264.jpg",
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
        loginUrl: "https://account.lenovo.com/de/lenovopro/de/smbaccount/gatekeeper/showpage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LenovoProCollector.CONFIG);
    }
}
