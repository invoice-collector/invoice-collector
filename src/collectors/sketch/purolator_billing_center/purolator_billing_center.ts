
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

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
        entryUrl: "https://billingcentre.purolator.com/billingcentre/obpp/portal/#/accountsummary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PurolatorBillingCenterCollector.CONFIG);
    }
}
