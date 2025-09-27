
import { SketchCollector } from '../../sketchCollector';

export class NatifAiCollector extends SketchCollector {

    static CONFIG = {
        id: "natif_ai",
        name: "Natif.ai",
        description: "i18n.collectors.natif_ai.description",
        version: "0",
        website: "https://platform.natif.ai/api-hub/workflow/invoice_extraction/live-interface",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1968084.jpg",
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
        entryUrl: "https://platform.natif.ai/api-hub/workflow/invoice_extraction/live-interface",
    }

    constructor() {
        super(NatifAiCollector.CONFIG);
    }
}
