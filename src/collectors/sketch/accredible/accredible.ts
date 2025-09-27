
import { SketchCollector } from '../../sketchCollector';

export class AccredibleCollector extends SketchCollector {

    static CONFIG = {
        id: "accredible",
        name: "Accredible",
        description: "i18n.collectors.accredible.description",
        version: "0",
        website: "https://dashboard.accredible.com/issuer/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022435.jpg",
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
        entryUrl: "https://dashboard.accredible.com/issuer/dashboard/invoices",
    }

    constructor() {
        super(AccredibleCollector.CONFIG);
    }
}
