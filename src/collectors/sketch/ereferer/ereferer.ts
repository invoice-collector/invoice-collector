
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ErefererCollector extends SketchCollector {

    static CONFIG = {
        id: "ereferer",
        name: "Ereferer",
        description: "i18n.collectors.ereferer.description",
        version: "0",
        website: "https://fr.ereferer.com/bo/invoice/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396327.jpg",
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
        loginUrl: "https://fr.ereferer.com/bo/invoice/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErefererCollector.CONFIG);
    }
}
