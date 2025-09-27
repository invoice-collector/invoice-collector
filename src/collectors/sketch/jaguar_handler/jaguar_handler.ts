
import { SketchCollector } from '../../sketchCollector';

export class JaguarHandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "jaguar_handler",
        name: "Jaguar Handler",
        description: "i18n.collectors.jaguar_handler.description",
        version: "0",
        website: "https://jaguarhaendler.jlr-portal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179066.jpg",
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
        entryUrl: "https://jaguarhaendler.jlr-portal.com/",
    }

    constructor() {
        super(JaguarHandlerCollector.CONFIG);
    }
}
