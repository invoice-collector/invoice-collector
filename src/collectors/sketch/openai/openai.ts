import { SketchCollector } from '../../sketchCollector';

export class OpenaiCollector extends SketchCollector {

    static CONFIG = {
        id: "openai",
        name: "OpenAI",
        description: "i18n.collectors.openai.description",
        version: "0",
        website: "https://openai.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
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
        }
    }

    constructor() {
        super(Openai.CONFIG);
    }
}
