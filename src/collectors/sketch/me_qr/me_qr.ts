
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeQrCollector extends SketchCollector {

    static CONFIG = {
        id: "me_qr",
        name: "Me-QR",
        description: "i18n.collectors.me_qr.description",
        version: "0",
        website: "https://me-qr.com/subscription/admin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2716253.jpg",
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
        loginUrl: "https://me-qr.com/subscription/admin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeQrCollector.CONFIG);
    }
}
