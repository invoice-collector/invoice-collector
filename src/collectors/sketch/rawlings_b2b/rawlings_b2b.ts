
import { SketchCollector } from '../../sketchCollector';

export class RawlingsB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "rawlings_b2b",
        name: "Rawlings B2B",
        description: "i18n.collectors.rawlings_b2b.description",
        version: "0",
        website: "b2b.rawlings.com/orderhistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1212176.jpg",
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
        entryUrl: "b2b.rawlings.com/orderhistory",
    }

    constructor() {
        super(RawlingsB2bCollector.CONFIG);
    }
}
