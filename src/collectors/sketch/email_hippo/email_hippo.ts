
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EmailHippoCollector extends SketchCollector {

    static CONFIG = {
        id: "email_hippo",
        name: "Email Hippo",
        description: "i18n.collectors.email_hippo.description",
        version: "0",
        website: "https://portal.emailhippo.com/Settings/Cancel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15612.jpg",
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
        loginUrl: "https://portal.emailhippo.com/Settings/Cancel",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmailHippoCollector.CONFIG);
    }
}
