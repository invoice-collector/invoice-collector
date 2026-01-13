
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LidlDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lidl_de",
        name: "lidl.de",
        description: "i18n.collectors.lidl_de.description",
        version: "0",
        website: "https://www.lidl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409817.jpg",
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
        loginUrl: "https://www.lidl.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LidlDeCollector.CONFIG);
    }
}
