
import { SketchCollector } from '../../sketchCollector';

export class GgmGatroInternationalCollector extends SketchCollector {

    static CONFIG = {
        id: "ggm_gatro_international",
        name: "ggm gatro international",
        description: "i18n.collectors.ggm_gatro_international.description",
        version: "0",
        website: "https://www.ggmgastro.com/de-de-eur/my-account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1470054.jpg",
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
        entryUrl: "https://www.ggmgastro.com/de-de-eur/my-account/orders",
    }

    constructor() {
        super(GgmGatroInternationalCollector.CONFIG);
    }
}
