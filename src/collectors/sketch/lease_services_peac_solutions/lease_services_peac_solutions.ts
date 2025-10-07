
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeaseServicesPeacSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "lease_services_peac_solutions",
        name: "Lease Services -  PEAC Solutions",
        description: "i18n.collectors.lease_services_peac_solutions.description",
        version: "0",
        website: "https://marlinbillpay.osgview.com/Secure/StatementHistory.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798732.jpg",
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
        entryUrl: "https://marlinbillpay.osgview.com/Secure/StatementHistory.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeaseServicesPeacSolutionsCollector.CONFIG);
    }
}
