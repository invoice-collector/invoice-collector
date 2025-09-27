
import { SketchCollector } from '../../sketchCollector';

export class Smartpart4youCollector extends SketchCollector {

    static CONFIG = {
        id: "smartpart4you",
        name: "SMARTPART4YOU",
        description: "i18n.collectors.smartpart4you.description",
        version: "0",
        website: "https://www.smartpart4u.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801069.jpg",
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
        entryUrl: "https://www.smartpart4u.de/account/orders",
    }

    constructor() {
        super(Smartpart4youCollector.CONFIG);
    }
}
