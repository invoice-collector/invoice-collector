
import { SketchCollector } from '../../sketchCollector';

export class OnbuyComCollector extends SketchCollector {

    static CONFIG = {
        id: "onbuy_com",
        name: "Onbuy.com",
        description: "i18n.collectors.onbuy_com.description",
        version: "0",
        website: "https://seller.onbuy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534503.jpg",
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
        entryUrl: "https://seller.onbuy.com/",
    }

    constructor() {
        super(OnbuyComCollector.CONFIG);
    }
}
