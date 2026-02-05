
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpustrustwebBidfoodCollector extends SketchCollector {

    static CONFIG = {
        id: "opustrustweb_bidfood",
        name: "OpusTrustWeb(Bidfood)",
        description: "i18n.collectors.opustrustweb_bidfood.description",
        version: "0",
        website: "https://www.opustrustweb.co.uk/bidfood/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385879.jpg",
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
        loginUrl: "https://www.opustrustweb.co.uk/bidfood/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OpustrustwebBidfoodCollector.CONFIG);
    }
}
