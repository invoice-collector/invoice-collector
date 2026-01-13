import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FacebookCollector extends SketchCollector {

    static CONFIG = {
        id: "facebook",
        name: "Facebook",
        description: "i18n.collectors.facebook.description",
        version: "0",
        website: "https://facebook.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
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
        loginUrl: "https://facebook.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FacebookCollector.CONFIG);
    }
}
