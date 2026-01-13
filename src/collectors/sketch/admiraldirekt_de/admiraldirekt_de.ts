
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdmiraldirektDeCollector extends SketchCollector {

    static CONFIG = {
        id: "admiraldirekt_de",
        name: "Admiraldirekt.de",
        description: "i18n.collectors.admiraldirekt_de.description",
        version: "0",
        website: "https://portal.admiraldirekt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040936.jpg",
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
        loginUrl: "https://portal.admiraldirekt.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdmiraldirektDeCollector.CONFIG);
    }
}
