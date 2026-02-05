
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KnappschaftBahnSeeCollector extends SketchCollector {

    static CONFIG = {
        id: "knappschaft_bahn_see",
        name: "Knappschaft Bahn See",
        description: "i18n.collectors.knappschaft_bahn_see.description",
        version: "0",
        website: "https://jwm.kbs.de:443",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414892.jpg",
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
        loginUrl: "https://jwm.kbs.de:443",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KnappschaftBahnSeeCollector.CONFIG);
    }
}
