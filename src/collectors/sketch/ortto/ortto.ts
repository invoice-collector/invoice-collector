
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrttoCollector extends SketchCollector {

    static CONFIG = {
        id: "ortto",
        name: "Ortto",
        description: "i18n.collectors.ortto.description",
        version: "0",
        website: "https://ortto.app/deinarchitekt/billing/invoices?from=%2Fhome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128526.jpg",
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
        loginUrl: "https://ortto.app/deinarchitekt/billing/invoices?from=%2Fhome",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrttoCollector.CONFIG);
    }
}
