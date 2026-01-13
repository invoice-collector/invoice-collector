
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ModifiCollector extends SketchCollector {

    static CONFIG = {
        id: "modifi",
        name: "MODIFI",
        description: "i18n.collectors.modifi.description",
        version: "0",
        website: "https://billing.modifi.com/invoices/buyer-finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799158.jpg",
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
        loginUrl: "https://billing.modifi.com/invoices/buyer-finance",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ModifiCollector.CONFIG);
    }
}
