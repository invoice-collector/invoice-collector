
import { SketchCollector } from '../../sketchCollector';

export class PharmacieMongeCollector extends SketchCollector {

    static CONFIG = {
        id: "pharmacie_monge",
        name: "Pharmacie Monge",
        description: "i18n.collectors.pharmacie_monge.description",
        version: "0",
        website: "https://pharmacie-monge.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122630.jpg",
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
        entryUrl: "https://pharmacie-monge.fr/",
    }

    constructor() {
        super(PharmacieMongeCollector.CONFIG);
    }
}
