
import { SketchCollector } from '../../sketchCollector';

export class HansefitBusinessAccountCollector extends SketchCollector {

    static CONFIG = {
        id: "hansefit_business_account",
        name: "Hansefit Business Account",
        description: "i18n.collectors.hansefit_business_account.description",
        version: "0",
        website: "https://customer.hansefit.de/de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669822.jpg",
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
        entryUrl: "https://customer.hansefit.de/de/invoices",
    }

    constructor() {
        super(HansefitBusinessAccountCollector.CONFIG);
    }
}
