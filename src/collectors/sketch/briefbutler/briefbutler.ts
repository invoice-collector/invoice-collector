
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BriefbutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "briefbutler",
        name: "Briefbutler",
        description: "i18n.collectors.briefbutler.description",
        version: "0",
        website: "https://www.briefbutler.at/index.php?page=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221824.jpg",
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
        loginUrl: "https://www.briefbutler.at/index.php?page=login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BriefbutlerCollector.CONFIG);
    }
}
