
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WeeblrComCollector extends SketchCollector {

    static CONFIG = {
        id: "weeblr_com",
        name: "weeblr.com",
        description: "i18n.collectors.weeblr_com.description",
        version: "0",
        website: "https://weeblr.com/dashboard?layout=subscription&subscription_key=8O56WJCO5F94",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236103.jpg",
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
        loginUrl: "https://weeblr.com/dashboard?layout=subscription&subscription_key=8O56WJCO5F94",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WeeblrComCollector.CONFIG);
    }
}
