
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ExpediaTaapCollector extends SketchCollector {

    static CONFIG = {
        id: "expedia_taap",
        name: "Expedia Taap",
        description: "i18n.collectors.expedia_taap.description",
        version: "0",
        website: "https://www.expediataap.de/trips",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564517.jpg",
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
        loginUrl: "https://www.expediataap.de/trips",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ExpediaTaapCollector.CONFIG);
    }
}
