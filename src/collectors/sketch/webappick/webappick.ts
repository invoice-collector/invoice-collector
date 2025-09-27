
import { SketchCollector } from '../../sketchCollector';

export class WebappickCollector extends SketchCollector {

    static CONFIG = {
        id: "webappick",
        name: "Webappick",
        description: "i18n.collectors.webappick.description",
        version: "0",
        website: "https://webappick.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846850.jpg",
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
        entryUrl: "https://webappick.com/my-account/orders/",
    }

    constructor() {
        super(WebappickCollector.CONFIG);
    }
}
