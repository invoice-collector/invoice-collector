
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiagCollector extends SketchCollector {

    static CONFIG = {
        id: "miag",
        name: "MIAG",
        description: "i18n.collectors.miag.description",
        version: "0",
        website: "https://app.miag.com/member/de/services/rma",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181670.jpg",
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
        loginUrl: "https://app.miag.com/member/de/services/rma",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiagCollector.CONFIG);
    }
}
