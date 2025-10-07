
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FriendlyCaptchaCollector extends SketchCollector {

    static CONFIG = {
        id: "friendly_captcha",
        name: "Friendly Captcha",
        description: "i18n.collectors.friendly_captcha.description",
        version: "0",
        website: "https://billing.stripe.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729798.jpg",
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
        entryUrl: "https://billing.stripe.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FriendlyCaptchaCollector.CONFIG);
    }
}
