
import { SketchCollector } from '../../sketchCollector';

export class ScrapingHubCollector extends SketchCollector {

    static CONFIG = {
        id: "scraping_hub",
        name: "Scraping Hub",
        description: "i18n.collectors.scraping_hub.description",
        version: "0",
        website: "https://app.scrapinghub.com/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27092.jpg",
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
        entryUrl: "https://app.scrapinghub.com/account/login/",
    }

    constructor() {
        super(ScrapingHubCollector.CONFIG);
    }
}
