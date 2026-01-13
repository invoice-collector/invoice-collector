
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PerdooCollector extends SketchCollector {

    static CONFIG = {
        id: "perdoo",
        name: "Perdoo",
        description: "i18n.collectors.perdoo.description",
        version: "0",
        website: "https://web.perdoo.com/#/settings/company/general/info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1278809.jpg",
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
        loginUrl: "https://web.perdoo.com/#/settings/company/general/info",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PerdooCollector.CONFIG);
    }
}
