
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _4tsCollector extends SketchCollector {

    static CONFIG = {
        id: "4ts",
        name: "4ts",
        description: "i18n.collectors.4ts.description",
        version: "0",
        website: "https://kunden.4ts.at/index.php?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121221.jpg",
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
        loginUrl: "https://kunden.4ts.at/index.php?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_4tsCollector.CONFIG);
    }
}
