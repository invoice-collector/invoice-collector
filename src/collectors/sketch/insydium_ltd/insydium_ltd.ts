
import { SketchCollector } from '../../sketchCollector';

export class InsydiumLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "insydium_ltd",
        name: "INSYDIUM LTD",
        description: "i18n.collectors.insydium_ltd.description",
        version: "0",
        website: "https://insydium.ltd/shop/index.php?route=account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45407.jpg",
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
        entryUrl: "https://insydium.ltd/shop/index.php?route=account/order",
    }

    constructor() {
        super(InsydiumLtdCollector.CONFIG);
    }
}
