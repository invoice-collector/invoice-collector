
import { SketchCollector } from '../../sketchCollector';

export class AzurtemCollector extends SketchCollector {

    static CONFIG = {
        id: "azurtem",
        name: "Azurtem",
        description: "i18n.collectors.azurtem.description",
        version: "0",
        website: "https://shop.azurtem.com/fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931047.jpg",
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
        entryUrl: "https://shop.azurtem.com/fr/connexion?back=my-account",
    }

    constructor() {
        super(AzurtemCollector.CONFIG);
    }
}
