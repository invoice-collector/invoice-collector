
import { SketchCollector } from '../../sketchCollector';

export class CardCompleteControlCustomerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "card_complete_control_customer_portal",
        name: "Card Complete Control - Customer Portal",
        description: "i18n.collectors.card_complete_control_customer_portal.description",
        version: "0",
        website: "https://www.cardcomplete.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552916.jpg",
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
        entryUrl: "https://www.cardcomplete.com/",
    }

    constructor() {
        super(CardCompleteControlCustomerPortalCollector.CONFIG);
    }
}
