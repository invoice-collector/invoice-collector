
import { SketchCollector } from '../../sketchCollector';

export class Rde24Collector extends SketchCollector {

    static CONFIG = {
        id: "rde24",
        name: "RDE24",
        description: "i18n.collectors.rde24.description",
        version: "0",
        website: "https://paiement.rde24.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/946416.jpg",
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
        entryUrl: "https://paiement.rde24.fr/",
    }

    constructor() {
        super(Rde24Collector.CONFIG);
    }
}
