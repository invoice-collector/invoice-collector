
import { SketchCollector } from '../../sketchCollector';

export class PublishersmarketplaceComCollector extends SketchCollector {

    static CONFIG = {
        id: "publishersmarketplace_com",
        name: "PublishersMarketplace.com",
        description: "i18n.collectors.publishersmarketplace_com.description",
        version: "0",
        website: "https://www.publishersmarketplace.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7989.jpg",
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
        entryUrl: "https://www.publishersmarketplace.com/",
    }

    constructor() {
        super(PublishersmarketplaceComCollector.CONFIG);
    }
}
