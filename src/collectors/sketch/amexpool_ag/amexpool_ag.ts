
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmexpoolAgCollector extends SketchCollector {

    static CONFIG = {
        id: "amexpool_ag",
        name: "AMEXPool AG",
        description: "i18n.collectors.amexpool_ag.description",
        version: "0",
        website: "https://amex-online.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107220.jpg",
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
        loginUrl: "https://amex-online.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmexpoolAgCollector.CONFIG);
    }
}
