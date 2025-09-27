
import { SketchCollector } from '../../sketchCollector';

export class BikerSStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "biker_s_store",
        name: "Biker\'s Store",
        description: "i18n.collectors.biker_s_store.description",
        version: "0",
        website: "https://www.bikers-store.fr/client.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115926.jpg",
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
        entryUrl: "https://www.bikers-store.fr/client.html",
    }

    constructor() {
        super(BikerSStoreCollector.CONFIG);
    }
}
