
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SeoClerkCollector extends SketchCollector {

    static CONFIG = {
        id: "seo_clerk",
        name: "SEO Clerk",
        description: "i18n.collectors.seo_clerk.description",
        version: "0",
        website: "https://www.seoclerks.com/balance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126633.jpg",
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
        loginUrl: "https://www.seoclerks.com/balance",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SeoClerkCollector.CONFIG);
    }
}
