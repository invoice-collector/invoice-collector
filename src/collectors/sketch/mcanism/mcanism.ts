
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class McanismCollector extends SketchCollector {

    static CONFIG = {
        id: "mcanism",
        name: "mcanism",
        description: "i18n.collectors.mcanism.description",
        version: "0",
        website: "https://skynet.mcanism.com/finance/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669913.jpg",
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
        loginUrl: "https://skynet.mcanism.com/finance/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(McanismCollector.CONFIG);
    }
}
