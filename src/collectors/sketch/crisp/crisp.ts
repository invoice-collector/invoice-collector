
import { SketchCollector } from '../../sketchCollector';

export class CrispCollector extends SketchCollector {

    static CONFIG = {
        id: "crisp",
        name: "Crisp",
        description: "i18n.collectors.crisp.description",
        version: "0",
        website: "https://app.crisp.chat/settings/billing/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119879.jpg",
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
        entryUrl: "https://app.crisp.chat/settings/billing/invoices/",
    }

    constructor() {
        super(CrispCollector.CONFIG);
    }
}
