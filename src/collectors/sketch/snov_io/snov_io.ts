
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnovIoCollector extends SketchCollector {

    static CONFIG = {
        id: "snov_io",
        name: "Snov.io",
        description: "i18n.collectors.snov_io.description",
        version: "0",
        website: "https://app.snov.io/login?lang=en&signup_source=landing&signup_page=snov.io&cta_type=button",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737482.jpg",
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
        loginUrl: "https://app.snov.io/login?lang=en&signup_source=landing&signup_page=snov.io&cta_type=button",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SnovIoCollector.CONFIG);
    }
}
