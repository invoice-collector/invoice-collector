
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WpformsCollector extends SketchCollector {

    static CONFIG = {
        id: "wpforms",
        name: "WPForms",
        description: "i18n.collectors.wpforms.description",
        version: "0",
        website: "https://wpforms.com/account/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104405.jpg",
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
        loginUrl: "https://wpforms.com/account/purchase-history/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WpformsCollector.CONFIG);
    }
}
