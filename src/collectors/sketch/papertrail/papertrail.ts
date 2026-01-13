
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PapertrailCollector extends SketchCollector {

    static CONFIG = {
        id: "papertrail",
        name: "Papertrail",
        description: "i18n.collectors.papertrail.description",
        version: "0",
        website: "https://papertrailapp.com/account/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8999.jpg",
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
        loginUrl: "https://papertrailapp.com/account/purchases",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PapertrailCollector.CONFIG);
    }
}
