
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CompaniesHouseCollector extends SketchCollector {

    static CONFIG = {
        id: "companies_house",
        name: "Companies House",
        description: "i18n.collectors.companies_house.description",
        version: "0",
        website: "https://ebilling.companieshouse.gov.uk/customer-portal/signin.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/750169.jpg",
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
        entryUrl: "https://ebilling.companieshouse.gov.uk/customer-portal/signin.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CompaniesHouseCollector.CONFIG);
    }
}
