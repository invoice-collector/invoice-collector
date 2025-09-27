
import { SketchCollector } from '../../sketchCollector';

export class KelkooCollector extends SketchCollector {

    static CONFIG = {
        id: "kelkoo",
        name: "Kelkoo",
        description: "i18n.collectors.kelkoo.description",
        version: "0",
        website: "https://merchants.extranet.kelkoo.net/de/registered/ViewInvoices.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3099.jpg",
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
        entryUrl: "https://merchants.extranet.kelkoo.net/de/registered/ViewInvoices.do",
    }

    constructor() {
        super(KelkooCollector.CONFIG);
    }
}
