
import { SketchCollector } from '../../sketchCollector';

export class ActivecampaignResellerCollector extends SketchCollector {

    static CONFIG = {
        id: "activecampaign_reseller",
        name: "ActiveCampaign - Reseller",
        description: "i18n.collectors.activecampaign_reseller.description",
        version: "0",
        website: "https://www.activecampaign.com/partner/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124926.jpg",
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
        entryUrl: "https://www.activecampaign.com/partner/invoices.php",
    }

    constructor() {
        super(ActivecampaignResellerCollector.CONFIG);
    }
}
