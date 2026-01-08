
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SummitControlCollector extends SketchCollector {

    static CONFIG = {
        id: "summit_control",
        name: "SUMMIT CONTROL",
        description: "i18n.collectors.summit_control.description",
        version: "0",
        website: "https://summitcontrol.com/admin/account-info.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988691.jpg",
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
        loginUrl: "https://summitcontrol.com/admin/account-info.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SummitControlCollector.CONFIG);
    }
}
