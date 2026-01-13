
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RsbRheinSiegBreitbandCollector extends SketchCollector {

    static CONFIG = {
        id: "rsb_rhein_sieg_breitband",
        name: "RSB - Rhein-Sieg-Breitband",
        description: "i18n.collectors.rsb_rhein_sieg_breitband.description",
        version: "0",
        website: "http://www.rs-breitband.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9461.jpg",
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
        loginUrl: "http://www.rs-breitband.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RsbRheinSiegBreitbandCollector.CONFIG);
    }
}
