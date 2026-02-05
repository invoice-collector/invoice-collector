
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvangateSoftwareBuyerCollector extends SketchCollector {

    static CONFIG = {
        id: "avangate_software_buyer",
        name: "Avangate - Software Buyer",
        description: "i18n.collectors.avangate_software_buyer.description",
        version: "0",
        website: "https://secure.avangate.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3640.jpg",
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
        loginUrl: "https://secure.avangate.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvangateSoftwareBuyerCollector.CONFIG);
    }
}
