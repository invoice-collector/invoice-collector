
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Invoice2goCollector extends SketchCollector {

    static CONFIG = {
        id: "invoice2go",
        name: "Invoice2go",
        description: "i18n.collectors.invoice2go.description",
        version: "0",
        website: "https://account.2go.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68854.jpg",
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
        loginUrl: "https://account.2go.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Invoice2goCollector.CONFIG);
    }
}
