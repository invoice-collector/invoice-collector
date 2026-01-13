
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YellowPagesAustraliaCollector extends SketchCollector {

    static CONFIG = {
        id: "yellow_pages_australia",
        name: "Yellow Pages Australia",
        description: "i18n.collectors.yellow_pages_australia.description",
        version: "0",
        website: "https://myaccount.sensis.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119127.jpg",
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
        loginUrl: "https://myaccount.sensis.com.au",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YellowPagesAustraliaCollector.CONFIG);
    }
}
