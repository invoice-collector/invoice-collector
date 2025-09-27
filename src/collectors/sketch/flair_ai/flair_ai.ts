
import { SketchCollector } from '../../sketchCollector';

export class FlairAiCollector extends SketchCollector {

    static CONFIG = {
        id: "flair_ai",
        name: "Flair.ai",
        description: "i18n.collectors.flair_ai.description",
        version: "0",
        website: "https://app.flair.ai/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973403.jpg",
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
        entryUrl: "https://app.flair.ai/",
    }

    constructor() {
        super(FlairAiCollector.CONFIG);
    }
}
