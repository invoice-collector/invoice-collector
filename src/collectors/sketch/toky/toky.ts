
import { SketchCollector } from '../../sketchCollector';

export class TokyCollector extends SketchCollector {

    static CONFIG = {
        id: "toky",
        name: "Toky",
        description: "i18n.collectors.toky.description",
        version: "0",
        website: "https://app.toky.co/business/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121222.jpg",
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
        entryUrl: "https://app.toky.co/business/receipts",
    }

    constructor() {
        super(TokyCollector.CONFIG);
    }
}
