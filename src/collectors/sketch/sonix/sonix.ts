
import { SketchCollector } from '../../sketchCollector';

export class SonixCollector extends SketchCollector {

    static CONFIG = {
        id: "sonix",
        name: "Sonix",
        description: "i18n.collectors.sonix.description",
        version: "0",
        website: "https://sonix.ai/accounts/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1120262.jpg",
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
        entryUrl: "https://sonix.ai/accounts/sign_in",
    }

    constructor() {
        super(SonixCollector.CONFIG);
    }
}
