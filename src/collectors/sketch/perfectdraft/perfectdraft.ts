
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PerfectdraftCollector extends SketchCollector {

    static CONFIG = {
        id: "perfectdraft",
        name: "Perfectdraft",
        description: "i18n.collectors.perfectdraft.description",
        version: "0",
        website: "https://www.perfectdraft.com/de-de/sales/order/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200607.jpg",
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
        loginUrl: "https://www.perfectdraft.com/de-de/sales/order/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PerfectdraftCollector.CONFIG);
    }
}
