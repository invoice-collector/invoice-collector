
import { SketchCollector } from '../../sketchCollector';

export class GreaterSudburyUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "greater_sudbury_utilities",
        name: "Greater Sudbury Utilities",
        description: "i18n.collectors.greater_sudbury_utilities.description",
        version: "0",
        website: "https://myaccount.gsuinc.ca/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9401.jpg",
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
        entryUrl: "https://myaccount.gsuinc.ca/app/login.jsp",
    }

    constructor() {
        super(GreaterSudburyUtilitiesCollector.CONFIG);
    }
}
