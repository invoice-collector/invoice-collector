
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KeliwebCollector extends SketchCollector {

    static CONFIG = {
        id: "keliweb",
        name: "keliweb",
        description: "i18n.collectors.keliweb.description",
        version: "0",
        website: "https://www.keliweb.it/billing/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9439.jpg",
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
        loginUrl: "https://www.keliweb.it/billing/clientarea.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KeliwebCollector.CONFIG);
    }
}
