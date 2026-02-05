
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DripifyCollector extends SketchCollector {

    static CONFIG = {
        id: "dripify",
        name: "Dripify",
        description: "i18n.collectors.dripify.description",
        version: "0",
        website: "https://app.dripify.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052822.jpg",
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
        loginUrl: "https://app.dripify.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DripifyCollector.CONFIG);
    }
}
