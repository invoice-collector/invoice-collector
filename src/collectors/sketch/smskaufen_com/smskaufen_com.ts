
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmskaufenComCollector extends SketchCollector {

    static CONFIG = {
        id: "smskaufen_com",
        name: "smskaufen.com",
        description: "i18n.collectors.smskaufen_com.description",
        version: "0",
        website: "https://www.smskaufen.com/sms/index.php?seite=konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25489.jpg",
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
        loginUrl: "https://www.smskaufen.com/sms/index.php?seite=konto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmskaufenComCollector.CONFIG);
    }
}
