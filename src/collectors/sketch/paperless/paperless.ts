
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaperlessCollector extends SketchCollector {

    static CONFIG = {
        id: "paperless",
        name: "Paperless",
        description: "i18n.collectors.paperless.description",
        version: "0",
        website: "https://app.paperless.io/organizations/91/billing_session",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1763950.jpg",
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
        loginUrl: "https://app.paperless.io/organizations/91/billing_session",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaperlessCollector.CONFIG);
    }
}
