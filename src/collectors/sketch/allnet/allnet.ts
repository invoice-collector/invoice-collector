
import { SketchCollector } from '../../sketchCollector';

export class AllnetCollector extends SketchCollector {

    static CONFIG = {
        id: "allnet",
        name: "Allnet",
        description: "i18n.collectors.allnet.description",
        version: "0",
        website: "https://shop.allnet.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12014.jpg",
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
        entryUrl: "https://shop.allnet.de/account/orders",
    }

    constructor() {
        super(AllnetCollector.CONFIG);
    }
}
