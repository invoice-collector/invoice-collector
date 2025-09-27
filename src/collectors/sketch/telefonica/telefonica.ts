
import { SketchCollector } from '../../sketchCollector';

export class TelefonicaCollector extends SketchCollector {

    static CONFIG = {
        id: "telefonica",
        name: "Telefonica",
        description: "i18n.collectors.telefonica.description",
        version: "0",
        website: "http://www.telefonica.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58804.jpg",
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
        entryUrl: "http://www.telefonica.com",
    }

    constructor() {
        super(TelefonicaCollector.CONFIG);
    }
}
