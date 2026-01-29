
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TMobileUsaCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_usa",
        name: "T-Mobile USA",
        description: "i18n.collectors.t_mobile_usa.description",
        version: "0",
        website: "https://my.t-mobile.com/billing/summary.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6414.jpg",
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
        loginUrl: "https://my.t-mobile.com/billing/summary.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TMobileUsaCollector.CONFIG);
    }
}
