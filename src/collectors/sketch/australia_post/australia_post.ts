
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AustraliaPostCollector extends SketchCollector {

    static CONFIG = {
        id: "australia_post",
        name: "Australia Post",
        description: "i18n.collectors.australia_post.description",
        version: "0",
        website: "https://auspost.com.au/auth/login?caller=ACCOUNT_GLOBAL_HEADER&product=MYPOST_CONSUMER&channel=WEB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/395893.jpg",
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
        loginUrl: "https://auspost.com.au/auth/login?caller=ACCOUNT_GLOBAL_HEADER&product=MYPOST_CONSUMER&channel=WEB",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AustraliaPostCollector.CONFIG);
    }
}
