
import { SketchCollector } from '../../sketchCollector';

export class PixverseCollector extends SketchCollector {

    static CONFIG = {
        id: "pixverse",
        name: "PixVerse",
        description: "i18n.collectors.pixverse.description",
        version: "0",
        website: "https://app.pixverse.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503791.jpg",
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
        entryUrl: "https://app.pixverse.ai/login",
    }

    constructor() {
        super(PixverseCollector.CONFIG);
    }
}
