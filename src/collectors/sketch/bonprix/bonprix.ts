
import { SketchCollector } from '../../sketchCollector';

export class BonprixCollector extends SketchCollector {

    static CONFIG = {
        id: "bonprix",
        name: "Bonprix",
        description: "i18n.collectors.bonprix.description",
        version: "0",
        website: "https://www.bonprix.de/myaccount/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4469217.jpg",
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
        entryUrl: "https://www.bonprix.de/myaccount/invoices/",
    }

    constructor() {
        super(BonprixCollector.CONFIG);
    }
}
