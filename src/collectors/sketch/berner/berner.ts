
import { SketchCollector } from '../../sketchCollector';

export class BernerCollector extends SketchCollector {

    static CONFIG = {
        id: "berner",
        name: "Berner",
        description: "i18n.collectors.berner.description",
        version: "0",
        website: "https://shop.berner.eu/de-de/myberner/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1539455.jpg",
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
        entryUrl: "https://shop.berner.eu/de-de/myberner/invoice/",
    }

    constructor() {
        super(BernerCollector.CONFIG);
    }
}
