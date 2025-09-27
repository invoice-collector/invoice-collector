
import { SketchCollector } from '../../sketchCollector';

export class InfographyCollector extends SketchCollector {

    static CONFIG = {
        id: "infography",
        name: "infography",
        description: "i18n.collectors.infography.description",
        version: "0",
        website: "https://infograpify.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/803035.jpg",
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
        entryUrl: "https://infograpify.com/account/login",
    }

    constructor() {
        super(InfographyCollector.CONFIG);
    }
}
