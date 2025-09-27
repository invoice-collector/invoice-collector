
import { SketchCollector } from '../../sketchCollector';

export class YayCollector extends SketchCollector {

    static CONFIG = {
        id: "yay",
        name: "yay",
        description: "i18n.collectors.yay.description",
        version: "0",
        website: "https://www.yay.com/account/member/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/190168.jpg",
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
        entryUrl: "https://www.yay.com/account/member/invoices/",
    }

    constructor() {
        super(YayCollector.CONFIG);
    }
}
