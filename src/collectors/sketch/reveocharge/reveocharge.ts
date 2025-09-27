
import { SketchCollector } from '../../sketchCollector';

export class ReveochargeCollector extends SketchCollector {

    static CONFIG = {
        id: "reveocharge",
        name: "ReveoCharge",
        description: "i18n.collectors.reveocharge.description",
        version: "0",
        website: "https://app.reveocharge.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479869.jpg",
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
        entryUrl: "https://app.reveocharge.com/invoices",
    }

    constructor() {
        super(ReveochargeCollector.CONFIG);
    }
}
