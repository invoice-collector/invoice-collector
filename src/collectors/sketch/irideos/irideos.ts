
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IrideosCollector extends SketchCollector {

    static CONFIG = {
        id: "irideos",
        name: "IRIDEOS",
        description: "i18n.collectors.irideos.description",
        version: "0",
        website: "https://reseller-areaclienti.irideos.it/AdminPanel/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/850030.jpg",
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
        loginUrl: "https://reseller-areaclienti.irideos.it/AdminPanel/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IrideosCollector.CONFIG);
    }
}
