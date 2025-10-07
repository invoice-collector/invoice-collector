
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AvangatePartnerResellerCollector extends SketchCollector {

    static CONFIG = {
        id: "avangate_partner_reseller",
        name: "Avangate - Partner/Reseller",
        description: "i18n.collectors.avangate_partner_reseller.description",
        version: "0",
        website: "https://www.avangate.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9674.jpg",
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
        entryUrl: "https://www.avangate.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvangatePartnerResellerCollector.CONFIG);
    }
}
