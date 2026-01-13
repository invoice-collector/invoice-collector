
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JivochatCollector extends SketchCollector {

    static CONFIG = {
        id: "jivochat",
        name: "JivoChat",
        description: "i18n.collectors.jivochat.description",
        version: "0",
        website: "https://app.jivosite.com/login?dh=jivochat.com%2F&ewv=1&form_url=index&lang=en&pricelist_id=2104&utm_campaign=direct&utm_source=direct",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741959.jpg",
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
        loginUrl: "https://app.jivosite.com/login?dh=jivochat.com%2F&ewv=1&form_url=index&lang=en&pricelist_id=2104&utm_campaign=direct&utm_source=direct",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JivochatCollector.CONFIG);
    }
}
