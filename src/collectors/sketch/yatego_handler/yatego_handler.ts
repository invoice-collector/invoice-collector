
import { SketchCollector } from '../../sketchCollector';

export class YategoHandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "yatego_handler",
        name: "Yatego Handler",
        description: "i18n.collectors.yatego_handler.description",
        version: "0",
        website: "https://www1.yatego.com/admin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730016.jpg",
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
        entryUrl: "https://www1.yatego.com/admin/",
    }

    constructor() {
        super(YategoHandlerCollector.CONFIG);
    }
}
