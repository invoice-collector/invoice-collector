
import { SketchCollector } from '../../sketchCollector';

export class GardnersCollector extends SketchCollector {

    static CONFIG = {
        id: "gardners",
        name: "Gardners",
        description: "i18n.collectors.gardners.description",
        version: "0",
        website: "https://www.gardners.com/Account/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71185.jpg",
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
        entryUrl: "https://www.gardners.com/Account/Invoices",
    }

    constructor() {
        super(GardnersCollector.CONFIG);
    }
}
