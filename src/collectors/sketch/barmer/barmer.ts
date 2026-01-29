
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BarmerCollector extends SketchCollector {

    static CONFIG = {
        id: "barmer",
        name: "Barmer",
        description: "i18n.collectors.barmer.description",
        version: "0",
        website: "https://barmer-webmail.t-systems-service.com/Barmer/login/webmailLogin.xhtml?username=fibu@haus-im-warndt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1329957.jpg",
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
        loginUrl: "https://barmer-webmail.t-systems-service.com/Barmer/login/webmailLogin.xhtml?username=fibu@haus-im-warndt.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BarmerCollector.CONFIG);
    }
}
