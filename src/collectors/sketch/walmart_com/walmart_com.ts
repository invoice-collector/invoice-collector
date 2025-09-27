
import { SketchCollector } from '../../sketchCollector';

export class WalmartComCollector extends SketchCollector {

    static CONFIG = {
        id: "walmart_com",
        name: "Walmart.com",
        description: "i18n.collectors.walmart_com.description",
        version: "0",
        website: "https://www.walmart.com/account/login?tid=0&returnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8554.jpg",
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
        entryUrl: "https://www.walmart.com/account/login?tid=0&returnUrl=%2F",
    }

    constructor() {
        super(WalmartComCollector.CONFIG);
    }
}
