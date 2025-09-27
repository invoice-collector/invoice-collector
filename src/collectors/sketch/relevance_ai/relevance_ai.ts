
import { SketchCollector } from '../../sketchCollector';

export class RelevanceAiCollector extends SketchCollector {

    static CONFIG = {
        id: "relevance_ai",
        name: "relevance.ai",
        description: "i18n.collectors.relevance_ai.description",
        version: "0",
        website: "https://app.relevanceai.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095919.jpg",
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
        entryUrl: "https://app.relevanceai.com/",
    }

    constructor() {
        super(RelevanceAiCollector.CONFIG);
    }
}
