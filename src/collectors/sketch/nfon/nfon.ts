
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NfonCollector extends SketchCollector {

    static CONFIG = {
        id: "nfon",
        name: "nfon",
        description: "i18n.collectors.nfon.description",
        version: "0",
        website: "https://mynfon.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10553.jpg",
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
        loginUrl: "https://mynfon.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NfonCollector.CONFIG);
    }
}
