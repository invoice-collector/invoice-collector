
import { SketchCollector } from '../../sketchCollector';

export class MerchByAmazonCollector extends SketchCollector {

    static CONFIG = {
        id: "merch_by_amazon",
        name: "Merch by Amazon",
        description: "i18n.collectors.merch_by_amazon.description",
        version: "0",
        website: "https://merch.amazon.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777406.jpg",
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
        entryUrl: "https://merch.amazon.com/",
    }

    constructor() {
        super(MerchByAmazonCollector.CONFIG);
    }
}
