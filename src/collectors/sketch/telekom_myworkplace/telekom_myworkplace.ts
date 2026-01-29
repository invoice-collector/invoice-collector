
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelekomMyworkplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_myworkplace",
        name: "Telekom - MyWorkplace",
        description: "i18n.collectors.telekom_myworkplace.description",
        version: "0",
        website: "https://myworkplace.t-systems.com/MyWorkplace/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125668.jpg",
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
        loginUrl: "https://myworkplace.t-systems.com/MyWorkplace/Login.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelekomMyworkplaceCollector.CONFIG);
    }
}
