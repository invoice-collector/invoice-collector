
import { SketchCollector } from '../../sketchCollector';

export class YoastCollector extends SketchCollector {

    static CONFIG = {
        id: "yoast",
        name: "yoast",
        description: "i18n.collectors.yoast.description",
        version: "0",
        website: "https://my.yoast.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396403.jpg",
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
        entryUrl: "https://my.yoast.com/account/orders",
    }

    constructor() {
        super(YoastCollector.CONFIG);
    }
}
