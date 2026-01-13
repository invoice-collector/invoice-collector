
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BackblazeCollector extends SketchCollector {

    static CONFIG = {
        id: "backblaze",
        name: "Backblaze",
        description: "i18n.collectors.backblaze.description",
        version: "0",
        website: "https://secure.backblaze.com/billing.htm?billing_page=backup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7674.jpg",
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
        loginUrl: "https://secure.backblaze.com/billing.htm?billing_page=backup",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BackblazeCollector.CONFIG);
    }
}
