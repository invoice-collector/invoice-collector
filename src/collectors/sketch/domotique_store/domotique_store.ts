
import { SketchCollector } from '../../sketchCollector';

export class DomotiqueStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "domotique_store",
        name: "Domotique store",
        description: "i18n.collectors.domotique_store.description",
        version: "0",
        website: "https://www.domotique-store.fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118642.jpg",
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
        entryUrl: "https://www.domotique-store.fr/authentification?back=my-account",
    }

    constructor() {
        super(DomotiqueStoreCollector.CONFIG);
    }
}
