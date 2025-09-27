
import { SketchCollector } from '../../sketchCollector';

export class DropcatchCollector extends SketchCollector {

    static CONFIG = {
        id: "dropcatch",
        name: "DropCatch",
        description: "i18n.collectors.dropcatch.description",
        version: "0",
        website: "https://www.dropcatch.com/MyAccount/MyOrders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116250.jpg",
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
        entryUrl: "https://www.dropcatch.com/MyAccount/MyOrders",
    }

    constructor() {
        super(DropcatchCollector.CONFIG);
    }
}
