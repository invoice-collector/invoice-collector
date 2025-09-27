
import { SketchCollector } from '../../sketchCollector';

export class PhiladelphiaInsuranceCompaniesCollector extends SketchCollector {

    static CONFIG = {
        id: "philadelphia_insurance_companies",
        name: "Philadelphia Insurance Companies",
        description: "i18n.collectors.philadelphia_insurance_companies.description",
        version: "0",
        website: "https://www.phly.com/myphly/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70086.jpg",
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
        entryUrl: "https://www.phly.com/myphly/login.aspx",
    }

    constructor() {
        super(PhiladelphiaInsuranceCompaniesCollector.CONFIG);
    }
}
