
import { SketchCollector } from '../../sketchCollector';

export class ChunkrAiCollector extends SketchCollector {

    static CONFIG = {
        id: "chunkr_ai",
        name: "Chunkr AI",
        description: "i18n.collectors.chunkr_ai.description",
        version: "0",
        website: "https://chunkr.ai/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4532781.jpg",
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
        entryUrl: "https://chunkr.ai/",
    }

    constructor() {
        super(ChunkrAiCollector.CONFIG);
    }
}
