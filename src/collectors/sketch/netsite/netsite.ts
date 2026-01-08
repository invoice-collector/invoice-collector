
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetsiteCollector extends SketchCollector {

    static CONFIG = {
        id: "netsite",
        name: "netsite",
        description: "i18n.collectors.netsite.description",
        version: "0",
        website: "https://www.netsite.dk/mit/faktura/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109856.jpg",
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
        loginUrl: "https://www.netsite.dk/mit/faktura/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetsiteCollector.CONFIG);
    }
}
