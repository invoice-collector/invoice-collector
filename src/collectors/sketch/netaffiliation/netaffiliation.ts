
import { SketchCollector } from '../../sketchCollector';

export class NetaffiliationCollector extends SketchCollector {

    static CONFIG = {
        id: "netaffiliation",
        name: "NetAffiliation",
        description: "i18n.collectors.netaffiliation.description",
        version: "0",
        website: "https://www6.netaffiliation.com/billing/in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84339.jpg",
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
        entryUrl: "https://www6.netaffiliation.com/billing/in",
    }

    constructor() {
        super(NetaffiliationCollector.CONFIG);
    }
}
