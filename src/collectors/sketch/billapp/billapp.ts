
import { SketchCollector } from '../../sketchCollector';

export class BillappCollector extends SketchCollector {

    static CONFIG = {
        id: "billapp",
        name: "billapp",
        description: "i18n.collectors.billapp.description",
        version: "0",
        website: "http://www.billapp.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/499.jpg",
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
        entryUrl: "http://www.billapp.de/",
    }

    constructor() {
        super(BillappCollector.CONFIG);
    }
}
