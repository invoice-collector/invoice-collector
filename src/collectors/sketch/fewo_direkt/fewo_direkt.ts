
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FewoDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "fewo_direkt",
        name: "FeWo-direkt",
        description: "i18n.collectors.fewo_direkt.description",
        version: "0",
        website: "https://www.fewo-direkt.de/gd/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116244.jpg",
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
        loginUrl: "https://www.fewo-direkt.de/gd/payments/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FewoDirektCollector.CONFIG);
    }
}
