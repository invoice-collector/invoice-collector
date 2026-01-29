
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvivaCollector extends SketchCollector {

    static CONFIG = {
        id: "aviva",
        name: "Aviva",
        description: "i18n.collectors.aviva.description",
        version: "0",
        website: "https://www.direct.aviva.co.uk/MyAccount/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54752.jpg",
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
        loginUrl: "https://www.direct.aviva.co.uk/MyAccount/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvivaCollector.CONFIG);
    }
}
