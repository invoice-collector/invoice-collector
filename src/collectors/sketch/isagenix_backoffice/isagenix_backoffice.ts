
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IsagenixBackofficeCollector extends SketchCollector {

    static CONFIG = {
        id: "isagenix_backoffice",
        name: "Isagenix Backoffice",
        description: "i18n.collectors.isagenix_backoffice.description",
        version: "0",
        website: "https://backoffice.isagenix.com/Order/OrderHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297692.jpg",
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
        loginUrl: "https://backoffice.isagenix.com/Order/OrderHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IsagenixBackofficeCollector.CONFIG);
    }
}
