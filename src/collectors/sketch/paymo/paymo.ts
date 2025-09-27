
import { SketchCollector } from '../../sketchCollector';

export class PaymoCollector extends SketchCollector {

    static CONFIG = {
        id: "paymo",
        name: "paymo",
        description: "i18n.collectors.paymo.description",
        version: "0",
        website: "https://app.paymoapp.com/#Paymo.module.subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8064.jpg",
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
        entryUrl: "https://app.paymoapp.com/#Paymo.module.subscription/",
    }

    constructor() {
        super(PaymoCollector.CONFIG);
    }
}
