
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BellCanadaMybellCollector extends SketchCollector {

    static CONFIG = {
        id: "bell_canada_mybell",
        name: "Bell Canada - MyBell",
        description: "i18n.collectors.bell_canada_mybell.description",
        version: "0",
        website: "https://mybell.bell.ca/MyBills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8582.jpg",
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
        loginUrl: "https://mybell.bell.ca/MyBills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BellCanadaMybellCollector.CONFIG);
    }
}
