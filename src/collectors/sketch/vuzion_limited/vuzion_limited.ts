
import { SketchCollector } from '../../sketchCollector';

export class VuzionLimitedCollector extends SketchCollector {

    static CONFIG = {
        id: "vuzion_limited",
        name: "Vuzion Limited",
        description: "i18n.collectors.vuzion_limited.description",
        version: "0",
        website: "https://partner.vuzion.cloud/ccp/v/pa/ccp-billing/history-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480720.jpg",
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
        entryUrl: "https://partner.vuzion.cloud/ccp/v/pa/ccp-billing/history-invoices",
    }

    constructor() {
        super(VuzionLimitedCollector.CONFIG);
    }
}
