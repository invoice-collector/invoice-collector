
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PacktpubCollector extends SketchCollector {

    static CONFIG = {
        id: "packtpub",
        name: "Packtpub",
        description: "i18n.collectors.packtpub.description",
        version: "0",
        website: "https://subscription.packtpub.com/my-account/billing-details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556112.jpg",
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
        loginUrl: "https://subscription.packtpub.com/my-account/billing-details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PacktpubCollector.CONFIG);
    }
}
