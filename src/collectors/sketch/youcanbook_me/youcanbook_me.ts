
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YoucanbookMeCollector extends SketchCollector {

    static CONFIG = {
        id: "youcanbook_me",
        name: "youcanbook.me",
        description: "i18n.collectors.youcanbook_me.description",
        version: "0",
        website: "https://app.youcanbook.me/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7378.jpg",
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
        loginUrl: "https://app.youcanbook.me/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YoucanbookMeCollector.CONFIG);
    }
}
