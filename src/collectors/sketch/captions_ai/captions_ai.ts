
import { SketchCollector } from '../../sketchCollector';

export class CaptionsAiCollector extends SketchCollector {

    static CONFIG = {
        id: "captions_ai",
        name: "Captions.Ai",
        description: "i18n.collectors.captions_ai.description",
        version: "0",
        website: "https://desktop.captions.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415147.jpg",
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
        entryUrl: "https://desktop.captions.ai/login",
    }

    constructor() {
        super(CaptionsAiCollector.CONFIG);
    }
}
