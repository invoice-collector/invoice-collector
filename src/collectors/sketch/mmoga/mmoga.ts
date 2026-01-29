
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MmogaCollector extends SketchCollector {

    static CONFIG = {
        id: "mmoga",
        name: "MMOGA",
        description: "i18n.collectors.mmoga.description",
        version: "0",
        website: "https://www.mmoga.com/account_history.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135936.jpg",
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
        loginUrl: "https://www.mmoga.com/account_history.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MmogaCollector.CONFIG);
    }
}
