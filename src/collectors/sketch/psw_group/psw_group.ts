
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PswGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "psw_group",
        name: "PSW Group",
        description: "i18n.collectors.psw_group.description",
        version: "0",
        website: "http://www.psw.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7903.jpg",
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
        loginUrl: "http://www.psw.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PswGroupCollector.CONFIG);
    }
}
