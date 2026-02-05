
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeslaBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "tesla_business",
        name: "Tesla Business",
        description: "i18n.collectors.tesla_business.description",
        version: "0",
        website: "https://www.tesla.com/teslaaccount/business",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1426102.jpg",
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
        loginUrl: "https://www.tesla.com/teslaaccount/business",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeslaBusinessCollector.CONFIG);
    }
}
