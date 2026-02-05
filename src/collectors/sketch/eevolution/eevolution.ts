
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EevolutionCollector extends SketchCollector {

    static CONFIG = {
        id: "eevolution",
        name: "eEvolution",
        description: "i18n.collectors.eevolution.description",
        version: "0",
        website: "https://www.eevolution.de/forum/forum/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/561.jpg",
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
        loginUrl: "https://www.eevolution.de/forum/forum/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EevolutionCollector.CONFIG);
    }
}
