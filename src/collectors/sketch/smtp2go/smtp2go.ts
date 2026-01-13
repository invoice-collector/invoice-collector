
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Smtp2goCollector extends SketchCollector {

    static CONFIG = {
        id: "smtp2go",
        name: "SMTP2go",
        description: "i18n.collectors.smtp2go.description",
        version: "0",
        website: "https://app.smtp2go.com/dashboard/updatebilling/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/542734.jpg",
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
        loginUrl: "https://app.smtp2go.com/dashboard/updatebilling/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Smtp2goCollector.CONFIG);
    }
}
