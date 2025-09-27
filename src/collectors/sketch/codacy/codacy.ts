
import { SketchCollector } from '../../sketchCollector';

export class CodacyCollector extends SketchCollector {

    static CONFIG = {
        id: "codacy",
        name: "Codacy",
        description: "i18n.collectors.codacy.description",
        version: "0",
        website: "https://app.codacy.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33624.jpg",
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
        entryUrl: "https://app.codacy.com/login",
    }

    constructor() {
        super(CodacyCollector.CONFIG);
    }
}
