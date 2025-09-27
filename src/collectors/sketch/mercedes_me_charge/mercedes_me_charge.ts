
import { SketchCollector } from '../../sketchCollector';

export class MercedesMeChargeCollector extends SketchCollector {

    static CONFIG = {
        id: "mercedes_me_charge",
        name: "Mercedes Me Charge",
        description: "i18n.collectors.mercedes_me_charge.description",
        version: "0",
        website: "https://eu.charge.mercedes.me/web/daimler-de/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524610.jpg",
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
        entryUrl: "https://eu.charge.mercedes.me/web/daimler-de/dashboard/invoices",
    }

    constructor() {
        super(MercedesMeChargeCollector.CONFIG);
    }
}
