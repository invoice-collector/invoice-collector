
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IMaterialiseDeCollector extends SketchCollector {

    static CONFIG = {
        id: "i_materialise_de",
        name: "i.materialise.de",
        description: "i18n.collectors.i_materialise_de.description",
        version: "0",
        website: "https://i.materialise.de/de/account/login?returnUrl=%2fde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32710.jpg",
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
        loginUrl: "https://i.materialise.de/de/account/login?returnUrl=%2fde",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IMaterialiseDeCollector.CONFIG);
    }
}
