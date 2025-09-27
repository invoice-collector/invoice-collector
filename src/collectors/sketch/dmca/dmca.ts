
import { SketchCollector } from '../../sketchCollector';

export class DmcaCollector extends SketchCollector {

    static CONFIG = {
        id: "dmca",
        name: "DMCA",
        description: "i18n.collectors.dmca.description",
        version: "0",
        website: "https://www.dmca.com/Billing/default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973262.jpg",
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
        entryUrl: "https://www.dmca.com/Billing/default.aspx",
    }

    constructor() {
        super(DmcaCollector.CONFIG);
    }
}
