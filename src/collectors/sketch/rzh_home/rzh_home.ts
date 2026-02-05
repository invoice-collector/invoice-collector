
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RzhHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "rzh_home",
        name: "RZH Home",
        description: "i18n.collectors.rzh_home.description",
        version: "0",
        website: "https://www.rzh-home.de/statistiken",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2795782.jpg",
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
        loginUrl: "https://www.rzh-home.de/statistiken",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RzhHomeCollector.CONFIG);
    }
}
