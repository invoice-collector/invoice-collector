
import { SketchCollector } from '../../sketchCollector';

export class BrunnenOnlineshopCollector extends SketchCollector {

    static CONFIG = {
        id: "brunnen_onlineshop",
        name: "Brunnen Onlineshop",
        description: "i18n.collectors.brunnen_onlineshop.description",
        version: "0",
        website: "https://shop.brunnen.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180703.jpg",
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
        entryUrl: "https://shop.brunnen.de/",
    }

    constructor() {
        super(BrunnenOnlineshopCollector.CONFIG);
    }
}
