
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AffiliatlyAdvertisersCollector extends SketchCollector {

    static CONFIG = {
        id: "affiliatly_advertisers",
        name: "Affiliatly - Advertisers",
        description: "i18n.collectors.affiliatly_advertisers.description",
        version: "0",
        website: "https://www.affiliatly.com/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81810.jpg",
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
        loginUrl: "https://www.affiliatly.com/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AffiliatlyAdvertisersCollector.CONFIG);
    }
}
