
import { SketchCollector } from '../../sketchCollector';

export class AdobeStockCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_stock",
        name: "Adobe Stock",
        description: "i18n.collectors.adobe_stock.description",
        version: "0",
        website: "https://stock.adobe.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44824.jpg",
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
        entryUrl: "https://stock.adobe.com",
    }

    constructor() {
        super(AdobeStockCollector.CONFIG);
    }
}
