
import { SketchCollector } from '../../sketchCollector';

export class ZakekeComCollector extends SketchCollector {

    static CONFIG = {
        id: "zakeke_com",
        name: "zakeke.com",
        description: "i18n.collectors.zakeke_com.description",
        version: "0",
        website: "https://portal.zakeke.com/en-US/Admin/Seller/Billings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221827.jpg",
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
        entryUrl: "https://portal.zakeke.com/en-US/Admin/Seller/Billings",
    }

    constructor() {
        super(ZakekeComCollector.CONFIG);
    }
}
