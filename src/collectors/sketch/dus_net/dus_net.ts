
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DusNetCollector extends SketchCollector {

    static CONFIG = {
        id: "dus_net",
        name: "dus.net",
        description: "i18n.collectors.dus_net.description",
        version: "0",
        website: "https://www.dus.net/de/kundenmenue/kundencenter/bookkeeping.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6534.jpg",
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
        loginUrl: "https://www.dus.net/de/kundenmenue/kundencenter/bookkeeping.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DusNetCollector.CONFIG);
    }
}
