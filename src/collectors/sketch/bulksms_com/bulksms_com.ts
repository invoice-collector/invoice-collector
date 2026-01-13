
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BulksmsComCollector extends SketchCollector {

    static CONFIG = {
        id: "bulksms_com",
        name: "BulkSMS.com",
        description: "i18n.collectors.bulksms_com.description",
        version: "0",
        website: "https://www2.bulksms.com/login.mc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48725.jpg",
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
        loginUrl: "https://www2.bulksms.com/login.mc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BulksmsComCollector.CONFIG);
    }
}
