
import { SketchCollector } from '../../sketchCollector';

export class PrivyCollector extends SketchCollector {

    static CONFIG = {
        id: "privy",
        name: "Privy",
        description: "i18n.collectors.privy.description",
        version: "0",
        website: "https://dashboard.privy.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/530556.jpg",
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
        entryUrl: "https://dashboard.privy.com/settings/invoices",
    }

    constructor() {
        super(PrivyCollector.CONFIG);
    }
}
