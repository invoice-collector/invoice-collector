
import { SketchCollector } from '../../sketchCollector';

export class OctopiaMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "octopia_marketplace",
        name: "Octopia - Marketplace",
        description: "i18n.collectors.octopia_marketplace.description",
        version: "0",
        website: "https://seller.octopia.com/finance/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4189138.jpg",
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
        entryUrl: "https://seller.octopia.com/finance/Invoices",
    }

    constructor() {
        super(OctopiaMarketplaceCollector.CONFIG);
    }
}
