
import { SketchCollector } from '../../sketchCollector';

export class DynamicOooCollector extends SketchCollector {

    static CONFIG = {
        id: "dynamic_ooo",
        name: "Dynamic.ooo",
        description: "i18n.collectors.dynamic_ooo.description",
        version: "0",
        website: "https://shop.dynamic.ooo/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1895677.jpg",
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
        entryUrl: "https://shop.dynamic.ooo/my-account/orders/",
    }

    constructor() {
        super(DynamicOooCollector.CONFIG);
    }
}
