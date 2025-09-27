
import { SketchCollector } from '../../sketchCollector';

export class ManoManoProCollector extends SketchCollector {

    static CONFIG = {
        id: "mano_mano_pro",
        name: "Mano Mano Pro",
        description: "i18n.collectors.mano_mano_pro.description",
        version: "0",
        website: "https://pro.manomano.fr/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1266385.jpg",
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
        entryUrl: "https://pro.manomano.fr/mes-factures",
    }

    constructor() {
        super(ManoManoProCollector.CONFIG);
    }
}
