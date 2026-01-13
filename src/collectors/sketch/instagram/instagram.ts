
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InstagramCollector extends SketchCollector {

    static CONFIG = {
        id: "instagram",
        name: "Instagram",
        description: "i18n.collectors.instagram.description",
        version: "0",
        website: "https://www.instagram.com/accounts/subscriptions/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2771562.jpg",
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
        loginUrl: "https://www.instagram.com/accounts/subscriptions/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InstagramCollector.CONFIG);
    }
}
