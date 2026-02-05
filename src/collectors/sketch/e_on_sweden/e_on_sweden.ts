
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EOnSwedenCollector extends SketchCollector {

    static CONFIG = {
        id: "e_on_sweden",
        name: "E.On - Sweden",
        description: "i18n.collectors.e_on_sweden.description",
        version: "0",
        website: "https://www.eon.se/privat.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/143859.jpg",
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
        loginUrl: "https://www.eon.se/privat.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EOnSwedenCollector.CONFIG);
    }
}
