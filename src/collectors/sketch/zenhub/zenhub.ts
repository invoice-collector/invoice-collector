
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZenhubCollector extends SketchCollector {

    static CONFIG = {
        id: "zenhub",
        name: "Zenhub",
        description: "i18n.collectors.zenhub.description",
        version: "0",
        website: "https://app.zenhub.com/dashboard/o/ridecapital/account-details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534358.jpg",
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
        loginUrl: "https://app.zenhub.com/dashboard/o/ridecapital/account-details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZenhubCollector.CONFIG);
    }
}
