
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ComptoirDuCommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "comptoir_du_commerce",
        name: "Comptoir du Commerce",
        description: "i18n.collectors.comptoir_du_commerce.description",
        version: "0",
        website: "http://www.comptoirducommerce.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117756.jpg",
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
        loginUrl: "http://www.comptoirducommerce.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ComptoirDuCommerceCollector.CONFIG);
    }
}
