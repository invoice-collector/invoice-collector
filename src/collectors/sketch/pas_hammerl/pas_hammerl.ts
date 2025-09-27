
import { SketchCollector } from '../../sketchCollector';

export class PasHammerlCollector extends SketchCollector {

    static CONFIG = {
        id: "pas_hammerl",
        name: "pas-hammerl",
        description: "i18n.collectors.pas_hammerl.description",
        version: "0",
        website: "https://login.pas-hammerl.de/kundencenter/postbox/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158368.jpg",
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
        entryUrl: "https://login.pas-hammerl.de/kundencenter/postbox/list",
    }

    constructor() {
        super(PasHammerlCollector.CONFIG);
    }
}
