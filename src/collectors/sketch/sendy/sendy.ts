
import { SketchCollector } from '../../sketchCollector';

export class SendyCollector extends SketchCollector {

    static CONFIG = {
        id: "sendy",
        name: "Sendy",
        description: "i18n.collectors.sendy.description",
        version: "0",
        website: "http://www.sendy.co",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7902.jpg",
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
        entryUrl: "http://www.sendy.co",
    }

    constructor() {
        super(SendyCollector.CONFIG);
    }
}
