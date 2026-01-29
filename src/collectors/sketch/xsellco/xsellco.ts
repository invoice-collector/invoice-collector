
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class XsellcoCollector extends SketchCollector {

    static CONFIG = {
        id: "xsellco",
        name: "XSellco",
        description: "i18n.collectors.xsellco.description",
        version: "0",
        website: "https://dashboard.xsellco.com/login?_ga=2.219650970.2018828526.1508765813-806878810.1508765813",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19934.jpg",
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
        loginUrl: "https://dashboard.xsellco.com/login?_ga=2.219650970.2018828526.1508765813-806878810.1508765813",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(XsellcoCollector.CONFIG);
    }
}
