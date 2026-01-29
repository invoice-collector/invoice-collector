
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VertMerchantPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "vert_merchant_portal",
        name: "Vert Merchant Portal",
        description: "i18n.collectors.vert_merchant_portal.description",
        version: "0",
        website: "https://www.vertmember.com/corporate-statements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472511.jpg",
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
        loginUrl: "https://www.vertmember.com/corporate-statements/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VertMerchantPortalCollector.CONFIG);
    }
}
