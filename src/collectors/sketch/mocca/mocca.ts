
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MoccaCollector extends SketchCollector {

    static CONFIG = {
        id: "mocca",
        name: "Mocca",
        description: "i18n.collectors.mocca.description",
        version: "0",
        website: "https://www.mobile-customer-care.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510848.jpg",
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
        loginUrl: "https://www.mobile-customer-care.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MoccaCollector.CONFIG);
    }
}
