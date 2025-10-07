
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TripadvisorAtCollector extends SketchCollector {

    static CONFIG = {
        id: "tripadvisor_at",
        name: "Tripadvisor.at",
        description: "i18n.collectors.tripadvisor_at.description",
        version: "0",
        website: "https://www.tripadvisor.at/BillingAndPayments?tab=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221025.jpg",
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
        entryUrl: "https://www.tripadvisor.at/BillingAndPayments?tab=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TripadvisorAtCollector.CONFIG);
    }
}
