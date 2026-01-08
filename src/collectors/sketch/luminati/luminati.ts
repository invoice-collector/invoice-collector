
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LuminatiCollector extends SketchCollector {

    static CONFIG = {
        id: "luminati",
        name: "Luminati",
        description: "i18n.collectors.luminati.description",
        version: "0",
        website: "https://luminati.io/cp/billing?cust=goalcommerce",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46401.jpg",
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
        loginUrl: "https://luminati.io/cp/billing?cust=goalcommerce",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LuminatiCollector.CONFIG);
    }
}
