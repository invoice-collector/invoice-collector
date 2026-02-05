
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PurolatorBillingCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "purolator_billing_center",
        name: "Purolator (Billing Center)",
        description: "i18n.collectors.purolator_billing_center.description",
        version: "0",
        website: "https://billingcentre.purolator.com/billingcentre/obpp/portal/#/accountsummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/583263.jpg",
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
        loginUrl: "https://billingcentre.purolator.com/billingcentre/obpp/portal/#/accountsummary",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PurolatorBillingCenterCollector.CONFIG);
    }
}
