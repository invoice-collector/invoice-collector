
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WemagCollector extends SketchCollector {

    static CONFIG = {
        id: "wemag",
        name: "WEMAG",
        description: "i18n.collectors.wemag.description",
        version: "0",
        website: "https://kundenportal.wemag.com/mein_wemio/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91232.jpg",
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
        loginUrl: "https://kundenportal.wemag.com/mein_wemio/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WemagCollector.CONFIG);
    }
}
