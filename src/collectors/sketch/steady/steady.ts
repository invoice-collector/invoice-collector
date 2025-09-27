
import { SketchCollector } from '../../sketchCollector';

export class SteadyCollector extends SketchCollector {

    static CONFIG = {
        id: "steady",
        name: "Steady",
        description: "i18n.collectors.steady.description",
        version: "0",
        website: "https://steadyhq.com/de/backend/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46874.jpg",
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
        entryUrl: "https://steadyhq.com/de/backend/billing/invoices",
    }

    constructor() {
        super(SteadyCollector.CONFIG);
    }
}
