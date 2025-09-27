
import { SketchCollector } from '../../sketchCollector';

export class ImpactCollector extends SketchCollector {

    static CONFIG = {
        id: "impact",
        name: "impact",
        description: "i18n.collectors.impact.description",
        version: "0",
        website: "https://app.impact.com/secure/mediapartner/PUB_FINANCE_Report/r3/report/viewReport.report?handle=mp_invoice_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61843.jpg",
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
        entryUrl: "https://app.impact.com/secure/mediapartner/PUB_FINANCE_Report/r3/report/viewReport.report?handle=mp_invoice_history",
    }

    constructor() {
        super(ImpactCollector.CONFIG);
    }
}
