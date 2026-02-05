
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MydhlDhlExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "mydhl_dhl_express",
        name: "MyDHL - DHL Express",
        description: "i18n.collectors.mydhl_dhl_express.description",
        version: "0",
        website: "https://mydhl.express.dhl/de/de/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74130.jpg",
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
        loginUrl: "https://mydhl.express.dhl/de/de/home.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MydhlDhlExpressCollector.CONFIG);
    }
}
