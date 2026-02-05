
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MailtrackCollector extends SketchCollector {

    static CONFIG = {
        id: "mailtrack",
        name: "mailtrack",
        description: "i18n.collectors.mailtrack.description",
        version: "0",
        website: "http://www.mailtrack.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11616.jpg",
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
        loginUrl: "http://www.mailtrack.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MailtrackCollector.CONFIG);
    }
}
