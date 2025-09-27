
import { SketchCollector } from '../../sketchCollector';

export class GeorgiaPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "georgia_power",
        name: "Georgia Power",
        description: "i18n.collectors.georgia_power.description",
        version: "0",
        website: "https://customerservice2.southerncompany.com/Billing/BillHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240023.jpg",
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
        entryUrl: "https://customerservice2.southerncompany.com/Billing/BillHistory",
    }

    constructor() {
        super(GeorgiaPowerCollector.CONFIG);
    }
}
