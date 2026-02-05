
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlldomainsHostingCollector extends SketchCollector {

    static CONFIG = {
        id: "alldomains_hosting",
        name: "ALLDomains.hosting",
        description: "i18n.collectors.alldomains_hosting.description",
        version: "0",
        website: "https://alldomains.hosting/kundencenter-login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78345.jpg",
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
        loginUrl: "https://alldomains.hosting/kundencenter-login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AlldomainsHostingCollector.CONFIG);
    }
}
