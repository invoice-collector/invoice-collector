
import { SketchCollector } from '../../sketchCollector';

export class FranceExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "france_express",
        name: "France Express",
        description: "i18n.collectors.france_express.description",
        version: "0",
        website: "https://espace-client.france-express.com/client/home#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534309.jpg",
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
        entryUrl: "https://espace-client.france-express.com/client/home#/",
    }

    constructor() {
        super(FranceExpressCollector.CONFIG);
    }
}
