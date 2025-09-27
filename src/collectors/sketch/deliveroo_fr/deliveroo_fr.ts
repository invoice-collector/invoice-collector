
import { SketchCollector } from '../../sketchCollector';

export class DeliverooFrCollector extends SketchCollector {

    static CONFIG = {
        id: "deliveroo_fr",
        name: "Deliveroo.fr",
        description: "i18n.collectors.deliveroo_fr.description",
        version: "0",
        website: "https://deliveroo.fr/en/login?redirect=%2Fen%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118371.jpg",
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
        entryUrl: "https://deliveroo.fr/en/login?redirect=%2Fen%2F",
    }

    constructor() {
        super(DeliverooFrCollector.CONFIG);
    }
}
