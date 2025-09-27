
import { SketchCollector } from '../../sketchCollector';

export class FashionNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "fashion_network",
        name: "Fashion Network",
        description: "i18n.collectors.fashion_network.description",
        version: "0",
        website: "https://fr.fashionnetwork.com/societeCompte/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510849.jpg",
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
        entryUrl: "https://fr.fashionnetwork.com/societeCompte/orders/",
    }

    constructor() {
        super(FashionNetworkCollector.CONFIG);
    }
}
