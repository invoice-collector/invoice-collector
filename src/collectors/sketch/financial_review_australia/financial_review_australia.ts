
import { SketchCollector } from '../../sketchCollector';

export class FinancialReviewAustraliaCollector extends SketchCollector {

    static CONFIG = {
        id: "financial_review_australia",
        name: "Financial Review Australia",
        description: "i18n.collectors.financial_review_australia.description",
        version: "0",
        website: "https://myaccount.afr.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4561932.jpg",
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
        entryUrl: "https://myaccount.afr.com",
    }

    constructor() {
        super(FinancialReviewAustraliaCollector.CONFIG);
    }
}
