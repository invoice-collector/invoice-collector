
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KontentWebmailCollector extends SketchCollector {

    static CONFIG = {
        id: "kontent_webmail",
        name: "Kontent Webmail",
        description: "i18n.collectors.kontent_webmail.description",
        version: "0",
        website: "https://webmail.kontent.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202970.jpg",
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
        loginUrl: "https://webmail.kontent.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KontentWebmailCollector.CONFIG);
    }
}
