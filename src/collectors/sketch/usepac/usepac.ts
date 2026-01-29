
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UsepacCollector extends SketchCollector {

    static CONFIG = {
        id: "usepac",
        name: "UsePac",
        description: "i18n.collectors.usepac.description",
        version: "0",
        website: "https://www.usepac.de/login.html?action=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77690.jpg",
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
        loginUrl: "https://www.usepac.de/login.html?action=history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UsepacCollector.CONFIG);
    }
}
