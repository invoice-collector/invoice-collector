
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZaraCollector extends SketchCollector {

    static CONFIG = {
        id: "zara",
        name: "Zara",
        description: "i18n.collectors.zara.description",
        version: "0",
        website: "https://www.zara.com/fr/fr/logon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123815.jpg",
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
        loginUrl: "https://www.zara.com/fr/fr/logon",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ZaraCollector.CONFIG);
    }
}
