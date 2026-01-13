
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CofaceCustomerPortalCofanetCollector extends SketchCollector {

    static CONFIG = {
        id: "coface_customer_portal_cofanet",
        name: "Coface (Customer Portal - CofaNet)",
        description: "i18n.collectors.coface_customer_portal_cofanet.description",
        version: "0",
        website: "https://cofanet.coface.com/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4502935.jpg",
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
        loginUrl: "https://cofanet.coface.com/fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CofaceCustomerPortalCofanetCollector.CONFIG);
    }
}
