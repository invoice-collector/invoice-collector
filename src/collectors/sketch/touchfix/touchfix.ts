
import { SketchCollector } from '../../sketchCollector';

export class TouchfixCollector extends SketchCollector {

    static CONFIG = {
        id: "touchfix",
        name: "touchfix",
        description: "i18n.collectors.touchfix.description",
        version: "0",
        website: "https://www.touchfix.shop/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1800987.jpg",
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
        entryUrl: "https://www.touchfix.shop/my/invoices",
    }

    constructor() {
        super(TouchfixCollector.CONFIG);
    }
}
