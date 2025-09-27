
import { SketchCollector } from '../../sketchCollector';

export class EvnCollector extends SketchCollector {

    static CONFIG = {
        id: "evn",
        name: "EVN",
        description: "i18n.collectors.evn.description",
        version: "0",
        website: "https://www.evn.at/CustomerPortal/InvoicesArchive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2691932.jpg",
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
        entryUrl: "https://www.evn.at/CustomerPortal/InvoicesArchive",
    }

    constructor() {
        super(EvnCollector.CONFIG);
    }
}
