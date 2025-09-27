
import { SketchCollector } from '../../sketchCollector';

export class ScrapingbeeCollector extends SketchCollector {

    static CONFIG = {
        id: "scrapingbee",
        name: "Scrapingbee",
        description: "i18n.collectors.scrapingbee.description",
        version: "0",
        website: "https://app.scrapingbee.com/account/manage/info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236271.jpg",
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
        entryUrl: "https://app.scrapingbee.com/account/manage/info",
    }

    constructor() {
        super(ScrapingbeeCollector.CONFIG);
    }
}
