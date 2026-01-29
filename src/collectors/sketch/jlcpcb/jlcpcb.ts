
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JlcpcbCollector extends SketchCollector {

    static CONFIG = {
        id: "jlcpcb",
        name: "JLCPCB",
        description: "i18n.collectors.jlcpcb.description",
        version: "0",
        website: "https://jlcpcb.com/client/index.html#/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124044.jpg",
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
        loginUrl: "https://jlcpcb.com/client/index.html#/order",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JlcpcbCollector.CONFIG);
    }
}
