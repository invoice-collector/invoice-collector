
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LinkedhubCollector extends SketchCollector {

    static CONFIG = {
        id: "linkedhub",
        name: "LinkedHub",
        description: "i18n.collectors.linkedhub.description",
        version: "0",
        website: "https://api.linkedhub.io/api/v3/billing.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150643.jpg",
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
        loginUrl: "https://api.linkedhub.io/api/v3/billing.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkedhubCollector.CONFIG);
    }
}
