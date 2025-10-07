
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StellantisFinancialServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "stellantis_financial_services",
        name: "Stellantis Financial Services",
        description: "i18n.collectors.stellantis_financial_services.description",
        version: "0",
        website: "https://myprofile.stellantis-financial-services.be/nl/web/cuspor/invoices?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694548.jpg",
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
        entryUrl: "https://myprofile.stellantis-financial-services.be/nl/web/cuspor/invoices?",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StellantisFinancialServicesCollector.CONFIG);
    }
}
