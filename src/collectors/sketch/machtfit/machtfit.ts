
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MachtfitCollector extends SketchCollector {

    static CONFIG = {
        id: "machtfit",
        name: "MACHTfit",
        description: "i18n.collectors.machtfit.description",
        version: "0",
        website: "https://machtfit.machtfit.de/accounts/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64784.jpg",
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
        loginUrl: "https://machtfit.machtfit.de/accounts/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MachtfitCollector.CONFIG);
    }
}
