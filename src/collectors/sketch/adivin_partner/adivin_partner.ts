
import { SketchCollector } from '../../sketchCollector';

export class AdivinPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "adivin_partner",
        name: "Adivin Partner",
        description: "i18n.collectors.adivin_partner.description",
        version: "0",
        website: "https://partner.adivin.com/index.php?idi=es#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419775.jpg",
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
        entryUrl: "https://partner.adivin.com/index.php?idi=es#",
    }

    constructor() {
        super(AdivinPartnerCollector.CONFIG);
    }
}
