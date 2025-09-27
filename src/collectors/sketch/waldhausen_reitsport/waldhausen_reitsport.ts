
import { SketchCollector } from '../../sketchCollector';

export class WaldhausenReitsportCollector extends SketchCollector {

    static CONFIG = {
        id: "waldhausen_reitsport",
        name: "Waldhausen Reitsport",
        description: "i18n.collectors.waldhausen_reitsport.description",
        version: "0",
        website: "https://www.waldhausen.com/b2binvoicelist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2158082.jpg",
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
        entryUrl: "https://www.waldhausen.com/b2binvoicelist",
    }

    constructor() {
        super(WaldhausenReitsportCollector.CONFIG);
    }
}
