
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SeolyzeCollector extends SketchCollector {

    static CONFIG = {
        id: "seolyze",
        name: "SEOlyze",
        description: "i18n.collectors.seolyze.description",
        version: "0",
        website: "https://www.seolyze.com/UserCenter/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23199.jpg",
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
        loginUrl: "https://www.seolyze.com/UserCenter/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SeolyzeCollector.CONFIG);
    }
}
