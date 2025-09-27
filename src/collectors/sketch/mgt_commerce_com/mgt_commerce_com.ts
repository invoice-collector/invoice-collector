
import { SketchCollector } from '../../sketchCollector';

export class MgtCommerceComCollector extends SketchCollector {

    static CONFIG = {
        id: "mgt_commerce_com",
        name: "mgt-commerce.com",
        description: "i18n.collectors.mgt_commerce_com.description",
        version: "0",
        website: "https://www.mgt-commerce.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1182962.jpg",
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
        entryUrl: "https://www.mgt-commerce.com/customer/account/login/",
    }

    constructor() {
        super(MgtCommerceComCollector.CONFIG);
    }
}
