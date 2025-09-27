
import { SketchCollector } from '../../sketchCollector';

export class AralCardKundencenterCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_card_kundencenter",
        name: "Aral Card Kundencenter",
        description: "i18n.collectors.aral_card_kundencenter.description",
        version: "0",
        website: "https://www.bpplus.com/pages/aral/invoice.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20626.jpg",
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
        entryUrl: "https://www.bpplus.com/pages/aral/invoice.asp",
    }

    constructor() {
        super(AralCardKundencenterCollector.CONFIG);
    }
}
