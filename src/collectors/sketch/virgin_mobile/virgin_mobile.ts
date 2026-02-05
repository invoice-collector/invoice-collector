
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VirginMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "virgin_mobile",
        name: "Virgin mobile",
        description: "i18n.collectors.virgin_mobile.description",
        version: "0",
        website: "https://www.virgin.com/virgingroup/company/virgin-mobile-france",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136655.jpg",
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
        loginUrl: "https://www.virgin.com/virgingroup/company/virgin-mobile-france",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VirginMobileCollector.CONFIG);
    }
}
