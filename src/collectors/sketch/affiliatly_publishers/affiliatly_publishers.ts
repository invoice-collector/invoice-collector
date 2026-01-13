
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AffiliatlyPublishersCollector extends SketchCollector {

    static CONFIG = {
        id: "affiliatly_publishers",
        name: "Affiliatly - Publishers",
        description: "i18n.collectors.affiliatly_publishers.description",
        version: "0",
        website: "https://www.affiliatly.com/login.html?affiliates=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91579.jpg",
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
        loginUrl: "https://www.affiliatly.com/login.html?affiliates=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AffiliatlyPublishersCollector.CONFIG);
    }
}
