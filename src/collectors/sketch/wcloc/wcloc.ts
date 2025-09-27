
import { SketchCollector } from '../../sketchCollector';

export class WclocCollector extends SketchCollector {

    static CONFIG = {
        id: "wcloc",
        name: "WCLOC",
        description: "i18n.collectors.wcloc.description",
        version: "0",
        website: "https://clients.wcloc.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421184.jpg",
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
        entryUrl: "https://clients.wcloc.com/invoices",
    }

    constructor() {
        super(WclocCollector.CONFIG);
    }
}
