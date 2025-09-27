
import { SketchCollector } from '../../sketchCollector';

export class MesquiteTxCollector extends SketchCollector {

    static CONFIG = {
        id: "mesquite_tx",
        name: "Mesquite TX",
        description: "i18n.collectors.mesquite_tx.description",
        version: "0",
        website: "https://ipn.paymentus.com/cp/msqu?lang=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382657.jpg",
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
        entryUrl: "https://ipn.paymentus.com/cp/msqu?lang=en",
    }

    constructor() {
        super(MesquiteTxCollector.CONFIG);
    }
}
