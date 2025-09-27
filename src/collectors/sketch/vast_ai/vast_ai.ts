
import { SketchCollector } from '../../sketchCollector';

export class VastAiCollector extends SketchCollector {

    static CONFIG = {
        id: "vast_ai",
        name: "Vast.ai",
        description: "i18n.collectors.vast_ai.description",
        version: "0",
        website: "https://cloud.vast.ai/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/798244.jpg",
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
        entryUrl: "https://cloud.vast.ai/billing/",
    }

    constructor() {
        super(VastAiCollector.CONFIG);
    }
}
