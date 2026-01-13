
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PamyraGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "pamyra_gmbh",
        name: "Pamyra GmbH",
        description: "i18n.collectors.pamyra_gmbh.description",
        version: "0",
        website: "https://www.pamyra.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1186157.jpg",
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
        loginUrl: "https://www.pamyra.de/anmelden",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PamyraGmbhCollector.CONFIG);
    }
}
