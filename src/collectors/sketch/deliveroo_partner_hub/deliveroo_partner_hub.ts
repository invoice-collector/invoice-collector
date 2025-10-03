
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeliverooPartnerHubCollector extends SketchCollector {

    static CONFIG = {
        id: "deliveroo_partner_hub",
        name: "Deliveroo Partner-Hub",
        description: "i18n.collectors.deliveroo_partner_hub.description",
        version: "0",
        website: "https://partner-hub.deliveroo.com/reports/invoices?orgId=209155",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513763.jpg",
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
        entryUrl: "https://partner-hub.deliveroo.com/reports/invoices?orgId=209155",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeliverooPartnerHubCollector.CONFIG);
    }
}
