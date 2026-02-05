
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KatagCollector extends SketchCollector {

    static CONFIG = {
        id: "katag",
        name: "Katag",
        description: "i18n.collectors.katag.description",
        version: "0",
        website: "https://zronline.katag.net/gui/#search",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1234109.jpg",
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
        loginUrl: "https://zronline.katag.net/gui/#search",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KatagCollector.CONFIG);
    }
}
