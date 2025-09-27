
import { SketchCollector } from '../../sketchCollector';

export class TirehubCollector extends SketchCollector {

    static CONFIG = {
        id: "tirehub",
        name: "TireHub",
        description: "i18n.collectors.tirehub.description",
        version: "0",
        website: "https://secure.versapay.com/payables/tirehub/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593577.jpg",
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
        entryUrl: "https://secure.versapay.com/payables/tirehub/invoices",
    }

    constructor() {
        super(TirehubCollector.CONFIG);
    }
}
