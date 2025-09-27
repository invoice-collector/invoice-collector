
import { SketchCollector } from '../../sketchCollector';

export class OpenaiCollector extends SketchCollector {

    static CONFIG = {
        id: "openai",
        name: "OpenAI",
        description: "i18n.collectors.openai.description",
        version: "0",
        website: "https://platform.openai.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771787.jpg",
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
        entryUrl: "https://platform.openai.com",
    }

    constructor() {
        super(OpenaiCollector.CONFIG);
    }
}
