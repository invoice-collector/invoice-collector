
import { SketchCollector } from '../../sketchCollector';

export class DirectEnergieComCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_energie_com",
        name: "direct-energie.com",
        description: "i18n.collectors.direct_energie_com.description",
        version: "0",
        website: "https://clients.direct-energie.com/mes-factures/ma-facture/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9078.jpg",
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
        entryUrl: "https://clients.direct-energie.com/mes-factures/ma-facture/",
    }

    constructor() {
        super(DirectEnergieComCollector.CONFIG);
    }
}
